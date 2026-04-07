import type { Actions, PageServerLoad } from './$types';
import { redirect, fail, error } from '@sveltejs/kit';
import { dbAdmin } from '$lib/server/db';

export const load: PageServerLoad = async ({ params }) => {
    const { data, error: err } = await dbAdmin
        .from('blogs')
        .select('*')
        .eq('slug', params.slug)
        .single();

    if (err || !data) throw error(404, 'Blog not found');
    return { blog: data };
};

export const actions: Actions = {
    update: async ({ request, params }) => {
        const data = await request.formData();

        const newSlug = data.get('slug')?.toString().trim() ?? '';
        const title = data.get('title')?.toString().trim() ?? '';
        const title_bn = data.get('title_bn')?.toString().trim() ?? '';
        const excerpt = data.get('excerpt')?.toString().trim() ?? '';
        const excerpt_bn = data.get('excerpt_bn')?.toString().trim() ?? '';
        const content = data.get('content')?.toString() ?? '';
        const content_bn = data.get('content_bn')?.toString() ?? '';
        const date = data.get('date')?.toString() ?? '';
        const cover = data.get('cover')?.toString().trim() ?? '';
        const tagsRaw = data.get('tags')?.toString() ?? '';
        const published = data.get('published') === 'on';
        const tags = tagsRaw.split(',').map((t) => t.trim()).filter(Boolean);

        const { error: err } = await dbAdmin.from('blogs').update({
            slug: newSlug, title, title_bn, excerpt, excerpt_bn,
            content, content_bn, date, cover, tags, published,
        }).eq('slug', params.slug);

        if (err) return fail(500, { error: err.message });
        throw redirect(303, '/admin');
    },

    delete: async ({ params }) => {
        const { error: err } = await dbAdmin.from('blogs').delete().eq('slug', params.slug);
        if (err) return fail(500, { error: err.message });
        throw redirect(303, '/admin');
    },
};
