import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';

export const load: PageServerLoad = async () => {
    const [blogsResult, projectsResult] = await Promise.all([
        db
            .from('blogs')
            .select('slug, title, title_bn, excerpt, excerpt_bn, date, tags, cover')
            .eq('published', true)
            .order('date', { ascending: false })
            .limit(3),
        db
            .from('projects')
            .select('id, title, title_bn, description, description_bn, cover_image, tech_stack, role, status, github_url, live_url, featured')
            .eq('visible', true)
            .order('display_order', { ascending: true }),
    ]);

    return {
        latestBlogs: blogsResult.data ?? [],
        projects: projectsResult.data ?? [],
    };
};
