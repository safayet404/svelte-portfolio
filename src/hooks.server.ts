import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { createHmac, timingSafeEqual } from 'crypto';
import { ADMIN_SECRET } from '$env/static/private';

function verifyAdminCookie(cookie: string | undefined): boolean {
    if (!cookie) return false;
    try {
        const dotIndex = cookie.lastIndexOf('.');
        if (dotIndex === -1) return false;
        const payload = cookie.slice(0, dotIndex);
        const sig = cookie.slice(dotIndex + 1);
        const expected = createHmac('sha256', ADMIN_SECRET).update(payload).digest('hex');
        return timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
    } catch {
        return false;
    }
}

export const handle: Handle = async ({ event, resolve }) => {
    const path = event.url.pathname;

    if (path.startsWith('/admin') && path !== '/admin/login') {
        const cookie = event.cookies.get('admin_session');
        const valid = verifyAdminCookie(cookie);
        if (!valid) {
            throw redirect(303, '/admin/login');
        }
        event.locals.isAdmin = true;
    }

    return resolve(event);
};
