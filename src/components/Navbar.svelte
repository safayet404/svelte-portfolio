<script lang="ts">
  import { initLocale, locale, translations } from "$lib/i18n";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  let isMenuOpen = false;
  let currentLocale = "en";
  locale.subscribe((v) => (currentLocale = v));

  $: t = translations[currentLocale];
  $: isHome = $page.url.pathname === "/";
  $: isBlog = $page.url.pathname.startsWith("/blog");

  function handleNav(sectionId: string) {
    isMenuOpen = false;
    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      goto(`/#${sectionId}`);
    }
  }

  function toggleLanguage() {
    locale.update((l) => (l === "en" ? "bn" : "en"));
  }

  onMount(() => initLocale());
</script>

<div
  class="sticky top-0 left-0 right-0 z-50 border-b border-[#323941] backdrop-blur-md"
>
  <div class="container mx-auto flex justify-between items-center px-4 py-3">
    <!-- Logo -->
    <button
      type="button"
      on:click={() => handleNav("home")}
      class="flex-shrink-0"
    >
      <img src="/logo.png" class="w-28 h-20 object-contain" alt="Logo" />
    </button>

    <!-- Desktop nav -->
    <div class="hidden lg:flex items-center gap-1">
      <ul
        class="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide"
      >
        {#each [{ label: t.nav_home, id: "home" }, { label: t.nav_about, id: "about" }, { label: t.nav_project, id: "projects" }, { label: t.nav_education, id: "education" }, { label: t.nav_contact, id: "contact" }] as item}
          <li>
            <button
              type="button"
              on:click={() => handleNav(item.id)}
              class="relative px-3 py-2 rounded-lg text-white/60 hover:text-white transition-colors duration-200 hover:bg-white/[0.06] group"
            >
              {item.label}
              <span
                class="absolute bottom-1 left-3 right-3 h-px bg-[#FF014F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full"
              ></span>
            </button>
          </li>
        {/each}

        <!-- Blog link -->
        <li>
          <a
            href="/blog"
            class="relative px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-white/[0.06] group {isBlog
              ? 'text-[#FF014F]'
              : 'text-white/60 hover:text-white'}"
          >
            {t.nav_blog}
            <span
              class="absolute bottom-1 left-3 right-3 h-px bg-[#FF014F] transition-transform duration-200 origin-left rounded-full {isBlog
                ? 'scale-x-100'
                : 'scale-x-0 group-hover:scale-x-100'}"
            ></span>
          </a>
        </li>

      </ul>

      <div class="w-px h-5 bg-white/10 mx-2"></div>

      <!-- Resume -->
      <a
        href="/resume.pdf"
        download
        class="px-4 py-2 rounded-lg text-sm font-bold text-[#FF014F] border border-[#FF014F]/40 hover:bg-[#FF014F] hover:text-white transition-all duration-200 shadow-[0_0_15px_rgba(255,1,79,0.15)] hover:shadow-[0_0_20px_rgba(255,1,79,0.3)]"
      >
        {t.nav_resume}
      </a>

      <!-- Language toggle -->
      <button
        on:click={toggleLanguage}
        class="ml-2 px-3 py-2 rounded-lg text-xs font-black border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all duration-200"
      >
        {$locale === "en" ? "বাং" : "EN"}
      </button>
    </div>

    <!-- Mobile hamburger -->
    <button
      on:click={() => (isMenuOpen = !isMenuOpen)}
      class="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
      aria-label="Toggle menu"
    >
      <span
        class="w-5 h-0.5 bg-white/70 rounded-full transition-all duration-300 {isMenuOpen
          ? 'rotate-45 translate-y-2'
          : ''}"
      ></span>
      <span
        class="w-5 h-0.5 bg-white/70 rounded-full transition-all duration-300 {isMenuOpen
          ? 'opacity-0'
          : ''}"
      ></span>
      <span
        class="w-5 h-0.5 bg-white/70 rounded-full transition-all duration-300 {isMenuOpen
          ? '-rotate-45 -translate-y-2'
          : ''}"
      ></span>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if isMenuOpen}
    <div
      transition:fly={{ y: -8, duration: 200 }}
      class="lg:hidden border-t border-white/[0.06] bg-[#0d0d18]/95 backdrop-blur-xl px-4 py-4"
    >
      <ul class="space-y-1 text-sm font-semibold uppercase tracking-wide">
        {#each [{ label: t.nav_home, id: "home" }, { label: t.nav_about, id: "about" }, { label: t.nav_project, id: "projects" }, { label: t.nav_education, id: "education" }, { label: t.nav_contact, id: "contact" }] as item}
          <li>
            <button
              on:click={() => handleNav(item.id)}
              class="w-full text-left px-4 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {item.label}
            </button>
          </li>
        {/each}
        <li>
          <a
            href="/blog"
            on:click={() => (isMenuOpen = false)}
            class="block px-4 py-2.5 rounded-lg transition-colors {isBlog
              ? 'text-[#FF014F] bg-[#FF014F]/5'
              : 'text-white/60 hover:text-white hover:bg-white/[0.06]'}"
          >
            {t.nav_blog}
          </a>
        </li>
      </ul>

      <div
        class="mt-3 pt-3 border-t border-white/[0.06] flex items-center gap-3"
      >
        <a
          href="/resume.pdf"
          download
          class="flex-1 text-center py-2.5 rounded-lg text-sm font-bold text-[#FF014F] border border-[#FF014F]/30 hover:bg-[#FF014F] hover:text-white transition-all"
        >
          {t.nav_resume}
        </a>
        <button
          on:click={toggleLanguage}
          class="px-4 py-2.5 rounded-lg text-xs font-black border border-white/10 text-white/50 hover:text-white transition-all"
        >
          {$locale === "en" ? "বাং" : "EN"}
        </button>
      </div>
    </div>
  {/if}
</div>
