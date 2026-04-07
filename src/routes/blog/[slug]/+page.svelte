<script lang="ts">
    import { locale } from "$lib/i18n";
    import { initLocale } from "$lib/i18n";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    onMount(() => initLocale());

    $: blog = data.blog;

    let copied = false;
    function copyLink() {
        navigator.clipboard.writeText(window.location.href).then(() => {
            copied = true;
            setTimeout(() => (copied = false), 2000);
        });
    }

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

<div class="min-h-screen">
    {#if blog}
        <!-- SSR guaranteed by +page.server.ts —— blog is always defined here -->
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

                <div class="flex items-center gap-4 mt-4">
                    <p class="text-white/40 text-sm">{formatDate(blog.date)}</p>
                    <button
                        on:click={copyLink}
                        class="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-200
                               {copied
                            ? 'border-green-500/40 text-green-400 bg-green-500/10'
                            : 'border-white/10 text-white/40 hover:text-white hover:border-white/20'}"
                    >
                        {#if copied}
                            <svg
                                class="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            Copied!
                        {:else}
                            <svg
                                class="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                />
                            </svg>
                            Copy Link
                        {/if}
                    </button>
                </div>

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
            <div class="blog-content">
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
    {/if}
</div>

<style>
    :global(.blog-content) {
        color: #d1d5db;
        line-height: 1.8;
        font-size: 1rem;
    }
    :global(.blog-content p) {
        margin-bottom: 1.25rem;
    }
    :global(.blog-content h1) {
        font-size: 1.875rem;
        font-weight: 800;
        color: #ff014f !important;
        margin-top: 2rem;
        margin-bottom: 0.75rem;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid rgba(255, 1, 79, 0.15);
    }
    :global(.blog-content h2) {
        font-size: 1.375rem;
        font-weight: 700;
        color: #ff014f !important;
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid rgba(255, 1, 79, 0.15);
    }
    :global(.blog-content h3) {
        font-size: 1.125rem;
        font-weight: 700;
        color: #ff014f !important;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    }
    :global(.blog-content ul) {
        list-style: disc;
        padding-left: 1.5rem;
        margin-bottom: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }
    :global(.blog-content ol) {
        list-style: decimal;
        padding-left: 1.5rem;
        margin-bottom: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }
    :global(.blog-content li) {
        color: #d1d5db;
    }
    :global(.blog-content strong) {
        color: #ffffff;
        font-weight: 700;
    }
    :global(.blog-content h1 strong),
    :global(.blog-content h2 strong),
    :global(.blog-content h3 strong) {
        color: inherit;
    }
    :global(.blog-content em) {
        color: #e5e7eb;
        font-style: italic;
    }
    :global(.blog-content code) {
        background: rgba(255, 255, 255, 0.07);
        color: #ff014f;
        padding: 0.15rem 0.4rem;
        border-radius: 0.25rem;
        font-size: 0.875em;
        font-family: monospace;
    }
    :global(.blog-content pre) {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 0.75rem;
        padding: 1.25rem;
        overflow-x: auto;
        margin-bottom: 1.5rem;
    }
    :global(.blog-content blockquote) {
        border-left: 3px solid rgba(255, 1, 79, 0.5);
        padding-left: 1rem;
        color: rgba(255, 255, 255, 0.5);
        font-style: italic;
        margin: 1.5rem 0;
    }
    :global(.blog-content a) {
        color: #ff014f;
        text-decoration: underline;
        text-underline-offset: 3px;
    }
    :global(.blog-content a:hover) {
        color: #ff3370;
    }
    :global(.blog-content hr) {
        border-color: rgba(255, 255, 255, 0.08);
        margin: 2rem 0;
    }
    :global(.blog-content img) {
        border-radius: 0.75rem;
        width: 100%;
        margin: 1.5rem 0;
    }
</style>
