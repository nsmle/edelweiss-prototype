<script lang="ts">
    import Embed from '$lib/embed.svelte';
    import Hero from '$lib/hero.svelte';
    import HeroTestimoni from '$lib/hero.testimoni.svelte';
    import StackFavorite from '$lib/stack.favorite.svelte';
    import StackRecommendation from '$lib/stack.recommendation.svelte';
    import type { PageData } from './$types';
    import { page } from '$app/state';

    export let data: PageData;

    const favoriteServices = [
        {
            name: 'Wedding',
            slug: 'wedding',
            price: '5JT',
            anual: 'hari',
            order: 12,
            image: '/wedding.webp'
        },
        {
            name: 'Prewedding',
            slug: 'prewedding',
            price: '3JT',
            anual: 'hari',
            order: 17,
            image: '/prewedding.png'
        },
        {
            name: 'Event Kantor',
            slug: 'corporate-event',
            price: '2JT',
            anual: 'hari',
            order: 21,
            image: '/corporate-event.webp'
        },
        {
            name: 'Launching Produk',
            slug: 'product-launch',
            price: '1.4K',
            anual: 'hari',
            order: 52,
            image: '/product-launch.png'
        },
        {
            name: 'Wisuda',
            slug: 'graduation',
            price: '600K',
            anual: 'hari',
            order: 63,
            image: '/graduation.jpg'
        },
        {
            name: 'Job Fair',
            slug: 'job-fair',
            price: '2JT',
            anual: 'hari',
            order: 45,
            image: '/job-fair.jpg'
        },
        {
            name: 'Festival',
            slug: 'festival',
            price: '25JT',
            anual: 'event',
            order: 30,
            image: '/festival.jpg'
        },
        {
            name: 'Ulang Tahun',
            slug: 'birthday',
            price: '300K',
            anual: 'hari',
            order: 20,
            image: '/birthday.png'
        }
    ];

    const recommendationServices = [
        {
            name: 'Festival',
            slug: 'festival',
            place: 'Backroom & Expo Area',
            priceNormal: '42JT',
            price: '25JT',
            anual: 'event',
            order: 30,
            image: '/festival.jpg',
            rating: 7.6
        },
        {
            name: 'Launching Produk',
            slug: 'product-launch',
            price: '1.4JT',
            place: 'Indoor only',
            priceNormal: '3JT',
            anual: 'hari',
            order: 57,
            image: '/product-launch.png',
            rating: 6.2
        },
        {
            name: 'Job Fair',
            slug: 'job-fair',
            price: '2JT',
            place: 'Convention Hall / Office',
            priceNormal: '6JT',
            anual: 'hari',
            order: 45,
            image: '/job-fair.jpg',
            rating: 7.8
        },
        {
            name: 'Prewedding',
            slug: 'prewedding',
            price: '3JT',
            place: 'Studio & Nature',
            priceNormal: '10JT',
            anual: 'hari',
            order: 17,
            image: '/prewedding-2.png',
            rating: 8.6
        },
        {
            name: 'Wedding',
            slug: 'wedding',
            price: '5JT',
            place: 'Ballroom & Outdoor',
            priceNormal: '15JT',
            anual: 'hari',
            order: 12,
            image: '/wedding.webp',
            rating: 6.2
        },
        {
            name: 'Wisuda',
            slug: 'graduation',
            price: '600K',
            place: 'Auditorium / Aula',
            priceNormal: '1.4JT',
            anual: 'hari',
            order: 30,
            image: '/graduation.jpg',
            rating: 9.1
        }
    ];
</script>

<svelte:head>
    <title>{data.title}</title>
    <link rel="preload" fetchpriority="high" as="image" href="/hero-image.webp" type="image/webp" />
</svelte:head>

<Hero />

<div class="3xl:mt-0 relative isolate mx-auto -mt-[30vh] sm:max-xl:-mt-[40vh] md:-mt-[10vh]">
    <div class="z-10 mx-auto pt-52 pb-12 sm:py-48 lg:py-56">
        <div class="mx-auto flex max-w-7xl px-4 sm:px-8">
            <div class="text-start">
                <h1
                    class="font-sans text-xs/10 font-bold tracking-normal text-balance text-gray-500 uppercase sm:text-base/10"
                >
                    Booking layanan favorit
                </h1>
                <h1
                    class="text-6xl font-semibold tracking-tight text-balance text-gray-800/90 max-xl:text-5xl max-sm:text-3xl"
                >
                    Layanan favorit
                </h1>
                <p class="mt-4 text-sm font-medium text-pretty text-gray-500/95 sm:mt-6 sm:max-w-3xl sm:text-xl/8">
                    Dipilih oleh banyak pelanggan setia, layanan ini menjadi andalan dalam berbagai acara spesial karena
                    kualitasnya yang konsisten dan hasil yang selalu memuaskan.
                </p>
            </div>
        </div>
        <div class="mt-10">
            <StackFavorite services={favoriteServices} />
        </div>
    </div>
    <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
    >
        <div
            class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
