<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;

    $: blogs = data.blogs ?? [];
</script>

<svelte:head><title>Admin Dashboard</title></svelte:head>

<div class="min-h-screen bg-[#1D232A] text-white">
    <!-- Header -->
    <header class=" backdrop-blur-xl sticky top-0 z-10">
        <div
            class="container mx-auto px-6 py-4 flex items-center justify-between"
        >
            <div>
                <h1 class="text-xl font-black">Admin Panel</h1>
                <p class="text-white/40 text-xs mt-0.5">
                    {blogs.length} blog posts
                </p>
            </div>
            <div class="flex items-center gap-3">
                <a
                    href="/admin/new"
                    class="px-4 py-2 rounded-lg bg-[#FF014F] text-white text-sm font-bold hover:bg-[#cc0040] transition-colors"
                >
                    + New Post
                </a>
                <a
                    href="/admin/projects"
                    class="px-4 py-2 rounded-lg border border-white/10 text-white text-sm font-semibold hover:border-white/20 transition-colors"
                >
                    Projects
                </a>
                <a
                    href="/"
                    class="text-white/40 hover:text-white text-sm transition-colors"
                    >← Site</a
                >
                <a
                    href="/admin/logout"
                    class="text-white/40 hover:text-red-400 text-sm transition-colors"
                    >Logout</a
                >
            </div>
        </div>
    </header>

    <main class="container mx-auto px-6 py-10">
        {#if blogs.length === 0}
            <div class="text-center py-24">
                <p class="text-white/30 text-lg mb-4">No blog posts yet.</p>
                <a
                    href="/admin/new"
                    class="px-6 py-3 rounded-xl bg-[#FF014F] text-white font-bold inline-block hover:bg-[#cc0040] transition-colors"
                >
                    Write your first post
                </a>
            </div>
        {:else}
            <div class="grid gap-3">
                {#each blogs as blog}
                    <div
                        class="group flex items-center justify-between gap-4 border border-white/[0.07] bg-white/[0.03] rounded-xl px-5 py-4 hover:border-white/15 transition-all duration-200"
                    >
                        <div class="flex items-center gap-4 min-w-0">
                            <!-- Published indicator -->
                            <span
                                class="flex-shrink-0 w-2 h-2 rounded-full {blog.published
                                    ? 'bg-green-400'
                                    : 'bg-white/20'}"
                            ></span>

                            <div class="min-w-0">
                                <h3
                                    class="text-white font-semibold text-sm truncate"
                                >
                                    {blog.title}
                                </h3>
                                <p class="text-white/30 text-xs mt-0.5">
                                    <span class="font-mono"
                                        >/blog/{blog.slug}</span
                                    >
                                    <span class="mx-2">·</span>
                                    <span>{blog.date}</span>
                                    {#if blog.tags?.length}
                                        <span class="mx-2">·</span>
                                        <span>{blog.tags.join(", ")}</span>
                                    {/if}
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center gap-2 flex-shrink-0">
                            <a
                                href="/blog/{blog.slug}"
                                target="_blank"
                                class="text-xs text-white/30 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                View ↗
                            </a>
                            <a
                                href="/admin/{blog.slug}/edit"
                                class="text-xs text-white/60 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                            >
                                Edit
                            </a>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    </main>
</div>
