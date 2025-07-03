<script lang="ts">
    import { enhance } from '$app/forms';
    import { page } from '$app/state';

    let isLoadingNewsletter = false;
    let newsletters: { type: 'allready' | 'incorrect' | 'error' | 'success' | null; reason: string | null } = {
        type: null,
        reason: null
    };

    const data = page.data.footer;
    const navigations = data.navigations;
    const copyright = data.copyright;
    const socials = data.socials;
</script>

<footer
    class="bg-clean-500 relative z-10 mt-26 w-full rounded-3xl shadow-[0_-50px_50px_rgb(59,130,246,0.03)] sm:mt-40 sm:rounded-t-[50px]"
>
    <div class="mx-auto px-4 sm:max-w-7xl sm:px-6 lg:px-8">
        <div
            class="grid grid-cols-1 gap-3 gap-y-8 py-10 max-sm:mx-auto max-sm:max-w-sm sm:grid-cols-3 md:gap-8 lg:grid-cols-5"
        >
            <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                <a href="/" class="mx-auto flex w-full items-center justify-center gap-2 sm:m-0 sm:justify-start">
                    <svg
                        class="size-[32px] sm:size-[36px]"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_9628_492)">
                            <circle cx="18" cy="18" r="18" class="fill-primary-500" />
                            <path
                                d="M9.7656 24.6385C9.90844 21.0146 11.7101 17.3875 14.7469 14.7231C16.5751 13.1187 18.7009 11.9568 21.0651 11.2703C21.0996 11.2601 21.1343 11.2527 21.1691 11.2432C21.1366 11.1552 21.11 11.0643 21.0745 10.9781C20.3189 9.12546 18.9061 7.68972 17.1501 6.75C15.203 7.31896 13.4167 8.32376 11.9126 9.72184C10.412 11.1192 9.20143 12.9046 8.49744 14.9878C7.79458 17.0703 7.70261 19.1553 8.14261 21.0604C8.44476 22.356 8.9898 23.5741 9.7656 24.6385Z"
                                fill="#FCFCFD"
                            />
                            <path
                                d="M27.7589 11.771C25.6574 11.5186 23.489 11.7031 21.4055 12.3037C19.3212 12.9096 17.3072 13.9567 15.5317 15.515C12.2698 18.3773 10.6603 22.2579 10.9362 25.9018C10.4757 26.2314 10.0102 26.5574 9.53088 26.8791C9.04674 27.1992 8.56894 27.5214 7.97266 27.8389L8.82247 29.2504C9.52869 28.8723 10.0225 28.5353 10.5303 28.2005C11.0301 27.865 11.5075 27.5305 11.9786 27.1932C15.6697 28.3945 20.4619 27.4498 24.1462 24.2171C26.1449 22.4649 27.5218 20.282 28.1555 18.0548C28.7949 15.8297 28.6681 13.5705 27.7589 11.771ZM25.2518 15.0073C24.3197 16.2892 22.9095 17.8186 21.3916 19.3283C22.7402 19.1202 23.818 18.9311 24.3343 18.8378C24.5515 18.7988 24.6689 18.7765 24.6693 18.7765C24.8768 18.7375 25.0783 18.8642 25.1198 19.0593C25.1613 19.2547 25.0267 19.4445 24.8195 19.4835C24.8158 19.4842 22.9536 19.8346 20.5123 20.1908C20.2431 20.4507 19.9728 20.7084 19.7033 20.9622C18.8815 21.7357 18.0695 22.4733 17.3192 23.1359C19.1649 22.8659 21.0544 22.5043 21.9764 22.3205C22.3428 22.2476 22.5551 22.2033 22.5558 22.2029C22.7622 22.16 22.9667 22.2824 23.0127 22.4768C23.0583 22.6712 22.9282 22.8637 22.7218 22.907C22.7162 22.9077 19.2681 23.6302 16.3725 23.9939L16.3273 23.9995C15.5699 24.6491 14.9216 25.1811 14.4587 25.5377V25.5381C14.2954 25.6641 14.0539 25.6412 13.92 25.487C13.7862 25.3332 13.8105 25.1057 13.9742 24.9797C14.4569 24.6079 15.1628 24.0266 15.9894 23.3133C16.0129 23.157 16.0387 22.9599 16.0656 22.73C16.1108 22.344 16.159 21.8752 16.2065 21.3826C16.3019 20.3979 16.3935 19.3194 16.4518 18.6146C16.4907 18.1449 16.5146 17.8421 16.5146 17.8414C16.5303 17.6428 16.7139 17.4939 16.9248 17.5087C17.1356 17.5232 17.2938 17.6964 17.2781 17.895C17.2781 17.8964 17.0628 20.6337 16.8736 22.3913C16.8672 22.4501 16.8613 22.5015 16.8549 22.5574C17.5828 21.9135 18.3695 21.1988 19.162 20.4524C19.4416 20.1891 19.7217 19.9218 20.0009 19.6525C20.1154 19.2216 20.1991 18.5344 20.2492 17.8456C20.3049 17.1003 20.3269 16.3469 20.336 15.8649C20.3419 15.5438 20.3419 15.3449 20.3419 15.3445C20.3419 15.1453 20.5131 14.984 20.7248 14.984C20.9364 14.984 21.1076 15.1453 21.1076 15.3445C21.1072 15.3508 21.1083 17.1788 20.9439 18.6523C20.9405 18.6808 20.9367 18.7079 20.9334 18.736C22.3993 17.2721 23.7489 15.8004 24.62 14.6002C24.7393 14.4358 24.9774 14.3939 25.152 14.5062C25.3265 14.6186 25.371 14.8429 25.2518 15.0073Z"
                                fill="#FCFCFD"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_9628_492">
                                <rect fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span
                        class="font-poppins text-2xl font-semibold tracking-tight text-balance text-gray-800 sm:text-3xl"
                        >Edelweiss</span
                    >
                </a>

                <p
                    class="pt-6 pb-10 text-center font-sans text-sm font-medium text-gray-500 sm:pt-5 sm:pb-8 lg:max-w-xs lg:text-left"
                >
                    Ciptakan moment dan abadikan kenangan, teman pendamping setiap moment penting mu dengan layanan yang
                    terbaik dan terpercaya.
                </p>

                <form
                    class="group/newsletter mx-auto transition-all duration-300 ease-in-out"
                    action="/?/newsletter"
                    method="POST"
                    use:enhance={({ formElement, formData, action, cancel, submitter }) => {
                        isLoadingNewsletter = true;
                        submitter?.blur();
                        return async ({ result, update }) => {
                            const data = (result as any)?.data;
                            if (data) newsletters = data?.data;

                            isLoadingNewsletter = false;
                            await update({ reset: true, invalidateAll: true });
                            setTimeout(() => {
                                newsletters = { type: null, reason: null };
                                formElement.reset();
                            }, 10000);
                        };
                    }}
                >
                    <div class="flex w-full">
                        <label for="default-search" class="sr-only mb-2 text-sm font-medium text-gray-900"
                            >Dapatkan update</label
                        >
                        <div class="relative w-full md:max-w-md lg:max-w-sm">
                            <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
                                <svg
                                    class="h-4 w-4 text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                                    />
                                    <path
                                        d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="email"
                                name="email"
                                class="block w-full rounded-full border border-gray-300 bg-gray-50 p-3 ps-10 text-sm text-gray-900 placeholder:font-medium focus:border-green-500/60 focus:ring-4 focus:ring-green-400/10 focus:outline-none disabled:cursor-wait"
                                placeholder="Dapatkan update"
                                aria-label="Dapatkan update"
                                disabled={isLoadingNewsletter}
                                autocomplete="email"
                                required
                            />
                            <button
                                type="submit"
                                aria-labelledby="Subscribe"
                                class="absolute end-1.5 bottom-[5px] cursor-pointer rounded-full bg-green-500/70 p-2.5 text-sm font-medium text-white group-active/newsletter:bg-green-500 hover:bg-green-400 focus:ring-4 focus:ring-green-400/10 focus:outline-none disabled:cursor-wait disabled:bg-gray-300"
                                disabled={isLoadingNewsletter}
                                ><svg
                                    class="size-4 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg></button
                            >
                        </div>
                    </div>
                    {#if newsletters.type == 'success'}
                        <span class="font-inter mt-2 ml-2 inline-flex w-full text-xs text-green-600/80"
                            >{newsletters.reason}</span
                        >
                    {:else if newsletters.type == 'allready'}
                        <span class="font-inter mt-2 ml-2 inline-flex w-full text-xs text-yellow-600/80"
                            >{newsletters.reason}</span
                        >
                    {:else if newsletters.type == 'incorrect' || newsletters.type == 'error'}
                        <span class="font-inter mt-2 ml-2 inline-flex w-full text-xs text-rose-600/80"
                            >{newsletters.reason}</span
                        >
                    {/if}
                </form>
            </div>

            {#each navigations as nav}
                <div class="text-left md:text-center lg:mx-auto lg:text-left">
                    <h4 class="mb-2 font-sans text-lg font-semibold text-gray-600 sm:mb-5">{nav.label}</h4>
                    <ul class="flex flex-col gap-y-1.5 text-sm transition-all duration-500 sm:gap-y-3">
                        {#each nav.items as item}
                            <li class="">
                                <a
                                    href={item.url}
                                    class="font-sans font-medium tracking-wide text-gray-500/90 hover:text-green-600"
                                    >{item.title}</a
                                >
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>

        <div class="border-t border-gray-200 py-7">
            <div class="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                <span class="flex items-center gap-1 font-sans text-sm font-medium text-nowrap text-gray-500"
                    ><span class="hidden sm:block">Copyright </span><span class="flex items-center">©</span>
                    <a href={copyright.link} target="_blank" class="flex gap-1 font-semibold text-green-600"
                        >{copyright.holder}</a
                    >
                    {copyright.year}. All rights reserved.</span
                >

                <div class="mt-4 flex space-x-4 sm:justify-center lg:mt-0">
                    {#if socials?.twitter}
                        <a
                            aria-labelledby="Twitter"
                            href={`https://x.com/${socials.twitter}/`}
                            target="_blank"
                            class="group/social flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:bg-green-100/90"
                        >
                            <svg
                                class="text-gray-600 transition-all duration-300 ease-in-out group-hover/social:text-green-600"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <g>
                                    <path
                                        d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                                        fill="currentColor"
                                    />
                                </g>
                            </svg>
                        </a>
                    {/if}
                    {#if socials?.instagram}
                        <a
                            aria-labelledby="Instagram"
                            href={`https://instagram.com/${socials.instagram}/`}
                            target="_blank"
                            class="group/social flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:bg-green-100/90"
                        >
                            <svg
                                class="h-[1.125rem] w-[1.25rem] text-gray-600 transition-all duration-300 ease-in-out group-hover/social:text-green-600"
                                viewBox="0 0 15 15"
                                fill="none"
                                width="18"
                                height="18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    {/if}
                    {#if socials?.linkedin}
                        <a
                            aria-labelledby="LinkedIn"
                            href={`https://www.linkedin.com/in/${socials.linkedin}/`}
                            target="_blank"
                            class="group/social flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:bg-green-100/90"
                        >
                            <svg
                                class="h-[1rem] w-[1rem] text-gray-600 transition-all duration-300 ease-in-out group-hover/social:text-green-600"
                                viewBox="0 0 13 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    {/if}
                    {#if socials?.youtube}
                        <a
                            aria-labelledby="YouTube"
                            href={`https://youtube.com/@${socials.youtube}/`}
                            target="_blank"
                            class="group/social flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:bg-green-100/90"
                        >
                            <svg
                                class="h-[0.875rem] w-[1.25rem] text-gray-600 transition-all duration-300 ease-in-out group-hover/social:text-green-600"
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    {/if}

                    {#if socials?.github}
                        <a
                            aria-labelledby="Github"
                            href={`https://github.com/${socials.github}/`}
                            target="_blank"
                            class="group/social flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:bg-green-100/90"
                        >
                            <svg
                                class="text-gray-600 transition-all duration-300 ease-in-out group-hover/social:text-green-600"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 496 512"
                                fill="none"
                            >
                                <g>
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                        fill="currentColor"
                                    />
                                </g>
                            </svg>
                        </a>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</footer>
