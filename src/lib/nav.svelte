<script lang="ts">
    import Brand from '$lib/brand.svelte';

    const props = $props();
    const { pageUrlPathname, navigations } = props;

    const isActivePage = (link: string): boolean => {
        return pageUrlPathname === link || pageUrlPathname.startsWith(`${link}/`);
    };
</script>

<nav
    class={`mx-auto hidden max-w-7xl items-center justify-between sm:flex ${props?.padding} transition-all duration-300 ease-in-out`}
    aria-label="Global"
>
    <div class="flex lg:flex-1">
        <Brand />
    </div>
    <div class="flex items-center lg:flex lg:gap-x-12">
        {#each navigations as navigation}
            <a
                href={navigation.href}
                class={`font-poppins text-sm/6 font-semibold ${isActivePage(navigation.href) ? 'text-primary-500' : 'text-gray-800'}`}
                >{navigation.label}</a
            >
        {/each}
    </div>

    <div class="flex flex-1 justify-end">
        <button
            type="button"
            class="focus:ring-primary-200 me-2 mb-2 cursor-pointer rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-500 px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 ease-in-out hover:from-green-300 hover:via-green-400 hover:to-green-500 focus:ring-4 focus:outline-none"
            >Booking Sekarang</button
        >
    </div>
</nav>
