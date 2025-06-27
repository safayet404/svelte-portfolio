<script lang="ts">
  import { fly } from "svelte/transition";

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      isMenuOpen = false; // Close menu after clicking
    }
  }
</script>

<div class=" fixed top-0 left-0 right-0 z-50 bg-[#1D232A]">
  <div class="navbar container mx-auto flex justify-between items-center p-4">
    <!-- Left side navbar -->
    <div>
      <button type="button" on:click={() => scrollToSection("home")}>
        <img src="/logo.png" class="w-32 h-24" alt=" " />
      </button>
    </div>

    <!-- Mobile Toggle Button -->
    <button
      on:click={toggleMenu}
      class="lg:hidden btn btn-square btn-ghost"
      aria-label="Toggle menu"
    >
      {#if !isMenuOpen}
        ☰
      {/if}
    </button>

    <!-- Right side navbar (Desktop) -->
    <div class="hidden lg:flex">
      <ul class="flex space-x-12 text-white uppercase">
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("home")}
            class="nav-link"
          >
            Home
          </button>
        </li>
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("about")}
            class="nav-link"
          >
            About
          </button>
        </li>
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("projects")}
            class="nav-link"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("education")}
            class="nav-link"
          >
            Education-Skill
          </button>
        </li>
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("contact")}
            class="nav-link"
          >
            Contact
          </button>
        </li>
        <li>
          <a
            href="/resume.pdf"
            download
            class="text-[#FF104F] nav-link rounded-lg px-5 py-2 mt-5
           shadow-[0_4px_15px_rgba(255,255,255,0.3)]
           hover:shadow-[0_6px_20px_rgba(255,255,255,0.5)]"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div
      transition:fly={{ x: 100, y: 0, duration: 300 }}
      class="lg:hidden fixed top-16 right-4 bg-base-200 w-56 p-4 rounded-lg shadow-lg z-40"
    >
      <button
        on:click={toggleMenu}
        class="block w-full text-right text-red-600 font-bold text-2xl"
        >x</button
      >
      <ul class="space-y-4 text-left">
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("home")}
            class="nav-link"
          >
            Home
          </button>
        </li>
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("about")}
            class="nav-link"
          >
            About
          </button>
        </li>
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("projects")}
            class="nav-link"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("education")}
            class="nav-link"
          >
            Education-Skill
          </button>
        </li>
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("contact")}
            class="nav-link"
          >
            Contact
          </button>
        </li>
        <li>
          <button
            type="button"
            on:click={() => scrollToSection("contact")}
            class="nav-link"
          >
            Resume
          </button>
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
