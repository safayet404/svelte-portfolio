
<script lang="ts">
      import { initAOS } from "../aos";

initAOS()
 import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
 import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>


<div class="container mx-auto p-4">
    <h1 class="uppercase text-[#FF014F] text-lg text-center md:text-left md:text-3xl mt-5">Contact with me</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

        <!-- Left Div -->
        <div class="w-full rounded-xl overflow-hidden shadow-lg  transform hover:shadow-2xl mt-10" data-aos="fade-right">
            <img src="/contact.webp" class="w-full p-5 rounded-3xl transition duration-300 ease-in-out hover:scale-105" alt=" "/>

           <div class="p-5">
            <h1>Safayet Hossain</h1>
            <p>House : 153, Primary School Road <br/> Dakshinkhan,Uttara,Dhaka</p>


            <p class="mt-10"> Phone : <span class="text-white"> 01679175553</span> </p>
            <p> Email : <span class="text-white">hossainsafayet187@gmail.com</span> </p>
           </div>

           <div class="p-5">
            <h1 class="text-xs uppercase tracking-widest font-semibold text-white">Find with me</h1>

            <div class="flex gap-5 mt-5 text-3xl ">
                <FontAwesomeIcon icon={faLinkedin} class="text-blue-500" />
                <FontAwesomeIcon icon={faGithub} class="text-red-500" />
            </div>
           </div>


        </div>

        <!-- Right Div -->
        <div class="w-full rounded-xl p-10 overflow-hidden shadow-lg transform hover:shadow-2xl" data-aos="fade-left">


           <div class="flex gap-5 flex-wrap">
            <div class="flex flex-col w-full ">
                <label for="name" class="uppercase text-xs tracking-widest mb-4">your name</label>
                <input id="name" type="text" name="name" class="bg-white h-10 rounded-lg text-black p-2 outline-none"/>
            </div>
            <div class="flex flex-col w-full">
                <label for="phone"  class="uppercase text-xs tracking-widest mb-4">your mobile</label>
                <input id="name" type="text" name="phone" class="bg-white h-10 rounded-lg text-black p-2 outline-none" />
            </div>
           </div>

           <div class="flex flex-col w-full mt-5">
            <label for="email" class="uppercase text-xs tracking-widest mb-4">your email</label>
            <input id="email" type="text" name="email" class="bg-white h-10 rounded-lg text-black p-2 outline-none"/>
           </div>


           <div class="flex flex-col w-full mt-5">
            <label for="subject" class="uppercase text-xs tracking-widest mb-4">your subject</label>
            <input id="subject" type="text" name="subject" class="bg-white h-10 rounded-lg text-black p-2 outline-none"/>
           </div>


           <div class="flex flex-col w-full mt-5">
            <label for="message" class="uppercase text-xs tracking-widest mb-4">your message</label>
            <textarea class="w-full h-28 md:h-96 outline-none p-2 rounded-lg bg-white text-black" ></textarea>
           </div>

           <button class="text-[#FF104F] rounded-lg px-5 py-2 mt-5 
           shadow-[0_4px_15px_rgba(255,255,255,0.3)] 
           hover:shadow-[0_6px_20px_rgba(255,255,255,0.5)]">
           Send Message
         </button>
         


        </div>
    </div>
</div>