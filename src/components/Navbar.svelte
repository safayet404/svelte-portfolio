<script lang="ts">
  import { initLocale, locale, translations } from "$lib/i18n";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { get } from "svelte/store";

  let isMenuOpen = false;

  // Use a reactive variable that updates whenever the locale store changes
  let currentLocale = "en";
  locale.subscribe((value) => {
    currentLocale = value;
  });

  // Get the correct dictionary based on the current locale
  $: t = translations[currentLocale];

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      isMenuOpen = false;
    }
  }

  onMount(() => {
    initLocale();
  });

  function toggleLanguage() {
    locale.update((l) => (l === "en" ? "bn" : "en"));
  }
</script>

<div class=" fixed top-0 left-0 right-0 z-50 bg-[#1D232A]">
  <div class="navbar container mx-auto flex justify-between items-center p-4">
    <div>
      <button type="button" on:click={() => scrollToSection("home")}>
        <img src="/logo.png" class="w-32 h-24" alt=" " />
      </button>
    </div>

    <button
      on:click={toggleMenu}
      class="lg:hidden btn btn-square btn-ghost"
      aria-label="Toggle menu"
    >
      {#if !isMenuOpen}
        ☰
      {/if}
    </button>

    <div class="hidden lg:flex items-center">
      <ul class="flex space-x-8 text-white uppercase items-center">
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("home")}
            class="nav-link"
          >
            {t.nav_home}
          </button>
        </li>
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("about")}
            class="nav-link"
          >
            {t.nav_about}
          </button>
        </li>
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("projects")}
            class="nav-link"
          >
            {t.nav_project}
          </button>
        </li>
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("education")}
            class="nav-link"
          >
            {t.nav_education}
          </button>
        </li>

        <li>
          <a
            href="/resume.pdf"
            download
            class="text-[#FF104F] nav-link rounded-lg px-5 py-2 shadow-[0_4px_15px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.5)]"
          >
            Resume
          </a>
        </li>

        <li>
          <button
            on:click={toggleLanguage}
            class="text-[#FF014F] border border-[#FF014F] px-3 py-1 rounded hover:bg-[#FF014F] hover:text-white transition-all text-xs font-bold"
          >
            {$locale === "en" ? "বাংলা" : "ENG"}
          </button>
        </li>
      </ul>
    </div>
  </div>

  {#if isMenuOpen}
    <div
      transition:fly={{ x: 100, y: 0, duration: 300 }}
      class="lg:hidden fixed top-16 right-4 bg-base-200 w-56 p-6 rounded-lg shadow-lg z-40"
    >
      <button
        on:click={toggleMenu}
        class="block w-full text-right text-red-600 font-bold text-2xl"
        >x</button
      >
      <ul class="space-y-6 text-left">
        <li>
          <button on:click={() => scrollToSection("home")} class="nav-link"
            >{t.nav_home}</button
          >
        </li>
        <li>
          <button on:click={() => scrollToSection("about")} class="nav-link"
            >{t.nav_about}</button
          >
        </li>
        <li>
          <button
            on:click={toggleLanguage}
            class="text-[#FF014F] font-bold uppercase"
          >
            Language: {$locale === "en" ? "বাংলা" : "English"}
          </button>
        </li>
        <li>
          <a href="/resume.pdf" download class="text-[#FF104F] font-bold"
            >RESUME</a
          >
        </li>
      </ul>
    </div>
  {/if}
</div>

<style>
  .nav-link {
    text-transform: uppercase !important;
  }
</style>
