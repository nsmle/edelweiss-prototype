import { layoutData } from '$lib/server/data';

export async function GET(data) {
    const { url } = data;
    const site = url.origin;

    const lastMod = new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split('.')[0] + '+07:00';

    const navHeaderUrls = layoutData.header.navigations.flatMap((nav) => nav.url);

    const navSitemap = layoutData.header.navigations
        .filter((nav) => nav.url !== '/')
        .map(
            (nav) => `
    <url>
        <loc>${(site + nav.url + '/').replace(/([^:]\/)\/+$/, '$1')}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>${nav.url == '/' ? '1.0' : '0.8'}</priority>
    </url>`
        );

    const footerSitemap = layoutData.footer.navigations.map((navigation) =>
        navigation.items
            .filter((nav) => !nav.url.includes('#') && !navHeaderUrls.includes(nav.url.split('#')[0]))
            .map(
                (nav) => `
    <url>
        <loc>${(site + nav.url + '/').replace(/([^:]\/)\/+$/, '$1')}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>0.7</priority>
    </url>`
            )
            .join('')
    );

    const sitemap = `
<?xml version="1.0" encoding="UTF-8" ?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    xsi:schemaLocation="
        http://www.sitemaps.org/schemas/sitemap/0.9
        https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-news/0.9
        https://www.google.com/schemas/sitemap-news/0.9/sitemap-news.xsd
        http://www.google.com/schemas/sitemap-image/1.1
        https://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd
        http://www.google.com/schemas/sitemap-video/1.1
        https://www.google.com/schemas/sitemap-video/1.1/sitemap-video.xsd
    "
>
    <url>
        <loc>${`${site}/`}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>1.0</priority>
        <video:video>
            <video:thumbnail_loc>https://i.ytimg.com/vi/m9FmY9KgfG4/hqdefault.jpg</video:thumbnail_loc>
            <video:title>Changes</video:title>
            <video:description>Blasterjaxx X Kickbait X CERES - Changes (Official Music Video)</video:description>
            <video:content_loc>https://www.youtube.com/watch?v=m9FmY9KgfG4</video:content_loc>
            <video:player_loc allow_embed="yes">https://www.youtube.com/embed/m9FmY9KgfG4</video:player_loc>
            <video:duration>155</video:duration>
            <video:category>Music Video</video:category>
        </video:video>
    </url>
    ${navSitemap.join('')}
    ${footerSitemap.join('')}
</urlset>`;

    return new Response(sitemap.trim(), { headers: { 'Content-Type': 'application/xml' } });
}
