import type { Actions } from './$types';
import { dbAdmin } from '$lib/server/db';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const title = (formData.get('title') as string)?.trim();
        if (!title) return fail(400, { error: 'Title is required' });

        const author = (formData.get('author') as string)?.trim();
        if (!author) return fail(400, { error: 'Author is required' });

        const ratingRaw = (formData.get('rating') as string)?.trim();
        const rating = ratingRaw ? parseInt(ratingRaw, 10) : null;

        const { error } = await dbAdmin.from('books').insert({
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
        });

        if (error) return fail(500, { error: error.message });

        throw redirect(303, '/admin/books');
    },
};
