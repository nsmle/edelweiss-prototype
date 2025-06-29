<script lang="ts">
    import { page } from '$app/state';
    import Footer from '$lib/footer.svelte';
    import Header from '$lib/header.svelte';
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
    import '../app.css';

    let props = $props();
    let { children } = props;
    injectSpeedInsights();
</script>

<svelte:head>
    <meta name="url" content={page?.url?.href} />

    <meta property="og:title" content="Edelweiss Photobooth" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={page?.url?.href} />
    <meta property="og:image" content={`${page?.url?.origin}/brand.svg`} />
    <meta property="og:site_name" content="Edelweiss Photobooth" />
    <meta property="og:description" content="Ciptakan moment dan abadikan kenangan" />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:locale:alternate" content="en_US" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="Edelweiss Photobooth" />
    <meta name="twitter:title" content="Edelweiss Photobooth" />
    <meta name="twitter:description" content="Edelweiss Photobooth" />
    <meta name="twitter:image" content={`${page?.url?.origin}/brand.svg`} />
    <meta name="twitter:image:src" content={`${page?.url?.origin}/brand.svg`} />
</svelte:head>

<Header />

<main>
    {@render children()}
</main>

<Footer />
