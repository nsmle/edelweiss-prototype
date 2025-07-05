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
    <div class="mx-auto -mt-6 flex w-full max-w-7xl justify-end px-4 sm:-mt-10 sm:px-12">
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
    <div bind:this={carousel} class="no-scrollbar mt-4 flex min-w-full flex-row gap-x-3 overflow-x-auto sm:gap-x-6">
        {#each services as service, index}
            <div class={`max-h-xl flex w-fit flex-col items-center  justify-center`}>
                <div
                    class={`${index == 0 ? 'ml-4 md:ml-8 xl:ml-26 2xl:ml-[25vw]' : ''} ${index + 1 == services.length ? 'mr-4 md:mr-8 xl:mr-26 2xl:mr-[25vw]' : ''} ${index == 1 || (index % 4 == 0 && index !== 0) ? 'min-w-92 sm:min-w-120' : 'min-w-64 sm:min-w-72'} rounded-3xl`}
                >
                    <div
                        class="relative isolate h-64 rounded-3xl bg-cover bg-center bg-no-repeat shadow-md"
                        style="background-image: url({service.image})"
                    >
                        <div
                            class={`absolute top-3 left-3.5 rounded-full px-4 bg-service-${index > 7 ? Math.floor(Math.random() * 7) + 1 : index + 1} shadow-xl`}
                        >
                            <span
                                class="font-sans text-xs font-semibold tracking-wider text-balance text-white uppercase text-shadow-lg"
                                >{service.order} Order</span
                            >
                        </div>
                    </div>
                    <div class={`mt-4 ml-2 flex w-full flex-col`}>
                        <p class="text-lg font-bold tracking-tight text-balance text-gray-800/80 sm:text-xl">
                            {service.name}
                        </p>
                        <span
                            class="font-sans text-xs font-medium tracking-normal text-balance text-gray-500 sm:text-sm"
                            >Mulai dari Rp. <b class="font-semibold">{service.price}</b> per {service.anual}</span
                        >
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <div
        class="overlay-to-right absolute top-0 left-0 my-auto hidden h-full pl-4 blur sm:block md:pl-8 xl:pl-26 2xl:pl-[25vw]"
        style="background: linear-gradient(to right, oklch(99.135% 0.00143 285.193), rgba(255, 255, 255, 0) 85%)"
    ></div>
    <div
        class="overlay-to-right absolute top-0 right-0 my-auto hidden h-full pr-4 blur sm:block md:pr-8 xl:pr-26 2xl:pr-[25vw]"
        style="background: linear-gradient(to left, oklch(99.135% 0.00143 285.193), rgba(255, 255, 255, 0) 85%)"
    ></div>
</div>
