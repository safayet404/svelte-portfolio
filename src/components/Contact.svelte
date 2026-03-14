<script lang="ts">
    import { initAOS } from "../aos";
    initAOS();
    import { locale, translations } from "$lib/i18n";

    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
    import toast from "svelte-french-toast";

    let form = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    };
    let success = "";
    let error = "";

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();

        const formData = new FormData();
        for (const key in form) {
            formData.append(key, form[key as keyof typeof form]);
        }

        const res = await fetch("/api/contact", {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            success = "Message sent successfully!";
            error = "";
            form = { name: "", email: "", phone: "", subject: "", message: "" };
            toast.success("Email Sent Successfully !");
        } else {
            error = "Failed to send message.";
            success = "";
        }
    }
</script>

<div class="container mx-auto p-4">
    <h1
        class="uppercase text-[#FF014F] text-lg text-center md:text-left md:text-3xl mt-5"
    >
        {#if $locale === "bn"}
            যোগাযোগ করুন
        {:else}
            Contact with me
        {/if}
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <!-- Left Div -->
        <div
            class="w-full rounded-xl overflow-hidden shadow-lg transform hover:shadow-2xl mt-10"
            data-aos="fade-right"
        >
            <img
                src="/contact.webp"
                class="w-full p-5 rounded-3xl transition duration-300 ease-in-out hover:scale-105"
                alt=" "
            />

            <div class="p-5">
                <h1>
                    {#if $locale === "bn"}
                        সাফায়েত হোসেন
                    {:else}
                        Safayet Hossain
                    {/if}
                </h1>
                <p>
                    {#if $locale === "bn"}
                        হাউস : ১৫৩,প্রাইমারী স্কুল রোড
                    {:else}
                        House : 153, Primary School Road
                    {/if} <br />
                    {#if $locale === "bn"}
                        দক্ষিণখান ,উত্তরা , ঢাকা
                    {:else}
                        Dakshinkhan,Uttara,Dhaka
                    {/if}
                </p>

                <p class="mt-10">
                    {#if $locale === "bn"}
                        ফোন :
                    {:else}
                        Phone :
                    {/if}
                    <span class="text-white">
                        {#if $locale === "bn"}
                            ০১৬৭৯১৭৫৫৫৩
                        {:else}
                            01679175553
                        {/if}
                    </span>
                </p>
                <p>
                    {#if $locale === "bn"}
                        ইমেইল :
                    {:else}
                        Email :
                    {/if}
                    <span class="text-white">hossainsafayet187@gmail.com</span>
                </p>
            </div>

            <div class="p-5">
                <h1
                    class="text-xs uppercase tracking-widest font-semibold text-white"
                >
                    {#if $locale === "bn"}
                        যোগাযোগ
                    {:else}
                        Find with me
                    {/if}
                </h1>

                <div class="flex gap-5 mt-5 text-3xl">
                    <a href="https://www.linkedin.com/in/safayet-hossain16/">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            class="text-blue-500"
                        />
                    </a>
                    <a href="https://github.com/safayet404">
                        <FontAwesomeIcon icon={faGithub} class="text-red-500" />
                    </a>
                </div>
            </div>
        </div>

        <!-- Right Div -->
        <form
            on:submit={handleSubmit}
            class="w-full rounded-xl p-10 overflow-hidden shadow-lg transform hover:shadow-2xl"
            data-aos="fade-left"
        >
            <div class="flex gap-5 flex-wrap">
                <div class="flex flex-col w-full">
                    <label
                        for="name"
                        class="uppercase text-xs tracking-widest mb-4"
                    >
                        {#if $locale === "bn"}
                            আপনার নাম
                        {:else}
                            your name
                        {/if}
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        bind:value={form.name}
                        required
                        class="bg-white h-10 rounded-lg text-black p-2 outline-none"
                    />
                </div>
                <div class="flex flex-col w-full">
                    <label
                        for="phone"
                        class="uppercase text-xs tracking-widest mb-4"
                    >
                        {#if $locale === "bn"}
                            আপনার মোবাইল
                        {:else}
                            your mobile
                        {/if}</label
                    >
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        bind:value={form.phone}
                        class="bg-white h-10 rounded-lg text-black p-2 outline-none"
                    />
                </div>
            </div>

            <div class="flex flex-col w-full mt-5">
                <label
                    for="email"
                    class="uppercase text-xs tracking-widest mb-4"
                >
                    {#if $locale === "bn"}
                        আপনার ইমেইল
                    {:else}
                        your email
                    {/if}</label
                >
                <input
                    id="email"
                    type="email"
                    name="email"
                    bind:value={form.email}
                    required
                    class="bg-white h-10 rounded-lg text-black p-2 outline-none"
                />
            </div>

            <div class="flex flex-col w-full mt-5">
                <label
                    for="subject"
                    class="uppercase text-xs tracking-widest mb-4"
                >
                    {#if $locale === "bn"}
                        বিষয়
                    {:else}
                        your subject
                    {/if}</label
                >
                <input
                    id="subject"
                    type="text"
                    name="subject"
                    bind:value={form.subject}
                    class="bg-white h-10 rounded-lg text-black p-2 outline-none"
                />
            </div>

            <div class="flex flex-col w-full mt-5">
                <label
                    for="message"
                    class="uppercase text-xs tracking-widest mb-4"
                >
                    {#if $locale === "bn"}
                        ম্যাসেজ লিখুন
                    {:else}
                        your message
                    {/if}</label
                >
                <textarea
                    id="message"
                    name="message"
                    bind:value={form.message}
                    required
                    class="w-full h-28 md:h-32 lg:h-72 outline-none p-2 rounded-lg bg-white text-black"
                ></textarea>
            </div>

            <button
                type="submit"
                class="text-[#FF104F] rounded-lg px-5 py-2 mt-5 shadow-[0_4px_15px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.5)]"
            >
                {#if $locale === "bn"}
                    ম্যাসেজ পাঠান
                {:else}
                    Send Message
                {/if}
            </button>

            {#if success}
                <p class="mt-2 text-green-400 text-sm">{success}</p>
            {:else if error}
                <p class="mt-2 text-red-400 text-sm">{error}</p>
            {/if}
        </form>
    </div>
</div>
