import type { Actions, PageServerLoad } from './$types';
import { redirect, fail } from '@sveltejs/kit';
import { createHmac } from 'crypto';
import { ADMIN_PASSWORD, ADMIN_SECRET } from '$env/static/private';

export const load: PageServerLoad = async ({ cookies }) => {
    const cookie = cookies.get('admin_session');
    if (cookie) throw redirect(303, '/admin');
    return {};
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const password = data.get('password')?.toString() ?? '';

        if (password !== ADMIN_PASSWORD) {
            return fail(401, { error: 'Invalid password' });
        }

        const payload = `admin-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const sig = createHmac('sha256', ADMIN_SECRET).update(payload).digest('hex');
        const token = `${payload}.${sig}`;

        cookies.set('admin_session', token, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 24 hours
            secure: process.env.NODE_ENV === 'production',
        });

        throw redirect(303, '/admin');
    },
};
