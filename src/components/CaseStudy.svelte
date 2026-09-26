<script lang="ts">
    import { locale } from "$lib/i18n";

    type Item = { title: string; text: string };
    type CaseStudyContent = {
        back: string;
        badge: string;
        title: string;
        subtitle: string;
        note: string;
        problemTitle: string;
        problem: string[];
        flowTitle: string;
        flow: Item[];
        featuresTitle?: string;
        features?: Item[];
        whyTitle: string;
        why: Item[];
        impactTitle: string;
        impact: string[];
        roleTitle: string;
        role: string[];
        skillsTitle: string;
        skills: string[];
    };

    export let content: { en: CaseStudyContent; bn: CaseStudyContent };
    export let meta: { title: string; description: string; url: string };

    $: c = content[$locale === "bn" ? "bn" : "en"];
</script>

<svelte:head>
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    <link rel="canonical" href={meta.url} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:url" content={meta.url} />
    <meta property="og:image" content="https://safayet.me/safayet.png" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={meta.title} />
    <meta name="twitter:description" content={meta.description} />
</svelte:head>

<article class="container mx-auto p-4 mt-16 mb-24 max-w-4xl">
    <a
        href="/#experience"
        class="text-sm text-white/50 hover:text-[#FF014F] transition-colors"
        >{c.back}</a
    >

    <!-- Header -->
    <header class="mt-8">
        <span
            class="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-red-400/80 bg-red-500/10 border border-red-500/20 rounded-full px-2.5 py-1"
        >
            <span class="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
            {c.badge}
        </span>
        <h1
            class="mt-5 text-4xl md:text-6xl font-black text-white tracking-tight"
        >
            {c.title}
        </h1>
        <p class="mt-4 text-lg md:text-2xl text-white/70 leading-snug">
            {c.subtitle}
        </p>
        <p
            class="mt-6 text-xs md:text-sm text-white/40 border-l-2 border-white/10 pl-4"
        >
            {c.note}
        </p>
    </header>

    <!-- Problem -->
    <section class="mt-16">
        <h2 class="text-[#FF014F] text-xl md:text-2xl uppercase font-semibold">
            {c.problemTitle}
        </h2>
        {#each c.problem as para}
            <p class="mt-4 text-white/70 leading-relaxed">{para}</p>
        {/each}
    </section>

    <!-- How it works -->
    <section class="mt-16">
        <h2 class="text-[#FF014F] text-xl md:text-2xl uppercase font-semibold">
            {c.flowTitle}
        </h2>
        <ol class="mt-6 relative border-l border-white/10 ml-3 space-y-8">
            {#each c.flow as step, index}
                <li class="pl-8 relative">
                    <span
                        class="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#FF014F] text-white text-xs font-bold flex items-center justify-center"
                        >{index + 1}</span
                    >
                    <h3 class="text-white font-semibold">{step.title}</h3>
                    <p class="mt-1 text-sm text-white/60 leading-relaxed">
                        {step.text}
                    </p>
                </li>
            {/each}
        </ol>
    </section>

    <!-- Why -->
    <section class="mt-16">
        <h2 class="text-[#FF014F] text-xl md:text-2xl uppercase font-semibold">
            {c.whyTitle}
        </h2>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each c.why as item}
                <div
                    class="relative border border-white/[0.07] bg-white/[0.03] rounded-xl p-5"
                >
                    <div
                        class="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    ></div>
                    <h3 class="text-white font-semibold">{item.title}</h3>
                    <p class="mt-2 text-sm text-white/60 leading-relaxed">
                        {item.text}
                    </p>
                </div>
            {/each}
        </div>
    </section>

    {#if c.features}
        <!-- Features -->
        <section class="mt-16">
            <h2
                class="text-[#FF014F] text-xl md:text-2xl uppercase font-semibold"
            >
                {c.featuresTitle}
            </h2>
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {#each c.features as item}
                    <div
                        class="border border-white/[0.07] bg-white/[0.03] rounded-xl p-4"
                    >
                        <h3 class="text-white font-semibold text-sm">
                            {item.title}
                        </h3>
                        <p class="mt-1.5 text-xs text-white/60 leading-relaxed">
                            {item.text}
                        </p>
                    </div>
                {/each}
            </div>
        </section>
    {/if}

    <!-- Impact + role -->
    <section class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
            <h2
                class="text-[#FF014F] text-xl md:text-2xl uppercase font-semibold"
            >
                {c.impactTitle}
            </h2>
            <ul class="mt-4 space-y-3 text-white/70 text-sm leading-relaxed">
                {#each c.impact as line}
                    <li class="flex gap-3">
                        <span
                            class="mt-2 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-[#FF014F]"
                        ></span>
                        <span>{line}</span>
                    </li>
                {/each}
            </ul>
        </div>
        <div>
            <h2
                class="text-[#FF014F] text-xl md:text-2xl uppercase font-semibold"
            >
                {c.roleTitle}
            </h2>
            <ul class="mt-4 space-y-3 text-white/70 text-sm leading-relaxed">
                {#each c.role as line}
                    <li class="flex gap-3">
                        <span
                            class="mt-2 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-[#FF014F]"
                        ></span>
                        <span>{line}</span>
                    </li>
                {/each}
            </ul>
        </div>
    </section>

    <!-- Skills -->
    <section class="mt-16">
        <h2 class="text-xs font-semibold tracking-widest uppercase text-white/50">
            {c.skillsTitle}
        </h2>
        <div class="mt-4 flex flex-wrap gap-2">
            {#each c.skills as skill}
                <span
                    class="text-xs px-3 py-1.5 rounded-md bg-white/[0.05] border border-white/10 text-white/70"
                    >{skill}</span
                >
            {/each}
        </div>
    </section>
</article>
