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

<div class="bg-base-100 fixed top-0 left-0 right-0 z-50">
  <div class="navbar container mx-auto flex justify-between items-center p-4">
    
    <!-- Left side navbar -->
    <div>
      <button type="button" on:click={() => scrollToSection("home")}>
        <img src="/logo.png" class="w-20 h-20" alt=" " />
      
      </button>
    </div>

    <!-- Mobile Toggle Button -->
    <button on:click={toggleMenu} class="lg:hidden btn btn-square btn-ghost" aria-label="Toggle menu">
      {#if isMenuOpen} ✖ {:else} ☰ {/if}
    </button>

    <!-- Right side navbar (Desktop) -->
    <div class="hidden lg:flex">
      <ul class="flex space-x-12 text-white uppercase">
        <li>
          <button type="button" on:click={() => scrollToSection("home")} class="nav-link">
            Home
          </button>
        </li>
        <li>
          <button type="button" on:click={() => scrollToSection("about")} class="nav-link">
            About
          </button>
        </li>
        <li>
          <button type="button" on:click={() => scrollToSection("projects")} class="nav-link">
            Projects
          </button>
        </li>
        <li>
          <button type="button" on:click={() => scrollToSection("education")} class="nav-link">
            Education-Skill
          </button>
        </li>
        <li>
          <button type="button" on:click={() => scrollToSection("contact")} class="nav-link">
            Contact
          </button>
        </li>
        <li>
          <a href="/resume.pdf" download  class="nav-link text-[#FF014F] shadow-[0_0_5px_0_rgba(94,92,92,0.2)]  px-10 rounded py-2">
            Resume
          </a>
        </li>
      </ul>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div transition:fly={{ x: 100, y: 0, duration: 300 }} 
         class="lg:hidden fixed top-16 right-4 bg-base-200 w-56 p-4 rounded-lg shadow-lg z-40">
      <ul class="space-y-4 text-left">
        <li>
          <button type="button" on:click={() => scrollToSection("home")} class="nav-link">
            Home
          </button>
        </li>
        <li>
          <button type="button" on:click={() => scrollToSection("about")} class="nav-link">
            About
          </button>
        </li>
        <li>
          <button type="button" on:click={() => scrollToSection("projects")} class="nav-link">
            Projects
          </button>
        </li>
        <li>
          <button type="button" on:click={() => scrollToSection("education")} class="nav-link">
            Education-Skill
          </button>
        </li>
        <li>
          <button type="button" on:click={() => scrollToSection("contact")} class="nav-link">
            Contact
          </button>
        </li>
        <li>
          <button type="button" on:click={() => scrollToSection("contact")} class="nav-link">
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