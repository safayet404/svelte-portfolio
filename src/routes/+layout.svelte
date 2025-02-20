<script>
  import Navbar from "../components/Navbar.svelte";
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import { fade } from "svelte/transition";
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
    <section id="home">
      <slot />  <!-- Renders current page content -->
    </section>
  </main>

  <Footer />
</div>
