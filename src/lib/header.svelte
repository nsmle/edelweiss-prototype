<script lang="ts">
    import NavMobile from '$lib/nav.mobile.svelte';
    import Nav from '$lib/nav.svelte';
    import { onMount } from 'svelte';

    let y: number = 0;
    let headerClass = '';
    let navStyle = 'p-6 sm:py-6 sm:px-8';

    let lastScrollY: number = 0;

    export const handleOnScroll = (): void => {
        if (y > lastScrollY && y > 0) {
            headerClass = 'backdrop-blur-md backdrop-brightness-[1.09] shadow-2xl shadow-blue-100/20';
            navStyle = 'px-6 py-3 sm:py-2 sm:px-8';
        } else if (window.scrollY < 50) {
            navStyle = 'p-6 sm:py-6 sm:px-8';
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

<header class={`fixed z-50 w-full ${headerClass} transition-all duration-300 ease-in-out`}>
    <!-- Desktop Navigation -->
    <Nav padding={navStyle} scrollY={y} />

    <!-- Mobile Navigation -->
    <NavMobile padding={navStyle} scrollY={y} />
</header>