</div>

<div class="relative isolate mx-auto flex max-w-7xl items-center px-4 pt-12 sm:px-8 sm:pt-28">
    <div class="z-10 flex flex-col py-12 sm:py-28 md:flex-row lg:py-36">
        <div class="flex flex-col text-start">
            <h1
                class="font-sans text-xs/10 font-bold tracking-normal text-balance text-gray-500 uppercase sm:text-base/10"
            >
                Masih ragu?
            </h1>
            <h1
                class="text-6xl font-semibold tracking-tight text-balance text-gray-800/90 max-xl:text-5xl max-sm:text-3xl"
            >
                Belum yakin layanan mana yang cocok untukmu
            </h1>
            <p class="mt-4 text-sm font-medium text-pretty text-gray-500/95 sm:mt-6 sm:max-w-2xl sm:text-xl/8">
                Sulit menentukan layanan yang tepat sesuai dengan kebutuhanmu? Jangan khawatir, kami hadir untuk
                membantu kamu memilih layanan terbaik agar sesuai dengan keinginan mu.
            </p>
            <div class="order-last mt-4 flex items-center justify-start sm:mt-10">
                <a
                    href="/about/#contact-us"
                    class="ring-primary-200/20 focus:ring-primary-200/50 w-full cursor-pointer rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-500 px-8 py-2.5 text-center text-sm font-medium text-white ring-4 transition-all duration-300 ease-in-out outline-none hover:from-green-300 hover:via-green-400 hover:to-green-500 sm:w-auto sm:text-lg"
                    >Hubungi Kami</a
                >
            </div>
            <div class="group/studio mt-6 flex h-42 w-full transition-all duration-300 ease-in-out md:hidden">
                <div
                    class="ring-primary-500/10 relative isolate flex h-full w-full items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat ring-4 transition-all duration-1000 ease-in-out group-hover/studio:ring-transparent sm:rounded-4xl sm:ring-8 group-hover/studio:sm:shadow-[0_35px_35px_rgba(20,50,90,0.25)]"
                    style="background-image: url('/studio.jpg');"
                >
                    <div
                        class="absolute inset-x-0 top-0 -z-10 h-full min-h-full w-full transform-gpu rounded-2xl transition-all duration-300 ease-in-out group-hover/studio:opacity-0"
                        style="background-image: linear-gradient(to top, rgba(4, 11, 42, 0.6), rgba(4, 11, 42, 0.10) 15%);"
                    ></div>
                    <span
                        class="font-display mb-2 text-xs font-medium text-gray-50 transition-all duration-300 ease-in-out text-shadow-lg group-hover/studio:opacity-0"
                        >Studio</span
                    >
                </div>
            </div>
        </div>
        <div
            class="group/studio mt-6 hidden h-42 p-0 transition-all duration-300 ease-in-out sm:mt-0 sm:h-115 sm:w-auto sm:min-w-1/3 sm:pl-10 md:flex md:w-full md:max-w-1/2 lg:max-w-1/3 xl:pl-20"
        >
            <div
                class="ring-primary-500/10 relative isolate flex h-full w-full items-center justify-center rounded-3xl bg-cover bg-center bg-no-repeat ring-4 transition-all duration-1000 ease-in-out group-hover/studio:ring-transparent sm:rounded-4xl sm:ring-8 group-hover/studio:sm:shadow-[0_35px_35px_rgba(20,50,90,0.25)]"
                style="background-image: url('/studio.jpg');"
            >
                <div
                    class="absolute inset-x-0 top-0 -z-10 h-full min-h-full w-full transform-gpu rounded-3xl transition-all duration-300 ease-in-out group-hover/studio:opacity-0 sm:rounded-4xl"
                    style="background-image: linear-gradient(to top, rgba(4, 11, 42, 0.6), rgba(4, 11, 42, 0.10) 15%);"
                ></div>
                <span
                    class="font-display mb-2 text-xs font-medium text-gray-50 transition-all duration-300 ease-in-out text-shadow-lg group-hover/studio:opacity-0 sm:text-lg"
                    >Studio</span
                >
            </div>
        </div>
    </div>

    <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-31rem)]"
        aria-hidden="true"
    >
        <div
            class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/3 rotate-20 bg-linear-to-tr from-green-400 to-purple-500 opacity-25 sm:left-[calc(50%-20rem)] sm:w-288.75"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
</div>

