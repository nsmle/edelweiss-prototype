<script lang="ts">
    import { tick } from 'svelte';

    let iframeReady = $state(false);
    let isWidgetShow = $state(false);
    let isFullscreen = $state(false);

    const toggleFullscreen = (): boolean => (isFullscreen = !isFullscreen);
    const toggleWidget = (): void => {
        isWidgetShow = !isWidgetShow;
        localStorage?.setItem('widget-ai-show', isWidgetShow.toString());
        if (isFullscreen && !isWidgetShow) isFullscreen = false;
    };

    $effect.pre((): void => {
        if (window?.innerWidth > 425)
            localStorage?.getItem('widget-ai-show') === 'true' ? (isWidgetShow = true) : (isWidgetShow = false);
        setTimeout((): void => {
            tick().then((): void => {
                iframeReady = true;
            });
        }, 1400);
    });
</script>

<div
    class={`fixed justify-end ${isFullscreen ? 'inset-0 z-[999]' : `sm:shadow-widget ${isWidgetShow ? 'top-0 right-0 bottom-0 left-0 z-[99] sm:top-auto sm:right-2 sm:bottom-3 sm:left-auto sm:z-40 sm:rounded-2xl' : 'sm:shadow-widget right-2 bottom-3 rounded-2xl shadow-xl'}`} transition-all duration-300 ease-in-out`}
