<script lang="ts">
  import { initAOS } from "../aos";
  import { locale, translations } from "$lib/i18n";

  initAOS();
  $: t = translations[$locale];

  export let projects: Array<{
    id: string;
    title: string;
    title_bn: string;
    description: string;
    description_bn: string;
    cover_image: string;
    tech_stack: string[];
    role: string;
    status: string;
    github_client_url: string;
    github_server_url: string;
    live_url: string;
    featured: boolean;
  }> = [];
</script>

<div class="container mx-auto p-4 mt-20">
  <h1
    class="font-semibold text-[#FF104F] text-2xl text-center md:text-left md:text-3xl uppercase mb-0 md:mb-5"
  >
    {t.project_title}
  </h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between">
    {#each projects as project, index}
      <div class="mt-10 md:mt-40" data-aos="fade-right">
        <div class="flex items-center gap-3 mb-1">
          <h1 class="text-lg uppercase text-white font-semibold">
            0{index + 1}. {$locale === "bn" ? project.title_bn || project.title : project.title}
          </h1>
          {#if project.featured}
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[#FF014F]/20 text-[#FF014F] border border-[#FF014F]/30 font-semibold">
              Featured
            </span>
          {/if}
          {#if project.status === 'in-progress'}
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 font-semibold">
              In Progress
            </span>
          {/if}
        </div>

        {#if project.role}
          <p class="text-white/40 text-xs uppercase tracking-widest mb-3">{project.role}</p>
        {/if}

        <p class="mt-2 text-sm">
          {$locale === "bn" ? project.description_bn || project.description : project.description}
        </p>

        <p class="text-[#FF014F] mt-3 text-lg font-semibold">
          Technology : {project.tech_stack?.join(', ')}
        </p>

        <div class="mt-10 flex gap-5 flex-wrap">
          {#if project.github_client_url}
            <a
              href={project.github_client_url}
              target="_blank"
              rel="noopener noreferrer"
              class="border font-semibold px-7 py-2 rounded-md text-white text-sm"
              >{t.project_client}</a
            >
          {/if}
          {#if project.github_server_url}
            <a
              href={project.github_server_url}
              target="_blank"
              rel="noopener noreferrer"
              class="border font-semibold px-7 py-2 rounded-md text-white text-sm"
              >{t.project_server}</a
            >
          {/if}
          {#if project.live_url}
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              class="border font-semibold px-7 py-2 rounded-md text-white text-sm"
              >{t.project_live}</a
            >
          {/if}
        </div>
      </div>

      <div
        class="overflow-hidden h-[600px] w-full rounded-lg mt-10 md:mt-40"
        data-aos="fade-left"
      >
        {#if project.cover_image}
          <img
            src={project.cover_image}
            class="h-full w-full object-cover object-top transition-all duration-1000 ease-in-out hover:object-bottom"
            alt={project.title}
          />
        {:else}
          <div class="h-full w-full bg-gradient-to-br from-[#FF014F]/10 to-transparent flex items-center justify-center rounded-lg">
            <span class="text-white/10 text-6xl">▦</span>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
