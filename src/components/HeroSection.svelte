<script lang="ts">
      import { initAOS } from "../aos";
      initAOS()
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faNodeJs, faReact,faFacebookF, faGithub, faLinkedin,faSquareJs } from "@fortawesome/free-brands-svg-icons";
  import { siNextdotjs, siSvelte, siMongodb } from "simple-icons";




</script>

<div class="container mx-auto mt-[120px] md:mt-[250px] p-4">
    <div data-aos="fade-right">
        <p class="mx-auto text-xs font-semibold tracking-widest uppercase">welcome to my world</p>
        <h1 class=" text-2xl md:text-8xl font-bold text-white">Hi, I’m <span class="text-[#FF014F]">Safayet,</span></h1>
        <h2 class="mt-4 text-xl md:text-5xl font-bold text-white" style="line-height: 2;">
            A passionate web developer with a flair for crafting elegant and efficient solutions
        </h2>

    </div>

    <div class="flex flex-wrap justify-between mt-10 max-w-6xl" data-aos="fade-left">
        <div class="mt-5">
            <h1 class="uppercase text-white text-xs font-semibold tracking-widest">Find with me</h1>
            <div class="flex gap-5 mt-5 text-3xl">
                <FontAwesomeIcon icon={faLinkedin} class="text-blue-500" />
                <FontAwesomeIcon icon={faFacebookF} class="text-blue-500" />
                <FontAwesomeIcon icon={faGithub} class="text-red-500" />
            </div>
           
        </div>

        <div class="mt-5">
            <h1 class="uppercase text-white text-xs font-semibold tracking-widest">best skill on</h1>
            <div class="flex gap-5 mt-5 text-3xl">
                <FontAwesomeIcon  icon={faNodeJs} class="text-green-500"/>
<FontAwesomeIcon icon={faReact} class="text-cyan-500" />
<FontAwesomeIcon icon={faSquareJs} class="text-yellow-500" />

            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="{siNextdotjs.path}" />
            </svg>

            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="{siSvelte.path}" class="text-orange-500" />
            </svg>

            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="{siMongodb.path}" class="text-green-500" />
            </svg>

            </div>
        </div>
    </div>
</div>