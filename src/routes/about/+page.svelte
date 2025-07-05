<script lang="ts">
    import NewsletterForm from '$lib/newsletter.form.svelte';

    let showMaps = $state(false);
    let isHeroAboutImgWrapperHovered = $state(false);
    let heroAboutImgWrapper: HTMLDivElement;

    $effect.pre((): void => {
        setTimeout((): void => {
            heroAboutImgWrapper.addEventListener('mouseover', () => {
                isHeroAboutImgWrapperHovered = true;
            });
            heroAboutImgWrapper.addEventListener('mouseleave', () => {
                isHeroAboutImgWrapperHovered = false;
            });
            showMaps = true;
        }, 700);
    });
</script>

<svelte:head>
    <title>Tentang kami - Edelweiss Photobooth</title>
</svelte:head>

<div class="relative isolate" id="stories">
    <div class="relative isolate mx-auto flex items-center overflow-hidden pt-12 sm:pt-28">
        <div
            class="z-10 mx-auto flex w-full flex-col items-center justify-center overflow-x-hidden px-4 pt-12 sm:px-0 sm:py-28 lg:flex-row lg:py-36"
        >
            <div class="flex w-full flex-col text-start sm:max-w-7xl sm:px-8">
                <div class="flex h-full w-full flex-col md:max-w-xl xl:max-w-max">
                    <h1
                        class="font-inter text-7xl font-semibold tracking-tight text-nowrap text-gray-800/90 max-xl:text-5xl max-sm:text-3xl"
                    >
                        Kami mengabadikan<br />
                        setiap momen spesial
                    </h1>
                    <p
                        class="mt-4 font-sans text-sm font-medium tracking-normal text-gray-500 sm:mt-6 sm:max-w-2xl sm:text-xl"
                    >
                        Setiap momen spesial layak diabadikan dengan sempurna. Dengan tim profesional dan teknologi yang
                        kami miliki, kami menghadirkan kualitas tanpa kompromi. Desain yang memikat dan pendekatan
                        personal kami menjadikan setiap sesi fotografi terasa istimewa. Kami berkomitmen menghadirkan
                        pengalaman tak terlupakan untuk setiap perayaan berharga dalam hidup mu.
                    </p>
                </div>
            </div>
            <div
                class="group/hero-about mt-6 aspect-video w-full lg:absolute lg:top-0 lg:-right-50 lg:max-w-[55vw] lg:translate-y-50 2xl:translate-x-20"
                bind:this={heroAboutImgWrapper}
            >
                <div
                    class="relative isolate flex h-full w-full items-center rounded-3xl bg-black bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out sm:rounded-4xl group-hover/hero-about:sm:shadow-[0_35px_35px_rgba(20,50,90,0.25)]"
                    style={`background-image: url('${isHeroAboutImgWrapperHovered ? '/festival.jpg' : '/corporate-event.webp'}');`}
                >
                    <div
                        class="absolute inset-x-0 top-0 -z-10 h-full min-h-full w-full transform-gpu rounded-3xl transition-all duration-300 ease-in-out group-hover/hero-about:opacity-0 sm:rounded-4xl"
                        style="background-image: linear-gradient(to left, rgba(4, 11, 42, 0.01), rgba(4, 11, 42, 0.30) 15%);"
                    ></div>
                    <span
                        class="font-inter mx-auto text-center text-xs font-medium text-gray-50 drop-shadow-2xl transition-all duration-700 ease-in-out text-shadow-lg group-hover/hero-about:cursor-default group-hover/hero-about:opacity-0 lg:-translate-x-1/5 lg:text-2xl 2xl:-translate-y-30"
                    >
                        Dipercaya oleh Banyak Pelanggan
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-31rem)]"
        aria-hidden="true"
    >
        <div
            class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/3 rotate-20 bg-linear-to-tr from-green-400 to-purple-500 opacity-15 sm:left-[calc(50%-20rem)] sm:w-288.75"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
</div>

