<script lang="ts">
    import { goto } from "$app/navigation";
    import { fly } from "svelte/transition"; // ✅ Use fly transition for a smooth effect
 
    let isMenuOpen = false;
  
    const toggleMenu = () => {
      isMenuOpen = !isMenuOpen;
    };
  </script>
  
  <div class="bg-base-100 fixed top-0 left-0 right-0 z-50">
    <div class="navbar container mx-auto flex justify-between items-center p-4">
      
      <!-- Left side navbar -->
      <div>
        <a href="/" class="btn btn-ghost  text-xl"> Safayet</a>
      </div>
  
      <!-- Mobile Toggle Button -->
      <button on:click={toggleMenu} class="lg:hidden btn btn-square btn-ghost">
        {#if isMenuOpen}
          ✖
        {:else}
          ☰ 
        {/if}
      </button>
  
      <!-- Right side navbar (Desktop) -->
      <div class="hidden lg:flex">
        <ul class="flex space-x-12">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  
    <!-- Mobile Menu in Top-Right Corner -->
    {#if isMenuOpen}
      <div transition:fly={{ x: 100, y: 0, duration: 300 }} 
           class="lg:hidden fixed top-16 right-4 bg-base-200 w-56 p-4 rounded-lg shadow-lg z-40">
        <ul class="space-y-4 text-left">
          <li><a href="/" on:click={() => (isMenuOpen = false)}>Home</a></li>
          <li><a href="/about" on:click={() => (isMenuOpen = false)}>About</a></li>
          <li><a href="/projects" on:click={() => (isMenuOpen = false)}>Projects</a></li>
          <li><a href="/contact" on:click={() => (isMenuOpen = false)}>Contact</a></li>
        </ul>
      </div>
    {/if}
  </div>
  