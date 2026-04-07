<script lang="ts">
    import { locale } from "$lib/i18n";
    import { initLocale } from "$lib/i18n";
    import { blogs } from "$lib/blogs";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    onMount(() => initLocale());

    $: blog = blogs.find((b) => b.slug === $page.params.slug);

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

<svelte:head>
    <title
        >{blog ? ($locale === "bn" ? blog.title_bn : blog.title) : "Blog"} — Safayet</title
    >
</svelte:head>

<div class="min-h-screen bg-[#050014]">
    {#if blog}
        <!-- Hero -->
        <div
            class="relative overflow-hidden py-20 border-b border-white/[0.07]"
        >
            <div class="absolute inset-0 pointer-events-none">
                <div
                    class="absolute top-0 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2"
                ></div>
                <div
                    class="absolute inset-0 opacity-[0.03]"
                    style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 40px 40px;"
                ></div>
            </div>
            <div class="container mx-auto px-6 relative z-10 max-w-3xl">
                <a
                    href="/blog"
                    class="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors duration-200"
                >
                    ← {$locale === "bn" ? "সব ব্লগ" : "All posts"}
                </a>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-4">
                    {#each blog.tags as tag}
                        <span
                            class="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FF014F]/10 text-[#FF014F] border border-[#FF014F]/20"
                            >{tag}</span
                        >
                    {/each}
                </div>

                <h1
                    class="text-3xl md:text-4xl font-black text-white leading-tight"
                >
                    {$locale === "bn" ? blog.title_bn : blog.title}
                </h1>

                <p class="text-white/40 mt-4 text-sm">
                    {formatDate(blog.date)}
                </p>

                {#if blog.cover}
                    <div class="mt-8 rounded-xl overflow-hidden h-64 md:h-80">
                        <img
                            src={blog.cover}
                            alt={blog.title}
                            class="w-full h-full object-cover object-top"
                        />
                    </div>
                {/if}
            </div>
        </div>

        <!-- Content -->
        <div class="container mx-auto px-6 py-14 max-w-3xl">
            <div
                class="prose prose-invert prose-red max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-h2:text-[#FF014F]
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                prose-li:text-gray-300 prose-ul:pl-5 prose-ul:list-disc
                prose-strong:text-white prose-code:text-[#FF014F] prose-code:bg-white/5 prose-code:px-1 prose-code:rounded"
            >
                {@html $locale === "bn" ? blog.content_bn : blog.content}
            </div>

            <!-- Back link -->
            <div class="mt-14 pt-8 border-t border-white/[0.07]">
                <a
                    href="/blog"
                    class="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-white/5 transition-colors duration-200"
                >
                    ← {$locale === "bn" ? "সব ব্লগ দেখুন" : "View all posts"}
                </a>
            </div>
        </div>
    {:else}
        <div class="container mx-auto px-6 py-32 text-center">
            <p class="text-white/40 text-lg">
                {$locale === "bn"
                    ? "ব্লগটি পাওয়া যায়নি।"
                    : "Blog post not found."}
            </p>
            <a
                href="/blog"
                class="mt-4 inline-block text-[#FF014F] hover:underline"
                >{$locale === "bn" ? "সব ব্লগ দেখুন" : "View all posts"}</a
            >
        </div>
    {/if}
</div>
