<script lang="ts">
    const services = [
        {
            name: 'Wedding',
            description: 'Acara pernikahan sakral yang mengikat dua orang dalam ikatan suci.',
            slug: 'wedding',
            price: 5000000,
            place: 'Ballroom & Outdoor',
            priceNormal: 15000000,
            duration: 'hari',
            order: 12,
            image: '/wedding.webp',
            rating: 6.2
        },
        {
            name: 'Prewedding',
            description: 'Sesi foto sebelum pernikahan untuk mengabadikan momen spesial.',
            slug: 'prewedding',
            price: 3000000,
            place: 'Studio & Nature',
            priceNormal: 10000000,
            duration: 'hari',
            order: 17,
            image: '/prewedding-2.png',
            rating: 8.6
        },
        {
            name: 'Festival',
            description: 'Festival untuk merayakan sesuatu dengan berbagai kegiatan.',
            slug: 'festival',
            place: 'Backroom & Expo Area',
            priceNormal: 42000000,
            price: 25000000,
            duration: 'event',
            order: 30,
            image: '/festival.jpg',
            rating: 7.6
        },
        {
            name: 'Launching Produk',
            description: 'Acara memperkenalkan produk baru ke publik.',
            slug: 'product-launch',
            price: 1400000,
            place: 'Indoor only',
            priceNormal: 3000000,
            duration: 'hari',
            order: 57,
            image: '/product-launch.png',
            rating: 6.2
        },
        {
            name: 'Job Fair',
            description: 'Acara mempertemukan pencari kerja dan perusahaan.',
            slug: 'job-fair',
            price: 2000000,
            place: 'Convention Hall / Office',
            priceNormal: 6000000,
            duration: 'hari',
            order: 45,
            image: '/job-fair.jpg',
            rating: 7.8
        },

        {
            name: 'Wisuda',
            description:
                'Wisuda adalah acara resmi yang diadakan untuk merayakan kelulusan mahasiswa dari perguruan tinggi, biasanya dihadiri oleh keluarga, teman, dan dosen.',
            slug: 'graduation',
            price: 600000,
            place: 'Auditorium / Aula',
            priceNormal: 1400000,
            duration: 'hari',
            order: 30,
            image: '/graduation.jpg',
            rating: 9.1
        }
    ];

    const humanizePrice = (price: number): string => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        })
            .format(price)
            .replace('Rp', '');
    };

    const calcDiscountPct = (priceNormal: number, priceAfterDiscount: number): number => {
        if (priceNormal <= 0 || priceAfterDiscount < 0) return 0;
        return Math.round(((priceNormal - priceAfterDiscount) / priceNormal) * 100);
    };
</script>

<svelte:head>
    <title>Layanan - Edelweiss Photobooth</title>
</svelte:head>

<div class="relative isolate mx-auto flex max-w-7xl items-center px-5 pt-14 sm:px-8 sm:pt-32" id="services">
    <div class="z-10 flex w-full flex-col items-center justify-start pt-8 sm:pt-8">
        <div class="flex h-full w-full flex-col">
            <h1
                class="font-inter text-6xl font-semibold tracking-tight text-nowrap text-gray-800/90 max-xl:text-4xl max-sm:text-2xl"
            >
                Services
            </h1>
            <span
                class="mt-2 font-sans text-sm font-medium tracking-normal text-gray-500 sm:mt-4 sm:max-w-2xl sm:text-xl"
            >
                Pilih layanan terbaik mu.
            </span>
        </div>
    </div>

    <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-31rem)]"
        aria-hidden="true"
    >
        <div
            class="-trangray-x-1/3 relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 rotate-20 bg-linear-to-tr from-green-400 to-purple-500 opacity-15 sm:left-[calc(50%-20rem)] sm:w-288.75"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
</div>

