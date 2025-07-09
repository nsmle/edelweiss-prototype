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
            }
            // {
            //     title: 'Testimoni',
            //     url: '/testimonials'
            // }
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
                    { title: 'Testimoni', url: '/testimonials' },
                    { title: 'Berita', url: '/about/#news' },
                    { title: 'Kontak Kami', url: '/about/#contact' },
                    { title: 'Kisah Kami', url: '/about/#stories' },
                    { title: 'Tentang Kami', url: '/about' }
                ]
            },
            {
                label: 'Dukungan',
                items: [
                    { title: 'Bantuan', url: '/help' },
                    { title: 'Syarat & Ketentuan', url: '/terms-and-conditions' },
                    { title: 'Kebijakan Privasi', url: '/privacy-policy' },
                    { title: 'Kebijakan Cookie', url: '/cookie-policy' },
                    { title: 'Hubungi Kami', url: '/about/#contact-us' }
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
    },
    video: {
        id: 'm9FmY9KgfG4',
        playlist: 'PLT3PaeByruw3yoalfpmGfSFgmMCCSXI61'
    }
};

export type LayoutData = typeof layoutData & {
    isProduction: boolean;
    logToken: string | null;
};