<div class="relative isolate pt-12 sm:pt-28">
    <div class="z-10 mx-auto py-12 text-center sm:py-28 lg:py-36">
        <div class="mx-auto max-w-7xl px-4 sm:px-8">
            <h1
                class="font-sans text-xs/10 font-bold tracking-normal text-balance text-gray-500 uppercase sm:text-base/10"
            >
                Layanan pilihan
            </h1>
            <h1
                class="text-6xl font-semibold tracking-tight text-balance text-gray-800/90 max-xl:text-5xl max-sm:text-3xl"
            >
                Rekomendasi Layanan
            </h1>
            <p class="mt-4 text-sm font-medium text-pretty text-gray-500/95 sm:mt-6 sm:text-xl/8">
                Berikut rekomendasi layanan yang mungkin cocok buat kamu
            </p>
        </div>

        <div class="mt-10">
            <StackRecommendation services={recommendationServices} />
        </div>
    </div>
    <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-22rem)]"
        aria-hidden="true"
    >
        <div
            class="relative left-[calc(50%+3rem)] aspect-1155/678 w-244.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff6b6b] to-[#3790fa] opacity-20 sm:left-[calc(10%+16rem)] sm:w-228.75"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
</div>

<div class="relative isolate mx-auto flex max-w-7xl items-center px-4 pt-12 sm:px-8 sm:pt-18">
    <div class="z-10 mx-auto flex justify-center text-center sm:py-28 md:flex-row lg:py-36">
        <div class="flex flex-col justify-center text-center">
            <h1
                class="font-sans text-xs/10 font-bold tracking-normal text-balance text-gray-500 uppercase sm:text-base/10"
            >
                3 Alasan kenapa kami layak dipilih
            </h1>
            <h1 class="text-3xl font-semibold tracking-tight text-balance text-gray-800/90 sm:text-6xl">
                Apa yang membuat kami berbeda
            </h1>
            <p
                class="mx-auto mt-4 text-sm font-medium text-pretty text-gray-500/95 sm:mt-6 sm:max-w-3xl sm:px-4 sm:text-xl/8"
            >
                Kami memahami pentingnya momen spesial dalam hidup, oleh karena itu kami berkomitmen untuk memberikan
                layanan yang terbaik. Berikut adalah tiga alasan mengapa kami layak dipilih sebagai mitra fotografi mu.
            </p>
            <div class="mt-10 grid grid-cols-1 justify-center gap-6 px-4 sm:mt-14 sm:grid-cols-3 sm:gap-6 sm:p-0">
                <div
                    class="sm:mx-none group/card mx-auto max-w-md cursor-context-menu rounded-2xl border border-gray-200 p-6 py-14 shadow-2xl shadow-blue-50/10 transition-all duration-300 ease-in-out hover:rounded-3xl hover:border-transparent hover:bg-white hover:shadow-blue-800/10 sm:max-w-md sm:rounded-3xl sm:p-8 sm:py-16 sm:hover:rounded-4xl"
                >
                    <div
                        class="bg-service-4 group-hover/card:ring-service-4/15 mb-6 inline-flex rounded-2xl p-5 shadow-blue-700/20 transition-all duration-300 ease-in-out group-hover/card:shadow-2xl group-hover/card:ring-8 sm:mb-8 sm:rounded-3xl sm:p-7"
                    >
                        <svg
                            class="size-8 text-gray-100 sm:size-9"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"
                            />
                        </svg>
                    </div>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-600 sm:text-2xl">
                        Kualitas Foto Profesional
                    </h5>
                    <p class="mt-3 font-sans text-sm font-medium text-gray-500 sm:text-base">
                        Menghasilkan foto berkualitas tinggi dengan peralatan profesional dan teknik fotografi yang
                        dapat diandalkan.
                    </p>
                </div>
                <div
                    class="sm:mx-none group/card mx-auto max-w-md cursor-context-menu rounded-2xl border border-gray-200 p-6 py-14 shadow-2xl shadow-blue-50/10 transition-all duration-300 ease-in-out hover:rounded-3xl hover:border-transparent hover:bg-white hover:shadow-blue-800/10 sm:max-w-md sm:rounded-3xl sm:p-8 sm:py-16 sm:hover:rounded-4xl"
                >
                    <div
                        class="bg-service-2 group-hover/card:ring-service-2/15 mb-6 inline-flex rounded-2xl p-5 shadow-blue-700/20 transition-all duration-300 ease-in-out group-hover/card:shadow-2xl group-hover/card:ring-8 sm:mb-8 sm:rounded-3xl sm:p-7"
                    >
                        <svg
                            class="size-8 text-gray-100 sm:size-9"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"
                            />
                        </svg>
                    </div>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-600 sm:text-2xl">
                        Cetak Cepat dan Bagikan
                    </h5>
                    <p class="mt-3 font-sans text-sm font-medium text-gray-500 sm:text-base">
                        Menyediakan layanan cetak foto instan dan berbagi digital, sehingga kamu bisa langsung menikmati
                        hasilnya.
                    </p>
                </div>
                <div
                    class="sm:mx-none group/card mx-auto max-w-md cursor-context-menu rounded-2xl border border-gray-200 p-6 py-14 shadow-2xl shadow-blue-50/10 transition-all duration-300 ease-in-out hover:rounded-3xl hover:border-transparent hover:bg-white hover:shadow-blue-800/10 sm:max-w-md sm:rounded-3xl sm:p-8 sm:py-16 sm:hover:rounded-4xl"
                >
                    <div
                        class="bg-service-1 group-hover/card:ring-service-1/15 mb-6 inline-flex rounded-2xl p-5 shadow-blue-700/20 transition-all duration-300 ease-in-out group-hover/card:shadow-2xl group-hover/card:ring-8 sm:mb-8 sm:rounded-3xl sm:p-7"
                    >
                        <svg
                            class="size-8 text-gray-100 sm:size-9"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"
                            />
                        </svg>
                    </div>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-600 sm:text-2xl">Fleksibilitas Lokasi</h5>
                    <p class="mt-3 font-sans text-sm font-medium text-gray-500 sm:text-base">
                        Menyediakan layanan fotografi di berbagai lokasi, baik indoor maupun outdoor, sesuai dengan
                        kebutuhan acara.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="relative isolate flex items-center pt-12 sm:pt-18">
    <div class="z-10 w-full py-12 sm:py-28 md:flex-row lg:py-36">
        <HeroTestimoni />
    </div>

    <div
        class="absolute inset-x-0 top-[calc(100%-33rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-51rem)]"
        aria-hidden="true"
    >
        <div
            class="relative left-[calc(50%-11rem)] aspect-1155/678 w-244.5 -translate-x-1/3 rotate-30 bg-linear-to-tr from-green-400 to-purple-500 opacity-30 sm:left-[calc(50%-20rem)] sm:w-388.75"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
