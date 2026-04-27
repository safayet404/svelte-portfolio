import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

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
