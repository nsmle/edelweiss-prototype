<script lang="ts">
    import { page } from '$app/state';
    import { tick } from 'svelte';

    let playerState = $state('UNSTARTED');
    let player: any = $state(null);

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
        player = new YT.Player('video', {
            height: 'auto',
            width: 'auto',
            videoId: 'm9FmY9KgfG4',
            playerVars: {
                color: '#4ac63f',
                list: 'PLT3PaeByruw3yoalfpmGfSFgmMCCSXI61',
                vq: 'small',
                mute: 0,
                playsinline: 0,
                enablejsapi: 1,
                iv_load_policy: 3,
                cc_load_policy: 0,
                controls: 1,
                fs: 1,
                disablekb: 0,
                start: 0,
                showinfo: 0,
                widget_referrer: page?.url?.origin,
                origin: page?.url?.origin
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
        player?.playVideo();
        if (player?.isMuted) player?.unMute();
    };

    $effect.pre((): void => {
        if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) prepareAPI();
        tick().then((): void => {
            onYouTubeIframeAPIReady((window as any)?.YT);
        });
    });
</script>

<div
    class="relative isolate flex aspect-video w-full justify-center overflow-hidden rounded-xl bg-gray-100 sm:rounded-3xl"
>
    {#if playerState === 'UNSTARTED'}
        <div class="absolute inset-0 z-10 flex min-h-full min-w-full items-center justify-center bg-[rgba(0,0,0,0.3)]">
            <button class="inline-flex" type="button" onclick={(): void => play()} aria-label="Play video">
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
        </div>
        <img class="absolute min-h-auto min-w-full object-cover" src="/corporate-event.webp" alt="Video" />
    {/if}
    <div
        class="flex aspect-video w-full justify-center rounded-xl transition-all duration-300 ease-in-out sm:rounded-3xl"
        id="video"
    ></div>
</div>
