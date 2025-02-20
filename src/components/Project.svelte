<script lang="ts">
    const project = [
      {
          name : "Project Management System",
          description : " A robust Project Management System designed to streamline task tracking, team collaboration, and project timelines. Features include task assignment, progress monitoring, and real-time updates to ensure efficient project execution.",
          email : "admin@gmail.com",
          password : "safayet",
          image : "/project3.png",
          technology : "ReactJS, NodeJS, ExpressJS, MongoDB",
          client : "sadadfaf",
          server : "dadad",
          live : "dad"
      },
      {
          name : "Shop Management System",
          description : "It is shop management application for Parul Fabrics Ltd which is fabrics shop where they produce and sell jeans fabrics.This application has some functionality like sell,receive,customer manage and many more.",
          email : "admin@gmail.com",
          password : "admin1234",
          image : "/project2.png",
          technology : "ReactJS, NodeJS, ExpressJS, MongoDB",
          client : "sadadfaf",
          server : "dadad",
          live : "dad"
      },
      {
          name : "Local Luminaries",
          description : "It is a tour guide agency website.This application has some functionality tour booking,cancel,tour customization.",
          email : " ",
          password : " ",
          image : "/project1.png",
          technology : "ReactJS, NodeJS, ExpressJS, MongoDB",
          client : "sadadfaf",
          server : "dadad",
          live : "dad"
      },
    ]
  
    import { onMount } from "svelte";
    import AOS from "aos";
    import "aos/dist/aos.css";
  
    onMount(() => {
      AOS.init({
        duration: 1200,
        offset: 100,
        easing: "ease-in-out",
        delay: 200,
        once: false,
      });
    });
  </script>
  
  <div class="container mx-auto p-4">
    <h1 class="font-semibold text-[#FF104F] text-2xl text-center md:text-left md:text-3xl uppercase mb-0 md:mb-5">Projects</h1>
  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between mt-5">
      {#each project as { name, description, email, password, image, technology, client, server, live }, index}
      <div class="mt-10 md:mt-40" data-aos="fade-up">
        <h1 class="text-lg uppercase text-white font-semibold"> 0{index+1}. {name}</h1>
  
        <p class="mt-5 text-sm">{description}</p>
  
        {#if email.length > 2}
        <p class="mt-4 text-sm">Email : {email}</p>
        <p class="mt-4 text-sm">Password : {password}</p>
        {/if}
  
        <p class="text-[#FF014F] mt-3 text-lg font-semibold">Technology : {technology}</p>
  
        <div class="mt-10 flex gap-5">
          <button class="border font-semibold px-2 rounded-md text-white text-sm">Client Code</button>
          <button class="border font-semibold px-2 rounded-md text-white text-sm">Server Code</button>
          <button class="border font-semibold px-2 rounded-md text-white text-sm">Live Site</button>
        </div>
      </div>
  
      <div class="overflow-hidden h-[600px] w-full rounded-lg mt-10 md:mt-40" data-aos="zoom-in">
        <img
          src={image}
          class="h-full w-full object-cover object-top transition-all duration-1000 ease-in-out hover:object-bottom"
          alt="{name}"
        />
      </div>
      {/each}
    </div>
  </div>
  