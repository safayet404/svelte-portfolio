<script lang="ts">
  import { initAOS } from "../aos";
  import { locale, translations } from "$lib/i18n";

  initAOS();
  $: t = translations[$locale];

  const projects = [
    {
      name: "UniCore (UIMS)",
      name_bn: "ইউনিকোর (UIMS)",
      description:
        "A comprehensive University Information Management System with role-based access control. Manages students, faculty, departments, courses, enrollments, timetable, attendance, exams, grades, fee management, admissions, and library with detailed activity logging.",
      description_bn:
        "একটি পূর্ণাঙ্গ ইউনিভার্সিটি ইনফরমেশন ম্যানেজমেন্ট সিস্টেম যেখানে রোল-বেসড অ্যাক্সেস কন্ট্রোল রয়েছে। শিক্ষার্থী, শিক্ষক, বিভাগ, কোর্স, এনরোলমেন্ট, টাইমটেবিল, উপস্থিতি, পরীক্ষা, গ্রেড, ফি ম্যানেজমেন্ট এবং লাইব্রেরি পরিচালনা করে।",
      image: "/uims.png",
      technology: "ReactJS, Laravel, MySQL, Tailwind, Sanctum",
      client: "https://github.com/safayet404/uims-frontend",
      server:
        "https://github.com/safayet404/university-management-system-server",
      live: "https://unicore-frontend.vercel.app",
    },
    {
      name: "Collabify",
      name_bn: "কোলাবিফাই",
      description:
        "A real-time collaborative workspace platform featuring kanban boards, task management, and team workspaces. Supports multiple workspaces, board creation, card management, and member collaboration with a clean, intuitive interface.",
      description_bn:
        "একটি রিয়েল-টাইম কোলাবোরেটিভ ওয়ার্কস্পেস প্ল্যাটফর্ম যেখানে রয়েছে কানবান বোর্ড, টাস্ক ম্যানেজমেন্ট এবং টিম ওয়ার্কস্পেস। একাধিক ওয়ার্কস্পেস, বোর্ড তৈরি, কার্ড ম্যানেজমেন্ট এবং মেম্বার কোলাবোরেশন সাপোর্ট করে।",
      image: "/collabify.png",
      technology: "ReactJS, NodeJS, ExpressJS, MongoDB, Socket.io",
      client: "https://github.com/safayet404/collabify-frontend",
      server: "https://github.com/safayet404/collabify-backend",
      live: "https://collabify-frontend-nine.vercel.app",
    },
    {
      name: "QuickHire",
      name_bn: "কুইকহায়ার",
      description:
        "A full-featured job board platform connecting job seekers with employers. Features include job listings by category, featured jobs, company profiles, job search with filters, and a complete application management system.",
      description_bn:
        "একটি পূর্ণাঙ্গ জব বোর্ড প্ল্যাটফর্ম যা চাকরিপ্রার্থী ও নিয়োগকর্তাদের সংযুক্ত করে। ক্যাটাগরি অনুযায়ী জব লিস্টিং, ফিচার্ড জব, কোম্পানি প্রোফাইল এবং সম্পূর্ণ অ্যাপ্লিকেশন ম্যানেজমেন্ট সিস্টেম রয়েছে।",
      image: "/quickhire.png",
      technology: "ReactJS, NodeJS, ExpressJS, PostgreSQL, Tailwind",
      client: "https://github.com/safayet404/quickhire-frontend",
      server: "https://github.com/safayet404/quickhire-backend",
      live: "https://quickhire-frontend-sable.vercel.app/",
    },

    {
      name: "E - Commerce",
      name_bn: "ই-কমার্স",
      description:
        "A modern and responsive e-commerce platform with seamless product browsing, secure checkout, and intuitive user experience. Features include product filtering, cart management, order tracking, and a secure payment gateway for a smooth shopping experience.",
      description_bn:
        "একটি আধুনিক ও রেসপন্সিভ ই-কমার্স প্ল্যাটফর্ম যেখানে প্রোডাক্ট ব্রাউজিং, সিকিউর চেকআউট এবং সহজ ইউজার এক্সপেরিয়েন্স রয়েছে। প্রোডাক্ট ফিল্টারিং, কার্ট ম্যানেজমেন্ট, অর্ডার ট্র্যাকিং এবং পেমেন্ট গেটওয়ে সুবিধা রয়েছে।",
      image: "/resom.png",
      technology: "SvelteKit, Tailwind , Saleor  , PostgreSQL",
      client: "https://github.com/safayet404/urban-sailor-next",
      server: "",
      live: "https://www.resom.com.br/",
    },
    {
      name: "News Portal",
      name_bn: "নিউজ পোর্টাল",
      description:
        "A dynamic news portal delivering real-time news updates with categories for various topics, an intuitive interface for easy navigation, and a comment section for user interaction. Integrates with reliable news APIs for the latest headlines.",
      description_bn:
        "একটি ডাইনামিক নিউজ পোর্টাল যেখানে রিয়েল-টাইম আপডেট, বিভিন্ন ক্যাটাগরি, সহজ নেভিগেশন এবং কমেন্ট সেকশন রয়েছে। নিউজ API ইন্টিগ্রেশনের মাধ্যমে সর্বশেষ শিরোনাম প্রদর্শন করে।",
      image: "/project4.png",
      technology: "NextJS, Tailwind , Directus , MySQL",
      client: "https://github.com/safayet404/child-message-next",
      server: "",
      live: "https://childmessagebengali.com/",
    },
    {
      name: "Semi-Ecommerce Business Profile",
      name_bn: "সেমি-ইকমার্স বিজনেস প্রোফাইল",
      description:
        "A dynamic platform that blends online product showcasing with offline purchasing. Customers can browse products, place inquiries, and connect with sellers for personalized orders. Features include product catalogs, customer inquiries, and order management.",
      description_bn:
        "একটি প্ল্যাটফর্ম যেখানে অনলাইনে প্রোডাক্ট দেখা যায় এবং অফলাইনে ক্রয় করা যায়। প্রোডাক্ট ক্যাটালগ, কাস্টমার ইনকোয়ারি এবং অর্ডার ম্যানেজমেন্ট ফিচার রয়েছে।",
      image: "/project6.png",
      technology: "HTML, Tailwind, JavaScript , Django",
      client: "https://github.com/safayet404/de-heel",
      server: "",
      live: "https://deheel.com/",
    },
    {
      name: "Project Management System",
      name_bn: "প্রজেক্ট ম্যানেজমেন্ট সিস্টেম",
      description:
        "A robust Project Management System designed to streamline task tracking, team collaboration, and project timelines. Features include task assignment, progress monitoring, and real-time updates to ensure efficient project execution.",
      description_bn:
        "একটি শক্তিশালী প্রজেক্ট ম্যানেজমেন্ট সিস্টেম যেখানে টাস্ক ট্র্যাকিং, টিম কোলাবোরেশন এবং প্রজেক্ট টাইমলাইন পরিচালনা করা যায়। টাস্ক অ্যাসাইনমেন্ট, প্রোগ্রেস মনিটরিং এবং রিয়েল-টাইম আপডেট সুবিধা রয়েছে।",
      image: "/project3.png",
      technology: "ReactJS, NodeJS, ExpressJS, MongoDB",
      client: "https://github.com/safayet404/task-management-system",
      server: "https://github.com/safayet404/project-pulse-backend",
      live: "https://project-management-system-cloud.vercel.app",
    },
    {
      name: "Shop Management System",
      name_bn: "শপ ম্যানেজমেন্ট সিস্টেম",
      description:
        "It is shop management application for Parul Fabrics Ltd which is a fabrics shop where they produce and sell jeans fabrics. This application has some functionality like sell, receive, customer manage and many more.",
      description_bn:
        "পারুল ফেব্রিক্স লিমিটেডের জন্য তৈরি শপ ম্যানেজমেন্ট অ্যাপ্লিকেশন। বিক্রয় ট্র্যাকিং, পণ্য গ্রহণ, কাস্টমার ম্যানেজমেন্ট এবং রিপোর্টিং ফিচার রয়েছে।",
      image: "/project1.png",
      technology: "ReactJS, NodeJS, ExpressJS, MongoDB",
      client: "https://github.com/safayet404/parul-fabrics-ltd",
      server: "https://github.com/safayet404/parul-fabrics-ltd-backend",
      live: "",
    },
    {
      name: "Local Luminaries",
      name_bn: "লোকাল লুমিনারিজ",
      description:
        "It is a tour guide agency website. This application has some functionality like tour booking, cancel, tour customization.",
      description_bn:
        "একটি ট্যুর গাইড এজেন্সি ওয়েবসাইট যেখানে ট্যুর বুকিং, বাতিল এবং কাস্টমাইজেশন করা যায়। ভ্রমণকারীদের সাথে স্থানীয় গাইডদের সংযুক্ত করে।",
      image: "/project2.png",
      technology: "ReactJS, NodeJS, ExpressJS, MongoDB",
      client: "https://github.com/safayet404/local-luminaries-frontend",
      server: "https://github.com/safayet404/local-luminaries-backend",
      live: "https://local-luminaries.vercel.app/",
    },
  ];
