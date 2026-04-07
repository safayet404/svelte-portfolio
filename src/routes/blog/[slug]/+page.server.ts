import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    const { data, error: err } = await db
        .from('blogs')
        .select('*')
        .eq('slug', params.slug)
        .eq('published', true)
        .single();

    if (err || !data) {
        throw error(404, 'Blog post not found');
    }

    return { blog: data };
};