<div class="relative isolate flex w-full items-center px-4" id="services">
    <div class="relative isolate flex w-full flex-col items-center overflow-hidden">
        <div class="mx-auto mt-6 flex w-full max-w-7xl flex-col gap-6 gap-x-3 pb-8 sm:py-8 md:px-6 lg:px-6">
            {#each services as service, index (index)}
                {@const discountPct = calcDiscountPct(service.priceNormal, service.price)}
                <div
                    class="group/card relative flex w-full flex-col rounded-2xl bg-white shadow-2xl shadow-blue-100/50 transition-all duration-300 ease-in-out hover:shadow-blue-100/60 sm:shadow-blue-50/40 md:flex-row"
                >
                    <div
                        class="relative aspect-video shrink-0 overflow-hidden p-2 transition-all duration-300 ease-in-out group-hover/card:p-2.5 md:w-[22vw]"
                    >
                        <img
                            src={service.image}
                            alt={service.name}
                            class="h-full w-full rounded-xl object-cover transition-all duration-300 ease-in-out sm:rounded-l-3xl sm:rounded-r-xl sm:group-hover/card:rounded-3xl"
                        />
                    </div>
                    <div class="flex w-full flex-col p-6">
                        <div class="mb-2 flex items-center justify-between">
                            <h4 class="text-xl font-bold text-gray-700 sm:text-2xl">
                                {service.name}
                            </h4>

                            {#if discountPct > 0}
                                <span
                                    class="font-inter absolute top-2 right-2 rounded-sm rounded-tr-xl bg-green-200/85 px-2 py-0.5 text-center text-[11px] font-semibold text-nowrap text-green-600 transition-all hover:shadow-sm sm:bg-green-200/80 sm:px-3 sm:py-1 sm:text-xs md:flex"
                                    >Diskon {discountPct}%</span
                                >
                            {/if}
                        </div>
                        <div class="mt-1 mb-4.5 flex w-full flex-col justify-between sm:mb-8 sm:flex-row">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-start justify-start gap-0.5 sm:flex-row sm:gap-6">
                                    <div class="text-xs text-nowrap sm:text-sm">
                                        <span class="leading-normal font-medium text-gray-700/85">Lokasi</span>
                                        <span class="ml-0.5 font-semibold text-gray-700/95">{service.place}</span>
                                    </div>
                                    <div class="text-xs text-nowrap sm:text-sm">
                                        <span class="leading-normal font-medium text-gray-700/85">Sewa/Book Per</span>
                                        <span class="ml-0.5 font-semibold text-gray-700/95">{service.duration}</span>
                                    </div>
                                </div>
                                <div class="mt-2.5 flex max-w-2xl items-center sm:mt-1">
                                    <p class="text-xs font-medium text-balance text-gray-600/75 sm:text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                            <div
                                class="mt-4 flex w-full flex-row items-center justify-between sm:mt-0 sm:w-auto sm:flex-col sm:items-start sm:justify-end"
                            >
                                <div class="text-xs text-nowrap sm:text-sm">
                                    <span class="leading-normal font-medium text-gray-700/85">Rating</span>
                                    <span class="ml-1 font-semibold text-gray-700/95">{service.rating}</span>
                                </div>
                                <div class="text-xs text-nowrap sm:text-sm">
                                    <span class="leading-normal font-medium text-gray-700/85">Booked</span>
                                    <span class="ml-1 font-semibold text-gray-700/95">{service.order}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between">
                            <span
                                class="flex items-baseline gap-0.5 text-sm font-semibold text-gray-500 hover:underline sm:text-base"
                            >
                                Rp
                                <span class="font-inter text-sm font-bold text-gray-600 sm:text-lg"
                                    >{humanizePrice(service.price)}</span
                                >
                            </span>
                            <a
                                href={`/service/${service.slug}`}
                                class="flex items-center text-sm font-semibold text-gray-700 hover:text-green-600"
                            >
                                Detail
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="ml-2 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-31rem)]"
        aria-hidden="true"
    >
        <div
            class="-trangray-x-1/3 relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 rotate-20 bg-linear-to-tr from-green-400 to-purple-500 opacity-15 sm:left-[calc(50%-20rem)] sm:w-288.75"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
</div>
