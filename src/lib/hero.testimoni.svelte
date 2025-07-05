<script lang="ts">
    let activeTestimonialIndex = 0;
    let testimonials = [
        {
            name: 'Joko Mulyono',
            message:
                'Edelweiss Photobooth menangkap momen-momen penting dalam hidup saya dengan sempurna dan profesionalisme yang tinggi!',
            job: 'Tukang Meuble',
            image: '/users/profile-picture-1.jpg'
        },
        {
            name: 'Mega Chan',
            message:
                'Aku sangat terkesan dengan Edelweiss Photobooth, hasil fotonya sangat berkualitas dan pelayanan yang ramah!',
            job: 'Mak-mak Rempong',
            image: '/users/profile-picture-3.jpg'
        },
        {
            name: 'Pra Wowo',
            message:
                'Pengalaman menggunakan Edelweiss Photobooth sangat menyenangkan, hasil fotonya sangat berkualitas!',
            job: 'Lansia Gemoy',
            image: '/users/profile-picture-2.jpg'
        },
        {
            name: 'Puan Punani',
            message:
                'Wah Edelweiss Photobooth benar-benar mengubah acara saya menjadi lebih berkesan, hasil fotonya sangat bagus!',
            job: 'English Teacher',
            image: '/users/profile-picture-8.jpg'
        },
        {
            name: 'Gatot Pranowo',
            message: 'Hasil foto dari Edelweiss Photobooth sangat memuaskan, saya sangat merekomendasikan mereka!',
            job: 'The Man of 16',
            image: '/users/profile-picture-6.jpg'
        },
        {
            name: 'Dedi Muldani',
            message:
                'Pengalaman menggunakan Edelweiss Photobooth sangat menyenangkan, hasil fotonya sangat berkualitas!',
            job: 'Mang-mamang Barak',
            image: '/users/profile-picture-7.jpg'
        }
    ];
</script>

<div class="flex flex-col">
    <div class="mx-auto flex w-full max-w-7xl flex-col px-4 sm:flex-row sm:px-8">
        <div class="flex w-full flex-col text-start sm:w-auto">
            <div class="flex flex-col justify-start">
                <h1
                    class="font-sans text-xs/10 font-bold tracking-normal text-balance text-gray-500 uppercase sm:text-base/10"
                >
                    Testimoni
                </h1>
                <h1
                    class="text-6xl font-semibold tracking-tight text-balance text-gray-800/90 max-xl:text-5xl max-sm:text-3xl"
                >
                    Apa kata mereka tentang kami
                </h1>
                <div class="order-last mt-10 hidden items-center justify-start sm:flex">
                    <a
                        href="/testimoni"
                        class="w-full cursor-pointer rounded-full border border-gray-400 px-8 py-2.5 text-center text-sm font-medium text-gray-700 backdrop-blur-2xl backdrop-brightness-105 transition-all duration-300 ease-in-out outline-none hover:border-green-400 hover:bg-gradient-to-br hover:from-green-300 hover:via-green-400 hover:to-green-500 hover:text-white hover:ring-4 hover:ring-green-200/20 focus:ring-4 focus:ring-green-200/50 sm:w-auto sm:text-lg"
                        >Tambahkan Testimoni</a
                    >
                </div>
            </div>
        </div>

        <div
            class="group/testimoni mt-6 flex w-full p-0 transition-all duration-300 ease-in-out sm:mt-0 sm:max-w-xl lg:pl-16"
        >
            <div class="relative isolate mt-4 flex h-full w-full items-center justify-center">
                <a
                    href={`http://google.com/search?q=${testimonials[activeTestimonialIndex].name} ${testimonials[activeTestimonialIndex].job}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex min-w-full flex-col items-center rounded-xl bg-white shadow-[0_10px_65px_2px_rgba(20,50,190,0.05)] transition-all duration-300 ease-in-out hover:shadow-[0_25px_35px_rgba(20,50,80,0.10)] sm:rounded-2xl sm:shadow-[0_10px_65px_2px_rgba(20,50,190,0.08)] md:max-w-xl md:flex-row"
                >
                    <div class="flex flex-col justify-between px-8 py-6 leading-normal sm:px-8 sm:py-10">
                        <div class="flex items-center">
                            <div class="shrink-0">
                                <img
                                    class="size-10 rounded-full sm:size-12"
                                    src={testimonials[activeTestimonialIndex].image}
                                    alt={testimonials[activeTestimonialIndex].name}
                                />
                            </div>
                            <div class="ms-4 min-w-0 flex-1">
                                <p class="text-base font-semibold text-nowrap text-gray-700/95 sm:text-lg">
                                    {testimonials[activeTestimonialIndex].name}
                                </p>
                                <p class="-mt-0.5 text-sm font-medium text-nowrap text-gray-500 sm:text-base">
                                    {testimonials[activeTestimonialIndex].job}
                                </p>
                            </div>
                        </div>
                        <p class="mt-4 font-sans text-sm font-medium text-gray-600/95 sm:mt-5.5 sm:text-base">
                            {testimonials[activeTestimonialIndex].message}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div class="flex w-full">
        <div class="no-scrollbar flex w-full flex-row gap-3 overflow-auto pt-4 pb-16 sm:gap-4 sm:pt-12">
            {#each testimonials as testimonial, index}
                <button
                    class={`${index == activeTestimonialIndex ? 'bg-white shadow-2xl ring-4  shadow-blue-900/15 ring-green-500/5 sm:shadow-blue-900/30' : 'bg-clean-500/30 hover:bg-clean-500/50 shadow-lg shadow-blue-900/5'} flex min-w-fit cursor-pointer items-center justify-center rounded-xl backdrop-blur-md backdrop-brightness-105 ${index == 0 ? 'ml-4 md:ml-8 xl:ml-26 2xl:ml-[25vw]' : ''} ${index == testimonials.length - 1 ? 'mr-4 md:mr-8 xl:mr-26 2xl:mr-[25vw]' : ''}`}
                    on:click={(): number => (activeTestimonialIndex = index)}
                >
                    <div class="flex w-full items-center justify-center px-5.5 py-3.5">
                        <div class="shrink-0">
                            <img
                                class="size-10 rounded-full sm:size-12"
                                src={testimonial.image}
                                alt={testimonial.name}
                            />
                        </div>
                        <div class="ms-3 flex w-full min-w-0 flex-1 flex-col items-start">
                            <p class="text-base font-semibold text-nowrap text-gray-700/95 sm:text-lg">
                                {testimonial.name}
                            </p>
                            <p class="-mt-0.5 text-sm font-medium text-nowrap text-gray-500 sm:text-base">
                                {testimonial.job}
                            </p>
                        </div>
                    </div>
                </button>
            {/each}
        </div>
    </div>

    <div class="order-last -mt-6 flex max-w-7xl items-center justify-start px-4 sm:hidden">
        <a
            href="/testimoni"
            class="w-full cursor-pointer rounded-full border border-gray-400 px-6 py-2.5 text-center text-sm font-medium text-gray-700 backdrop-blur-2xl backdrop-brightness-105 transition-all duration-300 ease-in-out outline-none hover:border-green-400 hover:bg-gradient-to-br hover:from-green-300 hover:via-green-400 hover:to-green-500 hover:text-white hover:ring-4 hover:ring-green-200/20 focus:ring-4 focus:ring-green-200/50 sm:w-auto sm:text-base"
            >Tambahkan Testimoni</a
        >
    </div>
</div>
