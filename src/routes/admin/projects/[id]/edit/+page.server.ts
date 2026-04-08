import type { PageServerLoad, Actions } from './$types';
import { dbAdmin } from '$lib/server/db';
import { fail, redirect, error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    const { data, error: err } = await dbAdmin
        .from('projects')
        .select('*')
        .eq('id', params.id)
        .single();

    if (err || !data) throw error(404, 'Project not found');
    return { project: data };
};

async function uploadImage(file: File, projectTitle: string): Promise<string> {
    const ext = file.name.split('.').pop() ?? 'jpg';
    const slug = projectTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const filename = `${slug}-${Date.now()}.${ext}`;
    const buffer = await file.arrayBuffer();

    const { error: uploadError } = await dbAdmin.storage
        .from('project-images')
        .upload(filename, buffer, { contentType: file.type, upsert: true });

    if (uploadError) throw new Error(`Image upload failed: ${uploadError.message}`);

    const { data } = dbAdmin.storage.from('project-images').getPublicUrl(filename);
    return data.publicUrl;
}

export const actions: Actions = {
    update: async ({ request, params }) => {
        const formData = await request.formData();

        const title = (formData.get('title') as string)?.trim();
        if (!title) return fail(400, { error: 'Title is required' });

        // Handle image: use new upload if provided, else keep existing
        let coverImageUrl = (formData.get('existing_cover') as string) ?? '';
        const imageFile = formData.get('cover_image') as File;
        if (imageFile && imageFile.size > 0) {
            try {
                coverImageUrl = await uploadImage(imageFile, title);
            } catch (e: any) {
                return fail(500, { error: e.message });
            }
        }

        const techRaw = (formData.get('tech_stack') as string) ?? '';
        const techStack = techRaw.split(',').map((t) => t.trim()).filter(Boolean);

        const { error: dbError } = await dbAdmin
            .from('projects')
            .update({
                title,
                title_bn: (formData.get('title_bn') as string)?.trim() ?? '',
                description: (formData.get('description') as string)?.trim() ?? '',
                description_bn: (formData.get('description_bn') as string)?.trim() ?? '',
                cover_image: coverImageUrl,
                tech_stack: techStack,
                role: (formData.get('role') as string)?.trim() ?? '',
                status: (formData.get('status') as string) ?? 'completed',
                github_client_url: (formData.get('github_client_url') as string)?.trim() ?? '',
                github_server_url: (formData.get('github_server_url') as string)?.trim() ?? '',
                live_url: (formData.get('live_url') as string)?.trim() ?? '',
                featured: formData.get('featured') === 'on',
                visible: formData.get('visible') === 'on',
                display_order: parseInt((formData.get('display_order') as string) ?? '0', 10) || 0,
            })
            .eq('id', params.id);

        if (dbError) return fail(500, { error: dbError.message });

        throw redirect(303, '/admin/projects');
    },

    delete: async ({ params }) => {
        await dbAdmin.from('projects').delete().eq('id', params.id);
        throw redirect(303, '/admin/projects');
    },
};