<div id="news" class="from-clean bg-gradient-to-t to-transparent py-24 sm:py-32 sm:pt-64">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-center text-lg/8 font-semibold text-gray-900">
            Menggunakan tech stack inovatif dalam industri
        </h2>
        <div
            class="justify-arround mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
            <a
                href="https://github.com/vercel/vercel"
                class="col-span-2 flex h-full w-full items-center justify-center lg:col-span-1"
                target="_blank"
            >
                <img
                    class="max-h-16 w-full object-contain opacity-85 transition-all duration-100 ease-in-out hover:opacity-100"
                    src="/logotype/vercel.svg"
                    alt="Vercel"
                    width="158"
                    height="48"
                    loading="lazy"
                    decoding="async"
                />
            </a>
            <a
                href="https://github.com/prisma/prisma"
                class="col-span-2 flex h-full w-full items-center justify-center sm:-mx-4 lg:col-span-1"
                target="_blank"
            >
                <img
                    class=" max-h-16 w-full object-contain opacity-85 transition-all duration-100 ease-in-out hover:opacity-100"
                    src="/logotype/prisma.svg"
                    alt="Prisma"
                    width="158"
                    height="48"
                    loading="lazy"
                    decoding="async"
                />
            </a>
            <a
                href="https://github.com/tailwindlabs/tailwindcss"
                class="col-span-2 flex h-full w-full items-center justify-center sm:-mx-4 lg:col-span-1"
                target="_blank"
            >
                <img
                    class="max-h-16 w-full object-contain opacity-85 transition-all duration-100 ease-in-out hover:opacity-100"
                    src="/logotype/tailwindcss.svg"
                    alt="Tailwindcss"
                    width="158"
                    height="48"
                    loading="lazy"
                    decoding="async"
                />
            </a>
            <a
                href="https://github.com/sveltejs/kit"
                class="col-span-2 flex h-full w-full items-center justify-end sm:-mx-4 lg:col-span-1"
                target="_blank"
            >
                <img
                    class="max-h-16 w-full object-contain opacity-85 transition-all duration-100 ease-in-out hover:opacity-100"
                    src="/logotype/sveltekit.svg"
                    alt="SvelteKit"
                    width="158"
                    height="48"
                    loading="lazy"
                    decoding="async"
                />
            </a>
        </div>
    </div>
</div>

<div class="relative isolate mx-auto flex max-w-7xl flex-col items-center px-4 pt-12 sm:px-8 sm:pt-18">
    <div id="contact-us" class="z-10 mx-auto flex justify-center text-center sm:pt-28 lg:pt-36">
        <div class="flex flex-col justify-center text-center">
            <h1
                class="font-sans text-xs/10 font-bold tracking-normal text-balance text-gray-500 uppercase sm:text-base/10"
            >
                Butuh bantuan
            </h1>
            <h1
                class="text-6xl font-semibold tracking-tight text-balance text-gray-800/90 max-xl:text-5xl max-sm:text-3xl"
            >
                Hubungi Kami
            </h1>
            <p
                class="mx-auto mt-4 text-sm font-medium text-pretty text-gray-500/95 sm:mt-6 sm:max-w-3xl sm:px-4 sm:text-xl/8"
            >
                Kami siap membantu mu dengan pertanyaan, permintaan, atau kebutuhan khusus terkait layanan yang kami
                miliki.
            </p>
        </div>
    </div>

    <div class="z-10 mx-auto flex w-full justify-center pt-8 sm:pt-8 md:px-4 lg:px-8">
        <NewsletterForm />
    </div>

    <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-20rem)]"
        aria-hidden="true"
    >
        <div
            class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#62b3fd] to-[#99e392] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
</div>

