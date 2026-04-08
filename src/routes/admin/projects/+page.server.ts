import type { PageServerLoad } from './$types';
import { dbAdmin } from '$lib/server/db';

export const load: PageServerLoad = async () => {
    const { data } = await dbAdmin
        .from('projects')
        .select('id, title, role, status, featured, visible, display_order, cover_image')
        .order('display_order', { ascending: true });

    return { projects: data ?? [] };
};
