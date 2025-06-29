<script lang="ts">
    import { page } from '$app/state';
</script>

<svelte:head>
    <title>{page?.error?.message || 'Page not found'} - Edelweiss Photobooth</title>
</svelte:head>

<div class="bg-[oklch(99.135% 0.00143 285.193)] relative isolate flex min-h-screen w-full">
    <div class="absolute inset-x-0 -top-40 -z-40 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
            class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#9089fc] to-[#c7f0c2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
    <div
        class="top absolute inset-x-0 top-1/2 right-0 -z-40 transform-gpu overflow-hidden blur-3xl sm:top-0"
        aria-hidden="true"
    >
        <div
            class="relative left-[calc(10%-11rem)] aspect-1155/678 w-full translate-x-1/12 rotate-30 bg-linear-to-tr from-[#f441d7] to-[#64cd5b] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75 sm:-translate-x-1/12"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
    <div class="flex h-screen flex-1 justify-center">
        <div class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
                <div class="flex items-center justify-center gap-3">
                    <p class="text-primary-500 inline-flex text-4xl font-semibold sm:text-4xl">{page.status}</p>
                    <h1
                        class="inline-flex text-4xl font-semibold tracking-tight text-balance text-gray-700 sm:text-4xl"
                    >
                        {page?.error?.message || 'Page not found'}
                    </h1>
                </div>
                <p class="mt-4 text-lg font-medium text-pretty text-gray-500 sm:text-xl/9">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div class="mt-10 flex flex-col items-center justify-center gap-2 gap-x-6 sm:flex-row sm:gap-4">
                    <a
                        href="/"
                        class="bg-primary-400 hover:bg-primary-500 focus-visible:outline-primary-600 w-full rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
                        >Back to home</a
                    >
                    <a
                        href="/contact"
                        class="bg-primary-100 w-full px-3.5 py-2.5 text-sm font-semibold text-gray-700 sm:w-auto sm:bg-transparent sm:p-0"
                        >Contact support <span aria-hidden="true">&rarr;</span></a
                    >
                </div>
            </div>
        </div>
    </div>
</div>