</div>

<div class="relative isolate mx-auto flex max-w-7xl flex-col items-center px-4 pt-12 sm:px-8 sm:pt-18">
    <div class="z-10 mx-auto flex justify-center text-center sm:pt-28 lg:pt-36">
        <div class="flex flex-col justify-center text-center">
            <h1
                class="font-sans text-xs/10 font-bold tracking-normal text-balance text-gray-500 uppercase sm:text-base/10"
            >
                Tunggu apa lagi
            </h1>
            <h1
                class="text-6xl font-semibold tracking-tight text-balance text-gray-800/90 max-xl:text-5xl max-sm:text-3xl"
            >
                Pesan Sekarang Juga
            </h1>
            <p
                class="mx-auto mt-4 text-sm font-medium text-pretty text-gray-500/95 sm:mt-6 sm:max-w-3xl sm:px-4 sm:text-xl/8"
            >
                Dengan pengalaman dan dedikasi kami, kami siap membantu kamu menciptakan momen yang tak terlupakan.
                Pesan sekarang dan biarkan kami menangkap setiap detil dari acara spesial mu!
            </p>
            <div
                class="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-y-2 sm:mt-10 sm:flex-row sm:gap-x-4 sm:px-4"
            >
                <a
                    href="/about/#contact-us"
                    class="w-full cursor-pointer rounded-lg border border-gray-400 px-8 py-2 text-center text-sm font-medium text-nowrap text-gray-700 backdrop-blur-2xl backdrop-brightness-105 transition-all duration-300 ease-in-out outline-none hover:border-green-400 hover:bg-gradient-to-br hover:from-green-300 hover:via-green-400 hover:to-green-500 hover:text-white hover:ring-4 hover:ring-green-200/20 focus:ring-4 focus:ring-green-200/50 sm:w-auto sm:rounded-full sm:text-lg"
                    >Hubungi Kami</a
                >
                <a
                    href="/booking"
                    class="ring-primary-200/20 focus:ring-primary-200/50 w-full cursor-pointer rounded-lg bg-gradient-to-br from-green-400 via-green-500 to-green-500 px-8 py-2.5 text-center text-sm font-medium text-nowrap text-white ring-4 transition-all duration-300 ease-in-out outline-none hover:from-green-300 hover:via-green-400 hover:to-green-500 sm:w-auto sm:rounded-full sm:text-lg"
                    >Pesan Sekarang</a
                >
            </div>
        </div>
    </div>

    <div class="z-10 mx-auto flex w-full justify-center pt-8 sm:pt-18 md:px-4 lg:px-8 lg:pt-16">
        <Embed />
    </div>
</div>
