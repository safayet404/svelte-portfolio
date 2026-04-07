import type { PageServerLoad } from './$types';
import { dbAdmin } from '$lib/server/db';

export const load: PageServerLoad = async () => {
    const { data } = await dbAdmin
        .from('blogs')
        .select('id, slug, title, date, published, tags')
        .order('date', { ascending: false });

    return { blogs: data ?? [] };
};
