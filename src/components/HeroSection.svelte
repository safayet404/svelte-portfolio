<script lang="ts">
    import { initAOS } from "../aos";
    import { locale } from "$lib/i18n"; // স্টোরটি ইম্পোর্ট করুন

    initAOS();

    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import {
        faNodeJs,
        faReact,
        faGithub,
        faLinkedin,
        faSquareJs,
    } from "@fortawesome/free-brands-svg-icons";
    import { siNextdotjs, siSvelte, siMongodb } from "simple-icons";
    import Typewriter from "./Typewriter.svelte";
</script>

<div class="container mx-auto mt-[120px] md:mt-[250px] p-4">
    <div data-aos="fade-right">
        <p class="mx-auto text-xs mb-5 font-semibold tracking-widest uppercase">
            {#if $locale === "bn"}
                আমার ডিজিটাল দুনিয়ায় স্বাগতম
            {:else}
                welcome to my world
            {/if}
        </p>

        {#if $locale === "bn"}
            <Typewriter
                text={`হ্যালো, আমি <span class="text-[#FF014F]">সাফায়েত,</span>`}
                speed={100}
                className="text-2xl md:text-8xl font-bold text-white"
                tag="h1"
            />
            <Typewriter
                text={`আমি একজন প্যাশনেট ওয়েব ডেভেলপার, যে কি না আধুনিক ওয়েব সল্যুশন তৈরিতে বিশ্বাসী`}
                speed={40}
                className="mt-4 text-xl md:text-5xl font-bold text-white"
                tag="h1"
            />
        {:else}
            <Typewriter
                text={`Hi, I’m <span class="text-[#FF014F]">Safayet,</span>`}
                speed={100}
                className="text-2xl md:text-8xl font-bold text-white"
                tag="h1"
            />
            <Typewriter
                text={`A passionate web developer with a flair for crafting elegant and efficient solutions`}
                speed={40}
                className="mt-4 text-xl md:text-5xl font-bold text-white"
                tag="h1"
            />
        {/if}
    </div>

    <div
        class="flex flex-wrap justify-between mt-10 max-w-6xl"
        data-aos="fade-left"
    >
        <div class="mt-5">
            <h1
                class="uppercase text-white text-xs font-semibold tracking-widest"
            >
                {#if $locale === "bn"}
                    আমার সোশ্যাল লিঙ্ক
                {:else}
                    Find with me
                {/if}
            </h1>
            <div class="flex gap-5 mt-5 text-3xl">
                <a href="https://www.linkedin.com/in/safayet-hossain16/"
                    ><FontAwesomeIcon
                        icon={faLinkedin}
                        class="text-blue-500"
                    /></a
                >
                <a href="https://github.com/safayet404"
                    ><FontAwesomeIcon icon={faGithub} class="text-red-500" /></a
                >
            </div>
        </div>

        <div class="mt-5">
            <h1
                class="uppercase text-white text-xs font-semibold tracking-widest"
            >
                {#if $locale === "bn"}
                    সেরা দক্ষতাগুলো
                {:else}
                    best skill on
                {/if}
            </h1>
            <div class="flex gap-5 mt-5 text-3xl">
                <FontAwesomeIcon icon={faNodeJs} class="text-green-500" />
                <FontAwesomeIcon icon={faReact} class="text-cyan-500" />
                <FontAwesomeIcon icon={faSquareJs} class="text-yellow-500" />
            </div>
        </div>
    </div>
</div>
