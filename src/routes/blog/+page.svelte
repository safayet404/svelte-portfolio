<script lang="ts">
    import { locale, translations } from "$lib/i18n";
    import { blogs } from "$lib/blogs";
    import { initLocale } from "$lib/i18n";
    import { onMount } from "svelte";

    onMount(() => initLocale());

    $: t = translations[$locale];

    function formatDate(dateStr: string) {
        return new Date(dateStr).toLocaleDateString($locale === "bn" ? "bn-BD" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
</script>

<svelte:head>
    <title>Blog — Safayet</title>
</svelte:head>

<div class="min-h-screen bg-[#050014]">
    <!-- Header -->
    <div class="relative overflow-hidden py-20 border-b border-white/[0.07]">
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-0 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2"></div>
            <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 40px 40px;"></div>
        </div>
        <div class="container mx-auto px-6 relative z-10">
            <a href="/" class="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors duration-200">
                ← {$locale === "bn" ? "হোমে ফিরুন" : "Back to Home"}
            </a>
            <h1 class="text-4xl md:text-5xl font-black text-white">
                {$locale === "bn" ? "ব্লগ" : "Blog"}
                <span class="text-[#FF014F]">.</span>
            </h1>
            <p class="text-white/40 mt-3 text-base">
                {$locale === "bn"
                    ? "ওয়েব ডেভেলপমেন্ট, প্রজেক্ট এবং আরও অনেক কিছু নিয়ে আমার লেখা।"
                    : "Thoughts on web development, projects, and everything in between."}
            </p>
        </div>
    </div>

    <!-- Blog grid -->
    <div class="container mx-auto px-6 py-14">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each blogs as blog, i}
                <a
                    href="/blog/{blog.slug}"
                    class="group relative flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#FF014F]/30 hover:-translate-y-1 transition-all duration-300"
                >
                    <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FF014F]/60 to-transparent"></div>

                    {#if blog.cover}
                        <div class="overflow-hidden h-44">
                            <img
                                src={blog.cover}
                                alt={blog.title}
                                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    {:else}
                        <div class="h-44 bg-gradient-to-br from-[#FF014F]/10 to-transparent flex items-center justify-center">
                            <svg class="w-10 h-10 text-[#FF014F]/30" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                    {/if}

                    <div class="flex flex-col flex-1 p-5 gap-3">
                        <div class="flex flex-wrap gap-1.5">
                            {#each blog.tags as tag}
                                <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FF014F]/10 text-[#FF014F] border border-[#FF014F]/20">{tag}</span>
                            {/each}
                        </div>

                        <h2 class="text-white font-bold text-base leading-snug group-hover:text-[#FF014F] transition-colors duration-200">
                            {$locale === "bn" ? blog.title_bn : blog.title}
                        </h2>

                        <p class="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
                            {$locale === "bn" ? blog.excerpt_bn : blog.excerpt}
                        </p>

                        <div class="flex items-center justify-between mt-auto pt-2 border-t border-white/[0.07]">
                            <span class="text-xs text-white/40">{formatDate(blog.date)}</span>
                            <span class="text-xs text-[#FF014F] font-semibold">{$locale === "bn" ? "পড়ুন" : "Read more"} →</span>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>
