<script>
  import Navbar from "../components/Navbar.svelte";
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import { fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
</script>

<style>
  /* Custom styles for your transition */
  .transition-container {
    position: relative;
    overflow: hidden;
  }
</style>

<!-- Navbar -->

<div class="flex flex-col transition-container">
  <Navbar />
  <main class="flex-grow" transition:fade={{ duration: 500 }}>
    <slot />  <!-- This renders the current page's content -->
  </main>
  <Footer />
</div>
