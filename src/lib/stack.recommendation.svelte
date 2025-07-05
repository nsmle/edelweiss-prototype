<script lang="ts">
    const props = $props();
    const { services } = props;
    let carousel: HTMLDivElement | null = null;

    const scrollRight = (): void => {
        if (carousel) {
            carousel.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    const scrollLeft = (): void => {
        if (carousel) {
            carousel.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };
</script>

<div class="relative isolate flex w-full flex-col">
    <div
        bind:this={carousel}
        class="no-scrollbar relative isolate mt-4 flex w-full min-w-full flex-row gap-x-3 overflow-x-auto sm:gap-x-6"
    >
        {#each services as service, index}
            <div
                class={`relative w-xl rounded-t-2xl sm:rounded-t-3xl ${index == 0 ? 'ml-4 md:ml-8 xl:ml-26 2xl:ml-[25vw]' : ''} ${index == services.length - 1 ? 'mr-4 md:mr-8 xl:mr-26 2xl:mr-[25vw]' : ''}`}
            >
                <a href={`/service/${service.slug}`}>
                    <img
                        class="min-h-64 min-w-64 rounded-t-2xl object-cover sm:min-w-74 sm:rounded-t-3xl"
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        decoding="async"
                    />
                </a>
                <div class="px-2 py-4 text-start">
                    <a href={`/service/${service.slug}`}>
                        <h5 class="text-lg font-bold tracking-tight text-balance text-gray-800/80 sm:text-xl">
                            {service.name}
                        </h5>
                    </a>
                    <div class="mb-2 flex items-center justify-between border-b border-gray-300 pb-4">
                        <p class="font-sans text-sm font-semibold tracking-wider text-balance text-gray-500">
                            {service.place}
                        </p>
                        <div class="flex items-center gap-x-3">
                            <span
                                class="font-inter text-sm font-medium tracking-wider text-balance text-rose-900 italic line-through decoration-rose-900/70 decoration-1"
                                >{service.priceNormal}</span
                            >
                            <span class="text-primary-500 font-sans text-base font-semibold tracking-wider text-balance"
                                >{service.price}</span
                            >
                        </div>
                    </div>
                    <div class="flex items-center justify-between pb-2">
                        <p class="font-sans text-xs font-medium tracking-wider text-balance text-gray-500">
                            <b class="font-semibold">{service.order}</b> Pesanan selesai
                        </p>
                        <div class="flex items-center gap-x-1.5">
                            <img
                                class="size-3 text-green-300 sm:size-3"
                                src="/icon/star.svg"
                                alt="Start Icon"
                                loading="lazy"
                                decoding="async"
                            />
                            <span class="font-sans text-sm font-semibold tracking-wider text-balance text-gray-500">
                                {service.rating}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <div
        class="overlay-to-right absolute top-0 left-0 my-auto hidden h-100 pl-4 blur sm:block md:pl-8 xl:pl-26 2xl:pl-[25vw]"
        style="background: linear-gradient(to right, oklch(99.135% 0.00143 285.193), rgba(255, 255, 255, 0) 85%)"
    ></div>
    <div
        class="overlay-to-right absolute top-0 right-0 my-auto hidden h-100 pr-4 blur sm:block md:pr-8 xl:pr-26 2xl:pr-[25vw]"
        style="background: linear-gradient(to left, oklch(99.135% 0.00143 285.193), rgba(255, 255, 255, 0) 80%)"
    ></div>
    <div class="mx-auto flex w-full max-w-7xl justify-between px-4 sm:px-12">
        <button
            type="button"
            class="group me-4 flex h-full cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-gray-50 p-2 hover:bg-gray-200/60 focus:outline-none"
            onclick={scrollLeft}
        >
            <span class="text-gray-500/80 group-hover:text-gray-500 group-active:text-gray-700">
                <svg
                    class="size-4 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5H1m0 0 4 4M1 5l4-4"
                    />
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button
            type="button"
            class="group flex h-full cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-gray-50 p-2 hover:bg-gray-200/60 focus:outline-none"
            onclick={scrollRight}
        >
            <span class="text-gray-500/80 group-hover:text-gray-500 group-active:text-gray-700">
                <svg
                    class="size-4 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</div>
