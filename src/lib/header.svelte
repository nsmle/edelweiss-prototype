<script lang="ts">
    import { page } from '$app/state';
    import NavMobile from '$lib/nav.mobile.svelte';
    import Nav from '$lib/nav.svelte';
    import { onMount } from 'svelte';

    const { header } = page.data;

    let y: number = 0;
    let headerClass = '';
    let navStyle = 'p-4 sm:py-6 sm:px-6';

    let lastScrollY: number = 0;

    export const handleOnScroll = (): void => {
        if (y > lastScrollY && y > 0) {
            headerClass = 'backdrop-blur-md backdrop-brightness-[1.09] shadow-2xl shadow-blue-100/20';
            navStyle = 'px-4 py-2 sm:py-2 sm:px-6';
        } else if (window.scrollY < 50) {
            navStyle = 'p-4 sm:py-6 sm:px-6';
            headerClass = '';
        }
        lastScrollY = window.scrollY;
    };

    onMount((): void => {
        handleOnScroll();
        window.addEventListener('scroll', handleOnScroll);
    });
</script>

<svelte:window bind:scrollY={y} />

<header class={`fixed z-30 w-full ${headerClass} transition-all duration-300 ease-in-out`}>
    <!-- Desktop Navigation -->
    <Nav padding={navStyle} scrollY={y} navigations={header.navigations} />

    <!-- Mobile Navigation -->
    <NavMobile padding={navStyle} scrollY={y} navigations={header.navigations} />
</header>
