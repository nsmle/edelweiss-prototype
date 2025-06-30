<script lang="ts">
    import { page } from '$app/state';
    import { onMount } from 'svelte';

    let playerState = 'UNSTARTED';
    let player: any;

    const playerStateChange = ({ data }: any): void => {
        switch (data) {
            case -1:
                playerState = 'UNSTARTED';
                break;
            case 0:
                playerState = 'ENDED';
                break;
            case 1:
                playerState = 'PLAYING';
                break;
            case 2:
                playerState = 'PAUSED';
                break;
            case 3:
                playerState = 'BUFFERING';
                break;
            case 5:
                playerState = 'CUED';
                break;

            default:
                playerState = 'UNSTARTED';
                break;
        }
    };

    const onYouTubeIframeAPIReady = (YT: any): void => {
        player = new YT.Player('player', {
            height: 'auto',
            width: 'auto',
            videoId: 'm9FmY9KgfG4',
            playerVars: {
                list: 'PLT3PaeByruw3yoalfpmGfSFgmMCCSXI61',
                vq: 'small',
                mute: 0,
                playsinline: 0,
                enablejsapi: 1,
                rel: 0,
                iv_load_policy: 3,
                cc_load_policy: 0,
                controls: 1,
                fs: 1,
                disablekb: 0,
                start: 0,
                showinfo: 0,
                modestbranding: 1,
                widget_referrer: page?.url?.origin
            },
            events: {
                onStateChange: playerStateChange
            }
        });
    };

    const prepareAPI = (): void => {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

        (window as any).onYouTubeIframeAPIReady = (): void => onYouTubeIframeAPIReady((window as any)?.YT);
    };

    const play = (): void => {
        if (player) {
            player?.playVideo();
            if (player?.isMuted) player?.unMute();
        } else {
            prepareAPI();
        }
    };

    onMount((): void => prepareAPI());
</script>

<div
    class="relative isolate flex aspect-video w-full justify-center overflow-hidden rounded-xl bg-gray-100 sm:rounded-3xl"
>
    {#if playerState === 'UNSTARTED'}
        <img class="absolute min-h-auto min-w-full object-cover" src="/corporate-event.webp" alt="" />
        <button
            class="absolute inset-0 z-10 flex items-center justify-center"
            type="button"
            on:click={(): void => play()}
            aria-label="Play video"
            style="background: rgba(0,0,0,0.3);"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-16 cursor-pointer text-white sm:size-26"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.6)" />
                <polygon
                    points="11,9.5 15,12 11,14.5"
                    fill="white"
                    stroke="white"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                />
            </svg>
        </button>
    {/if}
    <div
        class="flex aspect-video w-full justify-center rounded-xl bg-gray-100 transition-all duration-300 ease-in-out sm:rounded-3xl"
        id="player"
    ></div>
</div>
