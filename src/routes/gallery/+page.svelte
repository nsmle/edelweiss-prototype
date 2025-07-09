<script lang="ts">
    const gallery = [
        [
            {
                label: 'Wedding Event',
                image: '/wedding.webp',
                testimoniId: '0197f149-9345-749a-adc0-4091f1569701',
                aspectRatio: '16/9'
            },
            {
                label: 'Festival Event',
                image: '/festival.jpg',
                testimoniId: '0197f148-c136-7c5e-97de-f019c3479918',
                aspectRatio: '9/16'
            },
            {
                label: 'Corporate Event',
                image: '/job-fair.jpg',
                testimoniId: '0197f148-c136-74c7-9b28-ecc0f84cdc80',
                aspectRatio: '16/9'
            }
        ],
        [
            {
                label: 'Prewedding',
                image: '/hero-image.webp',
                testimoniId: '0197f148-c136-751d-900d-78c358653f18',
                aspectRatio: '2/3'
            },
            {
                label: 'Birthday',
                image: '/birthday.png',
                testimoniId: '0197f148-c136-74f1-a444-3da8c7e3bd58',
                aspectRatio: '3/2'
            },
            {
                label: 'Selfie',
                image: '/users/profile-picture-2.jpg',
                testimoniId: '0197f148-c136-7d23-832e-b4db19c80a87',
                aspectRatio: '1/1'
            }
        ],
        [
            {
                label: 'Wedding',
                image: '/prewedding.png',
                testimoniId: '0197f148-c136-7d2a-a338-fe9dfaa81b1e',
                aspectRatio: '3/2'
            },
            {
                label: 'Corporate Event',
                image: '/corporate-event.webp',
                testimoniId: '0197f148-c136-7b7c-9e82-da2c5282231d',
                aspectRatio: '1/1'
            },
            {
                label: 'Studio',
                image: '/studio.jpg',
                testimoniId: '0197f148-c136-7348-ad5c-bb9729dc59ff',
                aspectRatio: '2/3'
            }
        ],
        [
            {
                label: 'Wedding',
                image: '/prewedding-2.png',
                testimoniId: '0197f148-c136-7262-ba70-7eb1fd334995',
                aspectRatio: '2/3'
            },
            {
                label: 'Product Launch',
                image: '/product-launch.png',
                testimoniId: '0197f148-c136-7bce-af3b-482286429237',
                aspectRatio: '9/16'
            }
        ]
    ];
</script>

<svelte:head>
    <title>Gallery - Edelweiss Photobooth</title>
</svelte:head>

<div class="relative isolate mx-auto flex max-w-7xl items-center px-5 pt-14 sm:px-8 sm:pt-32" id="services">
    <div class="z-10 flex w-full flex-col items-center justify-start pt-8 sm:pt-8">
        <div class="flex h-full w-full flex-col">
            <h1
                class="font-inter text-6xl font-semibold tracking-tight text-nowrap text-gray-800/90 max-xl:text-4xl max-sm:text-2xl"
            >
                Gallery
            </h1>
            <span
                class="mt-2 font-sans text-sm font-medium tracking-normal text-gray-500 sm:mt-4 sm:max-w-2xl sm:text-xl"
            >
                Semua moment kami abadikan disini.
            </span>
        </div>
    </div>

    <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-31rem)]"
        aria-hidden="true"
    >
        <div
            class="-trangray-x-1/3 relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 rotate-20 bg-linear-to-tr from-green-400 to-purple-500 opacity-20 sm:left-[calc(50%-20rem)] sm:w-288.75"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
</div>

<div class="relative isolate flex w-full items-center px-4" id="services">
    <div class="relative isolate z-10 flex w-full flex-col items-center overflow-hidden">
        <div class="mx-auto mt-6 flex w-full max-w-7xl flex-col gap-6 gap-x-3 pb-8 sm:py-8 md:px-6 lg:px-8">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
                {#each gallery as galleryPhoto}
                    <div class="grid gap-4">
                        {#each galleryPhoto as photo}
                            <a href={`/testimoni/${photo.testimoniId}`}>
                                <img
                                    class="h-full w-full max-w-full rounded-lg object-cover object-center transition-all duration-300 ease-in-out hover:z-0 hover:scale-98 hover:shadow-lg hover:shadow-blue-200/50"
                                    style={`aspect-ratio: ${photo.aspectRatio};`}
                                    src={photo.image}
                                    alt={photo.label}
                                />
                            </a>
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div
        class="absolute inset-x-0 top-[calc(95%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
    >
        <div
            class="-trangray-x-1/3 relative left-[calc(10%-11rem)] aspect-1155/678 w-144.5 rotate-85 bg-linear-to-tr from-green-400 to-purple-500 opacity-30 sm:left-[calc(30%-46rem)] sm:w-288.75"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
    </div>
</div>