</script>

<div class="container mx-auto p-4 mt-20">
  <h1
    class="font-semibold text-[#FF104F] text-2xl text-center md:text-left md:text-3xl uppercase mb-0 md:mb-5"
  >
    {t.project_title}
  </h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between">
    {#each projects as project, index}
      <div class="mt-10 md:mt-40" data-aos="fade-right">
        <h1 class="text-lg uppercase text-white font-semibold">
          0{index + 1}. {$locale === "bn" ? project.name_bn : project.name}
        </h1>

        <p class="mt-5 text-sm">
          {$locale === "bn" ? project.description_bn : project.description}
        </p>

        <p class="text-[#FF014F] mt-3 text-lg font-semibold">
          Technology : {project.technology}
        </p>

        <div class="mt-10 flex gap-5">
          {#if project.client.length > 2}
            <a
              href={project.client}
              target="_blank"
              rel="noopener noreferrer"
              class="border font-semibold px-7 py-2 rounded-md text-white text-sm"
              >{t.project_client}</a
            >
          {/if}
          {#if project.server && project.server.length > 2}
            <a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              class="border font-semibold px-7 py-2 rounded-md text-white text-sm"
              >{t.project_server}</a
            >
          {/if}
          {#if project.live && project.live.length > 2}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              class="border font-semibold px-7 py-2 rounded-md text-white text-sm"
              >Live</a
            >
          {/if}
        </div>
      </div>

      <div
        class="overflow-hidden h-[600px] w-full rounded-lg mt-10 md:mt-40"
        data-aos="fade-left"
      >
        <img
          src={project.image}
          class="h-full w-full object-cover object-top transition-all duration-1000 ease-in-out hover:object-bottom"
          alt={project.name}
        />
      </div>
    {/each}
  </div>
</div>
