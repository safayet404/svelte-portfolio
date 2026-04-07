<script lang="ts">
    import { locale, translations } from "$lib/i18n";
    import type { Blog } from "$lib/blogs";
    import { initAOS } from "../aos";

    export let blogs: Blog[] = [];

    initAOS();
    $: t = translations[$locale];
    $: latest = blogs.slice(0, 3);

    function formatDate(dateStr: string) {
        return new Date(dateStr).toLocaleDateString(
            $locale === "bn" ? "bn-BD" : "en-US",
            {
                year: "numeric",
                month: "long",
                day: "numeric",
            },
        );
    }
</script>

<section class="container mx-auto px-4 mt-20">
    <div class="flex items-end justify-between mb-8" data-aos="fade-right">
        <h1
            class="font-semibold text-[#FF104F] text-2xl text-center md:text-left md:text-3xl uppercase"
        >
            {t.blog_title}
        </h1>
        <a
            href="/blog"
            class="text-sm text-white/60 hover:text-[#FF014F] transition-colors duration-200 font-medium"
        >
            {t.blog_view_all} →
        </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each latest as blog, i}
            <a
                href="/blog/{blog.slug}"
                class="group relative flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#FF014F]/30 hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
            >
                <!-- Top accent -->
                <div
                    class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FF014F]/60 to-transparent"
                ></div>

                <!-- Cover image or placeholder -->
                {#if blog.cover}
                    <div class="overflow-hidden h-40">
                        <img
                            src={blog.cover}
                            alt={blog.title}
                            class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                {:else}
                    <div
                        class="h-40 bg-gradient-to-br from-[#FF014F]/10 to-transparent flex items-center justify-center"
                    >
                        <svg
                            class="w-10 h-10 text-[#FF014F]/30"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                            />
                        </svg>
                    </div>
                {/if}

                <div class="flex flex-col flex-1 p-5 gap-3">
                    <!-- Tags -->
                    <div class="flex flex-wrap gap-1.5">
                        {#each blog.tags as tag}
                            <span
                                class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FF014F]/10 text-[#FF014F] border border-[#FF014F]/20"
                            >
                                {tag}
                            </span>
                        {/each}
                    </div>

                    <!-- Title -->
                    <h2
                        class="text-white font-bold text-base leading-snug group-hover:text-[#FF014F] transition-colors duration-200"
                    >
                        {$locale === "bn" ? blog.title_bn : blog.title}
                    </h2>

                    <!-- Excerpt -->
                    <p
                        class="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1"
                    >
                        {$locale === "bn" ? blog.excerpt_bn : blog.excerpt}
                    </p>

                    <!-- Date + Read more -->
                    <div
                        class="flex items-center justify-between mt-auto pt-2 border-t border-white/[0.07]"
                    >
                        <span class="text-xs text-white/40"
                            >{formatDate(blog.date)}</span
                        >
                        <span class="text-xs text-[#FF014F] font-semibold"
                            >{t.blog_read_more} →</span
                        >
                    </div>
                </div>
            </a>
        {/each}
    </div>
</section>
