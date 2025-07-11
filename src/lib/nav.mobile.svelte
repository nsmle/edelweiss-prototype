<script lang="ts">
    import { page } from '$app/state';
    import Brand from '$lib/brand.svelte';
    import { onMount } from 'svelte';

    const props = $props();
    const { navigations } = props;

    let isHeaderShow = $state(false);
    const isActivePage = (link: string): boolean => {
        return page.url.pathname === link || page.url.pathname.startsWith(`${link}/`);
    };

    const toggleHeader = (): boolean => (isHeaderShow = !isHeaderShow);

    onMount((): void => {
        window.addEventListener('scroll', (): void => {
            if (isHeaderShow) isHeaderShow = false;
        });
    });
</script>

<div class="flex w-full lg:hidden">
    <div
        class={`block w-full min-w-full overflow-y-auto transition-all duration-300 ease-in-out ${props?.padding}`}
        class:z-50={isHeaderShow}
        class:fixed={isHeaderShow}
        class:min-h-screen={isHeaderShow}
        class:inset-y-0={isHeaderShow}
        class:right-0={isHeaderShow}
        class:bg-white={isHeaderShow}
    >
        <div class="flex items-center justify-between">
            <Brand />
            <button
                type="button"
                onclick={toggleHeader}
                class="-m-2.5 cursor-pointer rounded-md p-2.5 text-slate-500/70 transition-all duration-300 ease-in-out hover:bg-slate-50/50 hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
                {#if isHeaderShow}
                    <span class="sr-only">Close menu</span>
                    <svg class="size-6" fill="currentColor" viewBox="0 0 384 512" aria-hidden="true" data-slot="icon">
                        <path
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                        />
                    </svg>
                {:else}
                    <span class="sr-only">Open menu</span>
                    <svg
                        class="size-6"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                        stroke="none"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                        />
                    </svg>
                {/if}
            </button>
        </div>
        <div
            class="mt-6 flow-root transition-all duration-300 ease-in-out"
            class:opacity-100={isHeaderShow}
            class:opacity-0={!isHeaderShow}
            class:translate-y-0={isHeaderShow}
            class:-translate-y-2={!isHeaderShow}
            class:pointer-events-none={!isHeaderShow}
            class:hidden={!isHeaderShow}
            class:overflow-hidden={!isHeaderShow}
        >
            <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-1 py-6">
                    {#each navigations as navigation}
                        <a
                            href={navigation.url}
                            onclick={toggleHeader}
                            class={'-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ' +
                                (isActivePage(navigation.url)
                                    ? 'text-primary-500 bg-primary-100/40 hover:bg-primary-50 font-semibold'
                                    : 'hover:text-primary-600 hover:bg-primary-100/20 text-gray-600')}
                        >
                            {navigation.title}
                        </a>
                    {/each}
                </div>
                <div class="py-6">
                    <a
                        href="/booking"
                        class="focus:ring-primary-200 flex w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-500 px-5 py-2.5 text-center text-base font-medium text-white transition-all duration-300 ease-in-out hover:from-green-300 hover:via-green-400 hover:to-green-500 focus:ring-4 focus:outline-none"
                        >Booking Sekarang</a
                    >
                </div>
            </div>
        </div>
    </div>
</div>
