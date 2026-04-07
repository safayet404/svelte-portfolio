import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';

export const load: PageServerLoad = async () => {
    const { data } = await db
        .from('blogs')
        .select('slug, title, title_bn, excerpt, excerpt_bn, date, tags, cover')
        .eq('published', true)
        .order('date', { ascending: false })
        .limit(3);

    return { latestBlogs: data ?? [] };
};
