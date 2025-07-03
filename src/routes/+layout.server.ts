import { getAccessPageLog } from '$utils/log-telegram.util';
import type { LayoutServerLoad } from './$types';

interface LayoutData {
    brand: {
        name: string;
        siteName: string;
        motto: string;
        description: string;
    };
    isProduction: boolean;
    footer: {
        navigations: Array<{
            label: string;
            items: Array<{ title: string; url: string }>;
        }>;
        socials: {
            twitter: string;
            instagram: string;
            linkedin: string;
            youtube: string;
        };
        copyright: {
            holder: string;
            year: number;
            link: string;
        };
    };
}

export const load: LayoutServerLoad<LayoutData> = async (page) => {
    const isProduction = Boolean(
        process.env?.VERCEL ? Boolean(process.env?.VERCEL) : process.env.NODE_ENV === 'production'
    );

    let logContent = '';
    if (isProduction) logContent = await getAccessPageLog(page);

    return {
        brand: {
            name: 'Edelweiss',
            siteName: 'Edelweiss Photobooth',
            motto: 'Ciptakan moment, abadikan kenangan',
            description:
                'Ciptakan moment dan abadikan kenangan, teman pendamping setiap moment penting mu dengan layanan yang terbaik dan terpercaya.'
        },
        isProduction: isProduction,
        header: {
            navigations: [
                { href: '/', label: 'Beranda' },
                { href: '/service', label: 'Layanan' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/about', label: 'Tentang Kami' },
                { href: '/contact', label: 'Kontak Kami' }
            ]
        },
        footer: {
            navigations: [
                {
                    label: 'Layanan',
                    items: [
                        { title: 'Jelajahi Layanan', url: '/service' },
                        { title: 'Jelajahi Gallery', url: '/gallery' },
                        { title: 'Layanan Terbaru', url: '/service#latest' },
                        { title: 'Layanan Terpopuler', url: '/service#popular' },
                        { title: 'Layanan Terbaik', url: '/service#best' }
                    ]
                },
                {
                    label: 'Tentang Kami',
                    items: [
                        { title: 'Testimoni', url: '/about#testimonials' },
                        { title: 'Berita', url: '/about#news' },
                        { title: 'Blog', url: '/blog' },
                        { title: 'Kisah Kami', url: '/about#story' },
                        { title: 'Tentang Kami', url: '/about' }
                    ]
                },
                {
                    label: 'Dukungan',
                    items: [
                        { title: 'Bantuan', url: '/help' },
                        { title: 'Syarat & Ketentuan', url: '/terms' },
                        { title: 'Kebijakan Privasi', url: '/privacy' },
                        { title: 'Kebijakan Cookie', url: '/cookie' },
                        { title: 'Kontak Kami', url: '/contact' }
                    ]
                }
            ],
            socials: {
                twitter: 'nsmle_',
                instagram: 'nsmle_',
                linkedin: 'fikipratama',
                youtube: 'nsmle'
            },
            copyright: {
                holder: 'nsmle Lab',
                year: new Date().getFullYear(),
                link: 'https://github.com/nsmle/edelweiss-prototype'
            }
        },
        logContent: logContent
    };
};
