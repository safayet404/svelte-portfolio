<script lang="ts">
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faNodeJs, faReact,faFacebookF, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<div class="container mx-auto mt-[120px] md:mt-[250px] p-4">
    <div>
        <p class="mx-auto text-xs font-semibold tracking-widest uppercase">welcome to my world</p>
        <h1 class=" text-2xl md:text-8xl font-bold text-white">Hi, I’m <span class="text-[#FF014F]">Safayet,</span></h1>
        <h2 class="mt-4 text-xl md:text-5xl leading-relaxed font-bold text-white">A passionate web developer with a flair for crafting elegant and efficient solutions</h2>

    </div>

    <div class="flex flex-wrap justify-between mt-10 max-w-6xl">
        <div>
            <h1 class="uppercase text-white text-xs font-semibold tracking-widest">Find with me</h1>
            <div class="flex gap-5 mt-5 text-3xl">
                <FontAwesomeIcon icon={faFacebookF} class="text-blue-500" />
                <FontAwesomeIcon icon={faGithub} class="text-red-500" />
            </div>

        </div>
        <div>
            <h1 class="uppercase text-white text-xs font-semibold tracking-widest">best skill on</h1>
            <div class="flex gap-5 mt-5 text-3xl">
                <FontAwesomeIcon  icon={faNodeJs} class="text-blue-500"/>
<FontAwesomeIcon icon={faReact} class="text-red-500" />

            </div>
        </div>
    </div>
</div>