<div class="relative isolate mx-auto sm:mt-12">
    <div id="contact" class="z-10 mx-auto pt-42 pb-12 sm:py-48 lg:py-56">
        <div class="mx-auto flex max-w-7xl px-4 sm:px-8">
            <div class="text-start">
                <h1
                    class="font-sans text-xs/10 font-bold tracking-normal text-balance text-gray-500 uppercase sm:text-base/10"
                >
                    Kamu juga bisa mengandalkan
                </h1>
                <h1
                    class="text-6xl font-semibold tracking-tight text-balance text-gray-800/90 max-xl:text-5xl max-sm:text-3xl"
                >
                    Kontak Kami
                </h1>
                <p class="mt-4 text-sm font-medium text-pretty text-gray-500/95 sm:mt-6 sm:max-w-3xl sm:text-xl/8">
                    Berikut ini layanan kontak yang bisa kamu gunakan untuk menghubungi kami. Kami online setiap hari
                    mulai pukul 08.00 hingga 22.00 WIB. Kami akan segera merespon pesan mu dalam waktu kurang dari 24
                    jam.
                </p>
            </div>
        </div>
        <div class="relative isolate mx-auto mt-10 flex flex-col items-center sm:max-w-7xl sm:px-8 sm:pt-12">
            <div
                class="mt-10 grid w-full grid-cols-1 justify-center gap-6 px-4 sm:mt-14 sm:w-full sm:gap-6 sm:p-0 sm:min-lg:flex"
            >
                <div class="flex h-full w-full gap-x-2 sm:gap-6">
                    <a
                        href="mailto:fiki@dicea.fun"
                        target="_blank"
                        class="sm:mx-none group/card mx-auto flex aspect-square h-fit w-full max-w-md cursor-pointer flex-col rounded-2xl bg-white p-4 shadow-2xl shadow-blue-50/60 transition-all duration-300 ease-in-out hover:rounded-3xl hover:bg-white hover:shadow-blue-800/10 sm:h-full sm:max-w-md sm:min-w-1/4 sm:rounded-2xl sm:p-6 sm:hover:rounded-4xl"
                    >
                        <div
                            class="mb-2.5 inline-flex w-fit rounded-lg bg-pink-300 p-3 shadow-blue-700/20 transition-all duration-300 ease-in-out group-hover/card:shadow-2xl group-hover/card:ring-8 group-hover/card:ring-pink-300/15 sm:rounded-xl sm:p-4"
                        >
                            <svg
                                class="size-5 text-gray-100 sm:size-6"
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
                        <h5 class="text-lg font-semibold tracking-tight text-gray-600 sm:text-lg">Email</h5>
                        <p class="mt-1 font-sans text-sm font-medium text-gray-500 sm:-mt-0.5 sm:text-base">
                            fiki@dicea.fun
                        </p>
                    </a>
                    <a
                        href="https://t.me/nsmle"
                        target="_blank"
                        class="sm:mx-none group/card mx-auto flex aspect-square h-fit w-full max-w-md cursor-pointer flex-col rounded-2xl bg-white p-4 shadow-2xl shadow-blue-50/60 transition-all duration-300 ease-in-out hover:rounded-3xl hover:bg-white hover:shadow-blue-800/10 sm:h-full sm:max-w-md sm:min-w-1/4 sm:rounded-2xl sm:p-6 sm:hover:rounded-4xl"
                    >
                        <div
                            class="mb-2.5 inline-flex w-fit rounded-lg bg-sky-300 p-3 shadow-blue-700/20 transition-all duration-300 ease-in-out group-hover/card:shadow-2xl group-hover/card:ring-8 group-hover/card:ring-sky-300/15 sm:rounded-xl sm:p-4"
                        >
                            <svg
                                class="size-5 text-gray-100 sm:size-6"
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
                        <h5 class="text-lg font-semibold tracking-tight text-gray-600 sm:text-lg">Telepon</h5>
                        <p class="mt-1 font-sans text-sm font-medium text-gray-500 sm:-mt-0.5 sm:text-sm">
                            +6287880651411
                        </p>
                    </a>
                </div>

                <div
                    class="sm:mx-none group/card xs:min-w-full mx-auto w-full cursor-context-menu rounded-2xl bg-white shadow-2xl shadow-blue-50/60 transition-all duration-300 ease-in-out hover:rounded-3xl hover:bg-white hover:p-1 hover:shadow-blue-800/10 sm:min-w-[70%] sm:rounded-3xl sm:hover:rounded-4xl sm:hover:p-1.5 sm:max-xl:min-w-[60%]"
                >
                    <div class="h-full w-full">
                        {#if showMaps}
                            <iframe
                                title="Alamat Kami"
                                class="aspect-video h-full w-full rounded-2xl transition-all duration-300 ease-in-out hover:rounded-3xl sm:rounded-3xl sm:hover:rounded-4xl"
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.1563363981608!2d110.40959520911656!3d-7.750841079347504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59740a4e0f35%3A0xaf16a3e74e4389cf!2sEdelweissphotostudio!5e1!3m2!1sen!2sus!4v1751709787890!5m2!1sen!2sus"
                            ></iframe>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(120%-30rem)]"
        aria-hidden="true"
    >
        <div
            class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#99e392] to-[#62b3fd] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
</div>
