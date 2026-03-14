<script lang="ts">
    import { initAOS } from "../aos";
    import { locale } from "$lib/i18n";
    initAOS();
    let activeTab = "education";

    $: tabs = [
        { id: "education", label: $locale === "bn" ? "শিক্ষা" : "Education" },
        {
            id: "skill",
            label: $locale === "bn" ? "পেশাগত দক্ষতা" : "Professional Skill",
        },
    ];

    const professional = [
        {
            tech: "Javascript",
            value: "81",
            aos: "fade-left",
        },
        {
            tech: "React JS",
            value: "90",
            aos: "fade-left",
        },
        {
            tech: "Next JS",
            value: "91",
            aos: "fade-left",
        },
        {
            tech: "SvelteKit",
            value: "88",
            aos: "fade-left",
        },
        {
            tech: "Bootstrap",
            value: "85",
            aos: "fade-right",
        },
        {
            tech: "Tailwind CSS",
            value: "89",
            aos: "fade-right",
        },
        {
            tech: "Node JS",
            value: "79",
            aos: "fade-right",
        },
        {
            tech: "Express JS",
            value: "81",
            aos: "fade-left",
        },
        {
            tech: "MongoDB",
            value: "84",
            aos: "fade-right",
        },
        {
            tech: "Github",
            value: "85",
            aos: "fade-left",
        },
    ];
</script>

<div class=" mx-auto mt-14">
    <div class="flex justify-center gap-5">
        {#each tabs as { id, label }}
            <button
                class=" gap-5 text-xs md:text-base text-center border px-10 py-2 rounded-lg font-semibold text-white mb-2"
                on:click={() => (activeTab = id)}
            >
                {label}
            </button>
        {/each}
    </div>

    {#if activeTab === "education"}
        <div>
            <div
                data-aos="fade-down"
                class="relative bg-[#050014] overflow-hidden mt-5"
            >
                <!-- Ambient background effects -->
                <div class="absolute inset-0 pointer-events-none">
                    <div
                        class="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2"
                    ></div>
                    <div
                        class="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/8 rounded-full blur-2xl translate-y-1/2"
                    ></div>
                    <!-- Subtle grid lines -->
                    <div
                        class="absolute inset-0 opacity-[0.03]"
                        style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 40px 40px;"
                    ></div>
                </div>

                <!-- Top border accent -->
                <div
                    class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent"
                ></div>

                <div class="container mx-auto px-6 py-8 lg:py-10 relative z-10">
                    <div class="flex items-center justify-between gap-6">
                        <!-- Left: Logo + Info -->
                        <div
                            data-aos="fade-right"
                            class="flex items-center gap-5 lg:gap-7"
                        >
                            <!-- Logo with glow ring -->
                            <div class="relative flex-shrink-0">
                                <div
                                    class="absolute inset-0 bg-red-500/20 rounded-full blur-xl scale-110"
                                ></div>
                                <div
                                    class="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-1.5 lg:p-2"
                                >
                                    <img
                                        class="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                                        src="/unisa-logo.png"
                                        alt="University of South Asia"
                                    />
                                </div>
                            </div>

                            <!-- Text info -->
                            <div class="flex flex-col gap-2 lg:gap-3">
                                <!-- Label tag -->
                                <span
                                    class="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-red-400/80 bg-red-500/10 border border-red-500/20 rounded-full px-2.5 py-1 w-fit"
                                >
                                    <span
                                        class="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"
                                    ></span>
                                    {#if $locale === "bn"}
                                        শিক্ষা
                                    {:else}
                                        Education
                                    {/if}
                                </span>

                                <h1
                                    class="font-black text-white tracking-tight
                               text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight"
                                >
                                    {#if $locale === "bn"}
                                        ইউনিভার্সিটি অফ <span
                                            class="text-red-500"
                                            >সাউথ এশিয়া</span
                                        >
                                    {:else}
                                        University of <span class="text-red-500"
                                            >South Asia</span
                                        >
                                    {/if}
                                </h1>

                                <p
                                    class="text-white/50 font-medium tracking-wide
                              hidden sm:block text-xs md:text-sm lg:text-base"
                                >
                                    {#if $locale === "bn"}
                                        বিএসসি ইন কম্পিউটার সায়েন্স অ্যান্ড
                                        ইঞ্জিনিয়ারিং
                                    {:else}
                                        BSc in Computer Science & Engineering
                                    {/if}
                                </p>
                                <p
                                    class="text-white/50 font-medium text-xs block sm:hidden"
                                >
                                    {#if $locale === "bn"}
                                        বিএসসি ইন সিএসই
                                    {:else}
                                        BSc in CSE
                                    {/if}
                                </p>
                            </div>
                        </div>

                        <!-- Right: CGPA Card -->
                        <div data-aos="fade-left" class="flex-shrink-0">
                            <div class="relative group">
                                <!-- Glow behind card -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-br from-red-500/30 to-orange-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                ></div>

                                <!-- Card -->
                                <div
                                    class="relative border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl px-5 py-4 sm:px-7 sm:py-5 lg:px-8 lg:py-6 text-center
                                hover:border-red-500/30 transition-all duration-300"
                                >
                                    <!-- Shimmer line -->
                                    <div
                                        class="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    ></div>

                                    <p
                                        class="text-white/40 text-[10px] sm:text-xs lg:text-sm font-semibold uppercase mb-2"
                                    >
                                        {#if $locale === "bn"}
                                            সিজিপিএ
                                        {:else}
                                            CGPA
                                        {/if}
                                    </p>

                                    <div
                                        class="flex items-baseline justify-center gap-0.5"
                                    >
                                        <span
                                            class="font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-red-200
                                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl tabular-nums"
                                        >
                                            {#if $locale === "bn"}
                                                ৩.৯৮
                                            {:else}
                                                3.98
                                            {/if}
                                        </span>
                                        <span
                                            class="text-white/30 font-light text-base sm:text-xl lg:text-2xl"
                                            >/ {#if $locale === "bn"}
                                                ৪.০০
                                            {:else}
                                                4.00
                                            {/if}</span
                                        >
                                    </div>

                                    <!-- Star rating dots -->
                                    <div class="flex justify-center gap-1 mt-2">
                                        <span
                                            class="w-1.5 h-1.5 rounded-full bg-red-400"
                                        ></span>
                                        <span
                                            class="w-1.5 h-1.5 rounded-full bg-red-400"
                                        ></span>
                                        <span
                                            class="w-1.5 h-1.5 rounded-full bg-red-400"
                                        ></span>
                                        <span
                                            class="w-1.5 h-1.5 rounded-full bg-red-400/50"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom border accent -->
                <div
                    class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                ></div>
            </div>
        </div>
    {:else if activeTab === "skill"}
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 transition:fade">
                {#each professional as { tech, value }, index}
                    <div
                        class="flex flex-col"
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                        <h3 class="text-[#FF014F] font-semibold text-base mb-1">
                            {tech}
                        </h3>
                        <progress
                            class="w-full h-2 rounded-md overflow-hidden text-[#0064BA]"
                            {value}
                            max="100"
                        ></progress>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div>
