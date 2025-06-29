<script lang="ts">
    import Header from '$lib/header.svelte';
    import '../app.css';

    let { children } = $props();
</script>

<Header />

<main>
    <!-- +page.svelte is `@render`ed here -->
    {@render children()}
</main>
