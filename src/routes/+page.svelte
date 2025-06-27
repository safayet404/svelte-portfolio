<script>
  import HeroSection from "../components/HeroSection.svelte";

  import Contact from "../components/Contact.svelte";
  import KnowMe from "../components/KnowMe.svelte";
  import Project from "../components/Project.svelte";
  import Education from "../components/Education.svelte";
  import { Toaster } from "svelte-french-toast";
</script>

<Toaster />

<div>
  <section id="home">
    <HeroSection />
  </section>

  <section id="about">
    <KnowMe />
  </section>

  <section id="projects">
    <Project />
  </section>

  <section id="education">
    <Education />
  </section>

  <section id="contact">
    <Contact />
  </section>
</div>

<!-- section end here -->
