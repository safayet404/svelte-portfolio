<script>
  import HeroSection from "../components/HeroSection.svelte";
  import Contact from "../components/Contact.svelte";
  import KnowMe from "../components/KnowMe.svelte";
  import Project from "../components/Project.svelte";
  import Education from "../components/Education.svelte";
  import Experience from "../components/Experience.svelte";
  import Blog from "../components/Blog.svelte";
  import { Toaster } from "svelte-french-toast";

  export let data;
</script>

<svelte:head>
  <title>Safayet Hossain — Software Engineer · AI & Full-Stack</title>
  <meta
    name="description"
    content="Software engineer building AI-powered, multi-tenant SaaS with Laravel, Vue, NestJS and Next.js. Led CAS Shield, an AI mock interview system, and Nexora, a conversational AI platform."
  />
  <link rel="canonical" href="https://safayet.me/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Safayet Hossain — Software Engineer · AI & Full-Stack" />
  <meta
    property="og:description"
    content="Software engineer building AI-powered, multi-tenant SaaS: LLM pipelines, real-time systems and the products around them."
  />
  <meta property="og:url" content="https://safayet.me/" />
  <meta property="og:image" content="https://safayet.me/safayet.png" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Safayet Hossain — Software Engineer · AI & Full-Stack" />
  <meta
    name="twitter:description"
    content="Software engineer building AI-powered, multi-tenant SaaS: LLM pipelines, real-time systems and the products around them."
  />
  <meta name="twitter:image" content="https://safayet.me/safayet.png" />
</svelte:head>

<Toaster />

<div>
  <section id="home">
    <HeroSection />
  </section>

  <section id="about">
    <KnowMe />
  </section>
  <section id="experience">
    <Experience />
  </section>

  <section id="projects">
    <Project projects={data.projects ?? []} />
  </section>

  <section id="education">
    <Education />
  </section>

  <section id="blog">
    <Blog blogs={data.latestBlogs ?? []} />
  </section>

  <section id="contact">
    <Contact />
  </section>
</div>

<!-- section end here -->
