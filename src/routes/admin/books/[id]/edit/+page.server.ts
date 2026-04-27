import type { PageServerLoad, Actions } from './$types';
import { dbAdmin } from '$lib/server/db';
import { fail, redirect, error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    const { data, error: err } = await dbAdmin
        .from('books')
        .select('*')
        .eq('id', params.id)
        .single();

    if (err || !data) throw error(404, 'Book not found');
    return { book: data };
};

export const actions: Actions = {
    update: async ({ request, params }) => {
        const formData = await request.formData();

        const title = (formData.get('title') as string)?.trim();
        if (!title) return fail(400, { error: 'Title is required' });

        const author = (formData.get('author') as string)?.trim();
        if (!author) return fail(400, { error: 'Author is required' });

        const ratingRaw = (formData.get('rating') as string)?.trim();
        const rating = ratingRaw ? parseInt(ratingRaw, 10) : null;

        const { error: dbError } = await dbAdmin
            .from('books')
            .update({
                title,
                author,
                status: (formData.get('status') as string) ?? 'want-to-read',
                genre: (formData.get('genre') as string)?.trim() ?? '',
                rating: rating && rating >= 1 && rating <= 5 ? rating : null,
                start_date: (formData.get('start_date') as string) || null,
                end_date: (formData.get('end_date') as string) || null,
                notes: (formData.get('notes') as string)?.trim() ?? '',
                cover_url: (formData.get('cover_url') as string)?.trim() ?? '',
                visible: formData.get('visible') === 'on',
            })
            .eq('id', params.id);

        if (dbError) return fail(500, { error: dbError.message });

        throw redirect(303, '/admin/books');
    },

    delete: async ({ params }) => {
        await dbAdmin.from('books').delete().eq('id', params.id);
        throw redirect(303, '/admin/books');
    },
};
