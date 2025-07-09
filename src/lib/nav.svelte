<script lang="ts">
    import { page } from '$app/state';
    import Brand from '$lib/brand.svelte';

    const props = $props();
    const { navigations } = props;

    const isActivePage = (link: string): boolean => {
        return page.url.pathname === link || page.url.pathname.startsWith(`${link}/`);
    };
</script>

<nav
    class={`mx-auto hidden max-w-7xl items-center justify-between lg:flex ${props?.padding} transition-all duration-300 ease-in-out`}
    aria-label="Global"
>
    <div class="flex lg:flex-1">
        <Brand />
    </div>
    <div class="flex items-center md:gap-6 lg:flex lg:gap-x-12">
        {#each navigations as navigation}
            <a
                href={navigation.url}
                class={`font-poppins text-sm/6 font-semibold ${isActivePage(navigation.url) ? 'text-green-500' : 'text-gray-800'}`}
                >{navigation.title}</a
            >
        {/each}
    </div>

    <div class="flex flex-1 justify-end">
        <a
            href="/booking"
            class="focus:ring-primary-200 me-2 mb-2 cursor-pointer rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-500 px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 ease-in-out hover:from-green-300 hover:via-green-400 hover:to-green-500 focus:ring-4 focus:outline-none"
            >Booking Sekarang</a
        >
    </div>
</nav>
