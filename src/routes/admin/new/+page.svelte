<script lang="ts">
    import TipTapEditor from '$components/TipTapEditor.svelte';
    import type { ActionData } from './$types';
    export let form: ActionData;

    let title = '';
    let contentEn = '';
    let contentBn = '';
    let activeTab: 'en' | 'bn' = 'en';
    let loading = false;

    function slugify(s: string) {
        return s.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
    }
    $: slug = slugify(title);
</script>

<svelte:head><title>New Post — Admin</title></svelte:head>

<div class="min-h-screen bg-[#050014] text-white">
    <header class="border-b border-white/[0.07] bg-black/40 backdrop-blur-xl sticky top-0 z-10">
        <div class="container mx-auto px-6 py-4 flex items-center justify-between">
            <h1 class="text-lg font-black">New Blog Post</h1>
            <a href="/admin" class="text-white/40 hover:text-white text-sm transition-colors">← Dashboard</a>
        </div>
    </header>

    <main class="container mx-auto px-6 py-10 max-w-4xl">
        {#if form?.error}
            <div class="mb-6 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {form.error}
            </div>
        {/if}

        <form method="POST" on:submit={() => loading = true} class="space-y-6">
            <!-- Hidden fields for TipTap content -->
            <input type="hidden" name="content" value={contentEn} />
            <input type="hidden" name="content_bn" value={contentBn} />

            <!-- Basic fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="field-label">Title (English) *</label>
                    <input type="text" name="title" bind:value={title} required class="field-input" placeholder="My awesome post" />
                </div>
                <div>
                    <label class="field-label">Title (বাংলা)</label>
                    <input type="text" name="title_bn" class="field-input" placeholder="আমার পোস্টের শিরোনাম" />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="field-label">Slug (auto-generated)</label>
                    <input type="text" name="slug" value={slug} class="field-input font-mono text-sm" placeholder="my-awesome-post" />
                </div>
                <div>
                    <label class="field-label">Date</label>
                    <input type="date" name="date" value={new Date().toISOString().split('T')[0]} class="field-input" />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="field-label">Excerpt (English)</label>
                    <textarea name="excerpt" rows="3" class="field-input resize-none" placeholder="Short description for the card..."></textarea>
                </div>
                <div>
                    <label class="field-label">Excerpt (বাংলা)</label>
                    <textarea name="excerpt_bn" rows="3" class="field-input resize-none" placeholder="সংক্ষিপ্ত বিবরণ..."></textarea>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="field-label">Tags (comma-separated)</label>
                    <input type="text" name="tags" class="field-input" placeholder="Linux, SvelteKit, Web Dev" />
                </div>
                <div>
                    <label class="field-label">Cover Image URL</label>
                    <input type="text" name="cover" class="field-input" placeholder="/cover.png or https://..." />
                </div>
            </div>

            <div class="flex items-center gap-3">
                <input type="checkbox" name="published" id="published" checked class="w-4 h-4 accent-[#FF014F]" />
                <label for="published" class="text-sm text-white/60 cursor-pointer">Published (visible on site)</label>
            </div>

            <!-- Content editor with EN/BN tabs -->
            <div>
                <div class="flex gap-2 mb-3">
                    <button type="button" on:click={() => activeTab = 'en'}
                        class="px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors {activeTab === 'en' ? 'bg-[#FF014F] text-white' : 'bg-white/5 text-white/50 hover:text-white'}">
                        Content (EN)
                    </button>
                    <button type="button" on:click={() => activeTab = 'bn'}
                        class="px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors {activeTab === 'bn' ? 'bg-[#FF014F] text-white' : 'bg-white/5 text-white/50 hover:text-white'}">
                        Content (বাংলা)
                    </button>
                </div>

                <div class:hidden={activeTab !== 'en'}>
                    <TipTapEditor bind:content={contentEn} placeholder="Write your English content here..." />
                </div>
                <div class:hidden={activeTab !== 'bn'}>
                    <TipTapEditor bind:content={contentBn} placeholder="বাংলা কন্টেন্ট এখানে লিখুন..." />
                </div>
            </div>

            <div class="flex gap-3 pt-2">
                <button type="submit" disabled={loading}
                    class="px-6 py-3 rounded-xl bg-[#FF014F] text-white font-bold hover:bg-[#cc0040] disabled:opacity-50 transition-colors">
                    {loading ? 'Publishing…' : 'Publish Post'}
                </button>
                <a href="/admin" class="px-6 py-3 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors font-semibold">
                    Cancel
                </a>
            </div>
        </form>
    </main>
</div>

<style>
    :global(.field-label) { @apply block text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5; }
    :global(.field-input) {
        @apply w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/20 outline-none
               focus:border-[#FF014F]/40 focus:bg-white/[0.06] transition-all text-sm;
    }
</style>
