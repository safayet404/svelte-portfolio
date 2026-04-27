import { dbAdmin } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const { data: books, error } = await dbAdmin
        .from('books')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Admin books load error:', error);
        return { books: [] };
    }

    return { books: books ?? [] };
};
