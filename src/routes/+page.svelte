<script>
  import Education from "../components/Education.svelte";
import HeroSection from "../components/HeroSection.svelte";
  import KnowMe from "../components/KnowMe.svelte";

  import { fade, slide } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import Contact from "../components/Contact.svelte";
  import Project from "../components/Project.svelte";

</script>


<div transition:fade="{{duration: 500, easing: cubicOut}}">
  <HeroSection />
  <KnowMe/>
  <Project />
  <Education />
  <Contact />
</div>