>
    <div
        class="relative isolate h-full w-full rounded-2xl border border-white bg-white transition-all duration-300 ease-in-out sm:min-w-sm"
        class:hidden={!isWidgetShow || !iframeReady}
        class:opacity-100={isWidgetShow}
        class:opacity-0={!isWidgetShow}
        class:invisible={!isWidgetShow}
        class:visible={isWidgetShow}
    >
        <div
            class="flex w-full flex-row items-center justify-end px-2 py-0.5 sm:justify-between sm:px-3 sm:pt-2 sm:pb-1.5"
            class:rounded-tl-2xl={isFullscreen}
        >
            <button
                type="button"
                onclick={toggleFullscreen}
                class="hidden cursor-pointer items-center text-gray-400 hover:text-gray-500 sm:flex"
                aria-label="Expand Widget"
            >
                <svg
                    class="size-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    aria-labelledby="expand-icon"
                    fill="currentColor"
                >
                    <path
                        d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"
                    /></svg
                >
            </button>
            <button
                type="button"
                onclick={toggleWidget}
                class="flex cursor-pointer items-center justify-self-end text-gray-400 hover:text-gray-500"
                aria-label="Close Widget"
            >
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="close-icon">
                    <path
                        d="M6 6L18 18M18 6L6 18"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
        {#if iframeReady}
            <iframe
                class="h-full w-full rounded-2xl pb-5 sm:pb-0 sm:min-md:min-h-124 sm:min-lg:min-h-124 sm:min-xl:min-h-154"
                src="https://ai.dicea.fun/?widget=edelweiss&bg-theme=F7F7F9&lang=id"
                title="Dicea Widget"
                style="background: url('/icon/spinner.svg') no-repeat center center; background-size: 40px;"
            ></iframe>
        {/if}
    </div>

    <button
        type="button"
        class="focus:ring-primary-200 flex cursor-pointer flex-row items-center rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-500 py-1 pr-3 pl-2 text-center text-xs font-medium text-white transition-all duration-300 ease-in-out hover:from-green-300 hover:via-green-400 hover:to-green-500 focus:ring-4 focus:outline-none sm:text-sm"
        onclick={toggleWidget}
        class:hidden={isWidgetShow}
    >
        <svg class="size-4.5 sm:size-6" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.7656 24.6385C9.90844 21.0146 11.7101 17.3875 14.7469 14.7231C16.5751 13.1187 18.7009 11.9568 21.0651 11.2703C21.0996 11.2601 21.1343 11.2527 21.1691 11.2432C21.1366 11.1552 21.11 11.0643 21.0745 10.9781C20.3189 9.12546 18.9061 7.68972 17.1501 6.75C15.203 7.31896 13.4167 8.32376 11.9126 9.72184C10.412 11.1192 9.20143 12.9046 8.49744 14.9878C7.79458 17.0703 7.70261 19.1553 8.14261 21.0604C8.44476 22.356 8.9898 23.5741 9.7656 24.6385Z"
                fill="#FCFCFD"
            />
            <path
                d="M27.7589 11.771C25.6574 11.5186 23.489 11.7031 21.4055 12.3037C19.3212 12.9096 17.3072 13.9567 15.5317 15.515C12.2698 18.3773 10.6603 22.2579 10.9362 25.9018C10.4757 26.2314 10.0102 26.5574 9.53088 26.8791C9.04674 27.1992 8.56894 27.5214 7.97266 27.8389L8.82247 29.2504C9.52869 28.8723 10.0225 28.5353 10.5303 28.2005C11.0301 27.865 11.5075 27.5305 11.9786 27.1932C15.6697 28.3945 20.4619 27.4498 24.1462 24.2171C26.1449 22.4649 27.5218 20.282 28.1555 18.0548C28.7949 15.8297 28.6681 13.5705 27.7589 11.771ZM25.2518 15.0073C24.3197 16.2892 22.9095 17.8186 21.3916 19.3283C22.7402 19.1202 23.818 18.9311 24.3343 18.8378C24.5515 18.7988 24.6689 18.7765 24.6693 18.7765C24.8768 18.7375 25.0783 18.8642 25.1198 19.0593C25.1613 19.2547 25.0267 19.4445 24.8195 19.4835C24.8158 19.4842 22.9536 19.8346 20.5123 20.1908C20.2431 20.4507 19.9728 20.7084 19.7033 20.9622C18.8815 21.7357 18.0695 22.4733 17.3192 23.1359C19.1649 22.8659 21.0544 22.5043 21.9764 22.3205C22.3428 22.2476 22.5551 22.2033 22.5558 22.2029C22.7622 22.16 22.9667 22.2824 23.0127 22.4768C23.0583 22.6712 22.9282 22.8637 22.7218 22.907C22.7162 22.9077 19.2681 23.6302 16.3725 23.9939L16.3273 23.9995C15.5699 24.6491 14.9216 25.1811 14.4587 25.5377V25.5381C14.2954 25.6641 14.0539 25.6412 13.92 25.487C13.7862 25.3332 13.8105 25.1057 13.9742 24.9797C14.4569 24.6079 15.1628 24.0266 15.9894 23.3133C16.0129 23.157 16.0387 22.9599 16.0656 22.73C16.1108 22.344 16.159 21.8752 16.2065 21.3826C16.3019 20.3979 16.3935 19.3194 16.4518 18.6146C16.4907 18.1449 16.5146 17.8421 16.5146 17.8414C16.5303 17.6428 16.7139 17.4939 16.9248 17.5087C17.1356 17.5232 17.2938 17.6964 17.2781 17.895C17.2781 17.8964 17.0628 20.6337 16.8736 22.3913C16.8672 22.4501 16.8613 22.5015 16.8549 22.5574C17.5828 21.9135 18.3695 21.1988 19.162 20.4524C19.4416 20.1891 19.7217 19.9218 20.0009 19.6525C20.1154 19.2216 20.1991 18.5344 20.2492 17.8456C20.3049 17.1003 20.3269 16.3469 20.336 15.8649C20.3419 15.5438 20.3419 15.3449 20.3419 15.3445C20.3419 15.1453 20.5131 14.984 20.7248 14.984C20.9364 14.984 21.1076 15.1453 21.1076 15.3445C21.1072 15.3508 21.1083 17.1788 20.9439 18.6523C20.9405 18.6808 20.9367 18.7079 20.9334 18.736C22.3993 17.2721 23.7489 15.8004 24.62 14.6002C24.7393 14.4358 24.9774 14.3939 25.152 14.5062C25.3265 14.6186 25.371 14.8429 25.2518 15.0073Z"
                fill="#FCFCFD"
            />
        </svg>
        Tanya Dicea
    </button>
</div>
