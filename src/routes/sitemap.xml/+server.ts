import type { RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/server/db';

export const GET: RequestHandler = async () => {
    const { data: blogs } = await db
        .from('blogs')
        .select('slug, date, updated_at')
        .eq('published', true)
        .order('date', { ascending: false });

    const staticPages = [
        { url: 'https://safayet.me', priority: '1.0', changefreq: 'monthly' },
        { url: 'https://safayet.me/blog', priority: '0.9', changefreq: 'weekly' },
    ];

    const blogPages = (blogs ?? []).map((b) => ({
        url: `https://safayet.me/blog/${b.slug}`,
        lastmod: b.updated_at ? b.updated_at.split('T')[0] : b.date,
        priority: '0.8',
        changefreq: 'monthly',
    }));

    const allPages = [...staticPages, ...blogPages];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
    .map(
        (p) => `  <url>
    <loc>${p.url}</loc>${'lastmod' in p ? `\n    <lastmod>${p.lastmod}</lastmod>` : ''}
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
    )
    .join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=3600',
        },
    });
};
