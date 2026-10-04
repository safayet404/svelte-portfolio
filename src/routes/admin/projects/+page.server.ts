import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { dbAdmin } from '$lib/server/db';

export const load: PageServerLoad = async () => {
    const { data } = await dbAdmin
        .from('projects')
        .select('id, title, role, status, featured, visible, display_order, cover_image')
        .order('display_order', { ascending: true });

    return { projects: data ?? [] };
};

export const actions: Actions = {
    // Saves the order from the drag-and-drop list: the first id gets display_order 0, and so on.
    reorder: async ({ request }) => {
        const formData = await request.formData();
        let ids: unknown;
        try {
            ids = JSON.parse(String(formData.get('ids') ?? ''));
        } catch {
            return fail(400, { error: 'Invalid order' });
        }
        if (!Array.isArray(ids) || !ids.every((id) => typeof id === 'string')) {
            return fail(400, { error: 'Invalid order' });
        }

        const { data: existing } = await dbAdmin.from('projects').select('id');
        const known = new Set((existing ?? []).map((p) => String(p.id)));
        if (ids.length !== known.size || !ids.every((id) => known.has(id))) {
            return fail(400, { error: 'The project list changed. Reload and try again.' });
        }

        const results = await Promise.all(
            ids.map((id, index) => dbAdmin.from('projects').update({ display_order: index }).eq('id', id)),
        );
        const failed = results.find((r) => r.error);
        if (failed?.error) return fail(500, { error: failed.error.message });

        return { saved: true };
    },
};
