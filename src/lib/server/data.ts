export const layoutData = {
    brand: {
        name: 'Edelweiss',
        siteName: 'Edelweiss Photobooth',
        motto: 'Ciptakan moment, abadikan kenangan',
        description:
            'Ciptakan moment dan abadikan kenangan, teman pendamping setiap moment penting mu dengan layanan yang terbaik dan terpercaya.'
    },
    header: {
        navigations: [
            {
                title: 'Beranda',
                url: '/'
            },
            {
                title: 'Layanan',
                url: '/service'
            },
            {
                title: 'Gallery',
                url: '/gallery'
            },
            {
                title: 'Tentang Kami',
                url: '/about'
            },
            {
                title: 'Kontak Kami',
                url: '/contact'
            }
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
            youtube: 'nsmle',
            github: 'nsmle'
        },
        copyright: {
            holder: 'nsmle Lab',
            year: new Date().getFullYear(),
            link: 'https://github.com/nsmle/edelweiss-prototype'
        }
    }
};

export type LayoutData = typeof layoutData & {
    isProduction: boolean;
    logToken: string | null;
};
