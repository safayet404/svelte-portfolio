

<script lang="ts">

    let activeTab = "education"


    const tabs = [
        {id : "education", label :"Education"},
        {id : "skill", label :"Professional Skill"}
    ]

    const education = [
        {
            degress : "BSc in Computer Science and Engineering",
            institute : "University of South Asia",
            cgpa : "3.98 / 4.00",
            session : "2021-2025"
        },
        {
            degress : "Higher Secondary School Certificate",
            institute : "Jatir Janak Bangabandhu Sheikh Mujibur Rahman Government College ",
            cgpa : "4.17 / 5.00",
            session : "2017-2019"
        },
        {
            degress : "Secondary School Certificate ",
            institute : "Siraj Uddin Sarker Vidyaniketan and College",
            cgpa : "5.00 / 5.00",
            session : "2015-2017"
        },
    ]
    const professional = [
        {
            tech: 'Javascript',
            value:"81",
            aos : "fade-left"
        },
        {
            tech: 'React JS',
            value:"90",
            aos : "fade-left"
        },
        {
            tech: 'Next JS',
            value:"91",
            aos : "fade-left"
        },
        {
            tech: 'SvelteKit',
            value:"88",
            aos : "fade-left"
        },
        {
            tech: 'Bootstrap',
            value:"85",
            aos : "fade-right"
        },
        {
            tech: 'Tailwind CSS',
            value:"89",
            aos : "fade-right"
        },
        {
            tech: 'Node JS',
            value:"79",
            aos : "fade-right"
        },
        {
            tech: 'Express JS',
            value:"81",
            aos : "fade-left"
        },
        {
            tech: 'MongoDB',
            value:"84",
            aos : "fade-right"
        },
        {
            tech: 'Github',
            value:"85",
            aos : "fade-left"
        },
       
    ]


</script>

<div class="container mx-auto p-4">
    <div class="flex justify-center gap-5">
        {#each tabs as {id,label} }
            <button class=" gap-5 text-base text-center border px-10 py-2 rounded-lg font-semibold text-white mb-2" on:click={() => (activeTab = id)}>
                {label}
            </button>
        {/each}
    </div>

    {#if activeTab === "education"}
    <div > 
        {#each education as {degress,institute,cgpa,session} }
            <div class="p-4 border border-[#130808] mb-2 rounded-md mt-10 ">
               <div class="flex justify-between">
                <h2 class="text-[#FF014F] text-lg md:text-2xl">{degress}</h2>
                <p class="text-xs md:text-sm italic">({session})</p>
               </div>
               <p class="mt-4 text-sm md:text-base">{institute}</p>
               <p class="mt-4 border inline-block px-4 py-2 rounded-lg">{cgpa}</p>
            </div>
        {/each}
    </div>

    {:else if activeTab === "skill"}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 transition:fade">
        {#each professional as {tech, value}, index}
          <div class="flex flex-col">
            <h3 class="text-[#FF014F] font-semibold text-base mb-1">{tech}</h3>
            <progress class="w-full h-2 rounded-md overflow-hidden" value={value} max="100"></progress>
          </div>
        {/each}
      </div>
      

    {/if}
</div>