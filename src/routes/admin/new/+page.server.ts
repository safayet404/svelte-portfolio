import type { Actions, PageServerLoad } from './$types';
import { redirect, fail } from '@sveltejs/kit';
import { dbAdmin } from '$lib/server/db';

export const load: PageServerLoad = async () => ({ });

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const slug = data.get('slug')?.toString().trim() ?? '';
        const title = data.get('title')?.toString().trim() ?? '';
        const title_bn = data.get('title_bn')?.toString().trim() ?? '';
        const excerpt = data.get('excerpt')?.toString().trim() ?? '';
        const excerpt_bn = data.get('excerpt_bn')?.toString().trim() ?? '';
        const content = data.get('content')?.toString() ?? '';
        const content_bn = data.get('content_bn')?.toString() ?? '';
        const date = data.get('date')?.toString() ?? new Date().toISOString().split('T')[0];
        const cover = data.get('cover')?.toString().trim() ?? '';
        const tagsRaw = data.get('tags')?.toString() ?? '';
        const published = data.get('published') === 'on';
        const tags = tagsRaw.split(',').map((t) => t.trim()).filter(Boolean);

        if (!slug || !title) return fail(400, { error: 'Slug and title are required' });

        const { error } = await dbAdmin.from('blogs').insert({
            slug, title, title_bn, excerpt, excerpt_bn,
            content, content_bn, date, cover, tags, published,
        });

        if (error) return fail(500, { error: error.message });

        throw redirect(303, '/admin');
    },
};
