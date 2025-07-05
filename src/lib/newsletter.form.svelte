<script lang="ts">
    import { page } from '$app/state';

    let newsletters: {
        type: 'allready' | 'incorrect' | 'error' | 'success' | null;
        reason: string | null;
        loading: boolean;
    } = $state({
        type: null,
        reason: null,
        loading: false
    });

    let email = $state('');
    let message = $state('');

    const subscribe = async (submitter: HTMLButtonElement): Promise<void> => {
        const reset = (isReset: boolean = false): void => {
            setTimeout((): void => {
                newsletters = { type: null, reason: null, loading: false };
                if (isReset) {
                    email = '';
                    message = '';
                }
            }, 10000);
        };

        if (email.trim() === '') {
            newsletters = { type: 'incorrect', reason: 'Email tidak boleh kosong', loading: false };
            return reset();
        }

        if (!email.trim().includes('@')) {
            newsletters = { type: 'incorrect', reason: 'Email tidak valid', loading: false };
            return reset();
        }

        if (message.trim() === '' || message.trim().length < 6) {
            newsletters = {
                type: 'incorrect',
                reason: 'Pesan tidak boleh kosong atau kurang dari 6 karakter',
                loading: false
            };
            return reset();
        }

        console.log('Adding to newsletters...');
        console.log(`Email: ${email}`);

        newsletters = { type: null, reason: null, loading: true };
        submitter?.blur();

        const response = await fetch(`${page.url.origin}/api/newsletter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, message })
        });
        const data = await response.json();

        newsletters = { type: data.status, reason: data.message, loading: false };
        return reset(true);
    };
</script>

<div class="flex w-full flex-col px-2 sm:px-0">
    <div class="mx-auto flex w-full flex-col justify-center sm:max-w-lg">
        <div class="flex w-full flex-col">
            <label
                for="newsletter-email-about"
                class="ml-1 font-sans text-xs/8 leading-normal font-semibold text-gray-500/80 uppercase sm:text-sm/8"
                >Email</label
            >
            <div class="relative w-full">
                <div
                    class={`pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 ${false ? 'animate-pulse' : ''}`}
                >
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
                    id="newsletter-email-about"
                    class="block w-full rounded-lg border border-gray-300 bg-transparent p-3 ps-10 text-sm text-gray-900 placeholder:font-medium focus:border-green-500/60 focus:bg-white focus:shadow-xl focus:shadow-blue-700/10 focus:outline-none disabled:cursor-wait"
                    placeholder="Email mu"
                    aria-label="Email untuk mendapatkan update"
                    autocomplete="email"
                    disabled={newsletters.loading}
                    bind:value={email}
                    required
                />
            </div>
        </div>
        <div class="mt-6 mb-8 flex w-full flex-col">
            <label
                for="newsletter-message-about"
                class="ml-1 font-sans text-xs/8 leading-normal font-semibold text-gray-500/80 uppercase sm:text-sm/8"
                >Pesan</label
            >
            <textarea
                id="newsletter-message-about"
                rows="5"
                class="focus:border-bg-white min-h-xl block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 placeholder:font-medium focus:border-green-500/60 focus:shadow-xl focus:shadow-blue-700/10 focus:outline-none disabled:cursor-wait disabled:opacity-80"
                placeholder="Tulis pesan pertanyaan, permintaan, atau keluh kesah mu di sini..."
                aria-label="Pesan untuk kami"
                disabled={newsletters.loading}
                bind:value={message}
                required
            ></textarea>
        </div>

        <div class="flex h-auto w-full flex-col items-center gap-y-3 text-start sm:flex-row sm:justify-between">
            <span
                class={`ml-1 w-full text-start font-sans leading-normal font-normal transition-all duration-300 ease-in-out ${newsletters.type?.length ? 'text-xs' : 'text-xs sm:text-sm/8'} ${
                    newsletters.type === 'incorrect' || newsletters.type === 'error'
                        ? 'text-rose-600/90'
                        : newsletters.type === 'allready'
                          ? 'text-yellow-600/90'
                          : newsletters.type === 'success'
                            ? 'text-green-600/90'
                            : 'text-gray-500/80'
                }  `}
                >{newsletters?.loading
                    ? 'Mohon tunggu sebentar....'
                    : newsletters?.reason || 'Kami janji bakal jaga kerahasiaan identitasmu'}</span
            >
            <button
                type="button"
                aria-labelledby="Kirim Pesan"
                onclick={(e): Promise<void> => subscribe(e.currentTarget)}
                class="ring-primary-200/20 focus:ring-primary-200/50 flex w-full cursor-pointer flex-row items-center justify-center gap-x-3 rounded-lg bg-gradient-to-br from-green-400 via-green-500 to-green-500 px-10 py-2.5 text-center text-center text-base font-medium text-nowrap text-white ring-4 transition-all duration-300 ease-in-out outline-none hover:from-green-300 hover:via-green-400 hover:to-green-500 disabled:cursor-wait disabled:opacity-50 disabled:shadow-none sm:w-auto sm:rounded-full sm:text-base"
                disabled={newsletters.loading}
            >
                {#if newsletters.loading}
                    <span class="relative isolate -mr-1 flex size-3">
                        <span
                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-100 opacity-70"
                        ></span>
                        <span class="relative mx-auto my-auto inline-flex size-1.5 rounded-full bg-green-200"></span>
                    </span>
                {/if}
                {newsletters.loading ? 'Mengirim' : 'Kirim Pesan'}
            </button>
        </div>
    </div>
</div>
