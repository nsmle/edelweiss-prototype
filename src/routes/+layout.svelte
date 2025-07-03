<script lang="ts">
    import { page } from '$app/state';
    import Footer from '$lib/footer.svelte';
    import Header from '$lib/header.svelte';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
    import { onMount } from 'svelte';
    import '../app.css';

    const props = $props();
    const { children } = props;

    const { isProduction, brand } = page.data;

    if (isProduction) {
        injectAnalytics();
        injectSpeedInsights();
    }

    onMount(() => {
        if (props?.data?.logContent?.length) {
            fetch('/?/log', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: props.data.logContent
            });
        }
    });
</script>

<svelte:head>
    <meta name="url" content={page.url.href} />
    <meta name="description" content={brand.description} />

    <meta property="og:title" content={brand.siteName} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={page.url.href} />
    <meta property="og:image" content={`${page.url.origin}/wedding.webp`} />
    <meta property="og:site_name" content={brand.siteName} />
    <meta property="og:description" content={brand.description} />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:locale:alternate" content="en_US" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={brand.siteName} />
    <meta name="twitter:title" content={brand.siteName} />
    <meta name="twitter:description" content={brand.siteName} />
    <meta name="twitter:image" content={`${page.url.origin}/wedding.webp`} />
    <meta name="twitter:image:src" content={`${page.url.origin}/wedding.webp`} />
</svelte:head>

<Header />

<main>
    {@render children()}
</main>

<Footer />
