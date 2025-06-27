<script lang="ts">
  import { initAOS } from "../aos";

  initAOS();
  const project = [
    {
      name: "E - Commerce (Ongoing)",
      description:
        "A modern and responsive e-commerce platform with seamless product browsing, secure checkout, and intuitive user experience. Features include product filtering, cart management, order tracking, and a secure payment gateway for a smooth shopping experience.",
      email: "",
      password: "",
      image: "/project5.png",
      technology: "NextJS, Tailwind , Saleor  , PostgreSQL",
      client: "https://github.com/safayet404/urban-sailor-next",
      server: " ",
      live: "https://www.resom.com.br/",
    },
    {
      name: "News Portal",
      description:
        "News Portal A dynamic and user-friendly news portal designed to deliver real-time news updates. The platform offers categories for various topics, an intuitive interface for easy navigation, and a comment section for user interaction. It integrates with reliable news APIs to pull the latest headlines and provides a seamless experience for readers to stay informed.",
      email: "",
      password: "",
      image: "/project4.png",
      technology: "NextJS, Tailwind , Directus , MySQL",
      client: "https://github.com/safayet404/child-message-next",
      server: " ",
      live: "https://childmessagebengali.com/",
    },
    {
      name: "Semi-Ecommerce Business Profile",
      description:
        "A dynamic platform that blends online product showcasing with offline purchasing. Customers can browse products, place inquiries, and connect with sellers for personalized orders. Features include product catalogs, customer inquiries, and order management for a seamless shopping experience.",
      email: "admin@gmail.com",
      password: "admin1234",
      image: "/project6.png",
      technology: "HTML, Tailwind, JavaScript , Django",
      client: "https://github.com/safayet404/de-heel",
      server: " ",
      live: "https://deheel.com/",
    },
    {
      name: "Project Management System",
      description:
        " A robust Project Management System designed to streamline task tracking, team collaboration, and project timelines. Features include task assignment, progress monitoring, and real-time updates to ensure efficient project execution.",
      email: "admin@gmail.com",
      password: "safayet",
      image: "/project3.png",
      technology: "ReactJS, NodeJS, ExpressJS, MongoDB",
      client: "https://github.com/safayet404/task-management-system",
      server: "https://github.com/safayet404/project-pulse-backend",
      live: "https://project-management-system-cloud.vercel.app",
    },

    {
      name: "Shop Management System",
      description:
        "It is shop management application for Parul Fabrics Ltd which is fabrics shop where they produce and sell jeans fabrics.This application has some functionality like sell,receive,customer manage and many more.",
      email: "admin@gmail.com",
      password: "admin1234",
      image: "/project1.png",
      technology: "ReactJS, NodeJS, ExpressJS, MongoDB",
      client: "https://github.com/safayet404/parul-fabrics-ltd",
      server: "https://github.com/safayet404/parul-fabrics-ltd-backend",
      live: "https://parul-fabrics-ltd.vercel.appad",
    },
    {
      name: "Local Luminaries",
      description:
        "It is a tour guide agency website.This application has some functionality tour booking,cancel,tour customization.",
      email: " ",
      password: " ",
      image: "/project2.png",
      technology: "ReactJS, NodeJS, ExpressJS, MongoDB",
      client: "https://github.com/safayet404/local-luminaries-frontend",
      server: "https://github.com/safayet404/local-luminaries-backend",
      live: "https://local-luminaries.vercel.app/",
    },
  ];
</script>

<div class="container mx-auto p-4">
  <h1
    class="font-semibold text-[#FF104F] text-2xl text-center md:text-left md:text-3xl uppercase mb-0 md:mb-5"
  >
    Projects
  </h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between mt-5">
    {#each project as { name, description, email, password, image, technology, client, server, live }, index}
      <div class="mt-10 md:mt-40" data-aos="fade-right">
        <h1 class="text-lg uppercase text-white font-semibold">
          0{index + 1}. {name}
        </h1>

        <p class="mt-5 text-sm">{description}</p>

        {#if email.length > 2}
          <p class="mt-4 text-sm">Email : {email}</p>
          <p class="mt-4 text-sm">Password : {password}</p>
        {/if}

        <p class="text-[#FF014F] mt-3 text-lg font-semibold">
          Technology : {technology}
        </p>

        <div class="mt-10 flex gap-5">
          {#if client.length > 2}
            <a
              href={client}
              target="_blank"
              rel="noopener noreferrer"
              class="border font-semibold px-7 py-2 rounded-md text-white text-sm"
              >Client Code</a
            >
          {/if}
          {#if server.length > 2}
            <a
              href={server}
              target="_blank"
              rel="noopener noreferrer"
              class="border font-semibold px-7 py-2 rounded-md text-white text-sm"
              >Server Code</a
            >
          {/if}
          <!-- {#if live.length > 2}            
            <a href="{live}"  target="_blank" rel="noopener noreferrer" class="border font-semibold px-2 rounded-md text-white text-sm">Live Site</a>
          {/if} -->
        </div>
      </div>

      <div
        class="overflow-hidden h-[600px] w-full rounded-lg mt-10 md:mt-40"
        data-aos="fade-left"
      >
        <img
          src={image}
          class="h-full w-full object-cover object-top transition-all duration-1000 ease-in-out hover:object-bottom"
          alt={name}
        />
      </div>
    {/each}
  </div>
</div>
