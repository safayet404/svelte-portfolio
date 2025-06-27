<script lang="ts">
    import { initAOS } from "../aos";

    initAOS();
    let activeTab = "education";

    const tabs = [
        { id: "education", label: "Education" },
        { id: "skill", label: "Professional Skill" },
    ];

    const education = [
        {
            degress: "BSc in Computer Science and Engineering",
            institute: "University of South Asia",
            cgpa: "3.98 / 4.00",
            session: "2021-2025",
        },
        {
            degress: "Higher Secondary School Certificate",
            institute:
                "Jatir Janak Bangabandhu Sheikh Mujibur Rahman Government College ",
            cgpa: "4.17 / 5.00",
            session: "2017-2019",
        },
        {
            degress: "Secondary School Certificate ",
            institute: "Siraj Uddin Sarker Vidyaniketan and College",
            cgpa: "5.00 / 5.00",
            session: "2015-2017",
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

<div class=" mx-auto">
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
            <!-- {#each education as {degress,institute,cgpa,session},index }
            <div class="p-4 border border-[#130808] mb-2 rounded-md mt-10" data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
               <div class="flex justify-between">
                <h2 class="text-[#FF014F] text-lg md:text-2xl">{degress}</h2>
                <p class="text-xs md:text-sm italic">({session})</p>
               </div>
               <p class="mt-4 text-sm md:text-base">{institute}</p>
               <p class="mt-4 border inline-block px-4 py-2 rounded-lg">{cgpa}</p>
            </div>
        {/each} -->

            <div data-aos="fade-down" class=" bg-[#050014] p-5 mt-10">
                <div class="container flex justify-between mx-auto">
                    <div data-aos="fade-left" class="flex gap-3">
                        <img
                            class="lg:w-[180px] w-20 h-20 sm:w-24 sm:h-28 md:h-32 md:w-28 lg:h-[200px]"
                            src="/unisa-logo.png"
                            alt="varsity"
                        />
                        <div
                            data-aos="fade-right"
                            class="flex flex-col gap-10 my-auto"
                        >
                            <h1
                                class="uppercase font-bold text-white text-sm sm:text-xl md:text-3xl lg:text-5xl"
                            >
                                University of South Asia
                            </h1>
                            <p
                                class="text-white text-x md:text-base lg:text-base font-semibold"
                            >
                                BSc in Computer Science and Engineering
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col my-auto gap-10">
                        <h1
                            data-aos="fade-left"
                            class="font-medium mx-auto text-white text-sm md:text-3xl sm:text-xl lg:text-5xl"
                        >
                            CGPA
                        </h1>
                        <h2
                            data-aos="fade-right"
                            class="text-white mx-auto font-bold text-xs md:text-3xl sm:text-xl lg:text-5xl"
                        >
                            3.98/4.00
                        </h2>
                    </div>
                </div>
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
