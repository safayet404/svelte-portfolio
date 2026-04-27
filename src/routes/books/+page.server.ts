import { dbAdmin as db } from '$lib/server/db';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

const statusCycle: Record<string, string> = {
    'want-to-read': 'currently-reading',
    'currently-reading': 'read',
    'read': 'want-to-read',
};

export const load: PageServerLoad = async () => {
    const { data: books, error } = await db
        .from('books')
        .select('*')
        .eq('visible', true)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Books load error:', error);
        return { books: [] };
    }

    return { books: books ?? [] };
};

export const actions: Actions = {
    updateStatus: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id') as string;
        const currentStatus = formData.get('status') as string;

        if (!id || !currentStatus) return fail(400, { error: 'Missing fields' });

        const newStatus = statusCycle[currentStatus] ?? 'want-to-read';

        const { error } = await db
            .from('books')
            .update({ status: newStatus })
            .eq('id', id);

        if (error) return fail(500, { error: error.message });

        return { success: true };
    },
};
