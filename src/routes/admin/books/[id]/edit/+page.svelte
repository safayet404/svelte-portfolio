<script lang="ts">
    import type { PageData, ActionData } from './$types';
    export let data: PageData;
    export let form: ActionData;

    $: book = data.book;
    let rating = book?.rating ?? 0;
    let confirmDelete = false;
</script>

<svelte:head><title>Edit Book — Admin</title></svelte:head>

<div class="min-h-screen bg-[#1D232A] text-white">
    <header class="backdrop-blur-xl sticky top-0 z-10 border-b border-white/[0.06]">
        <div class="container mx-auto px-6 py-4 flex items-center justify-between">
            <div>
                <h1 class="text-xl font-black">Edit Book</h1>
                <p class="text-white/40 text-xs mt-0.5 truncate max-w-xs">{book.title}</p>
            </div>
            <a href="/admin/books" class="text-white/40 hover:text-white text-sm transition-colors">← Back</a>
        </div>
    </header>

    <main class="container mx-auto px-6 py-10 max-w-2xl">
        {#if form?.error}
            <div class="mb-6 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {form.error}
            </div>
        {/if}

        <form method="POST" action="?/update" class="space-y-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <!-- Title -->
                <div class="md:col-span-2">
                    <label class="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                        Book Title <span class="text-[#FF014F]">*</span>
                    </label>
                    <input
                        name="title"
                        type="text"
                        required
                        value={book.title}
                        class="w-full px-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#FF014F]/50 transition-colors"
                    />
                </div>

                <!-- Author -->
                <div class="md:col-span-2">
                    <label class="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                        Author <span class="text-[#FF014F]">*</span>
                    </label>
                    <input
                        name="author"
                        type="text"
                        required
                        value={book.author}
                        class="w-full px-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#FF014F]/50 transition-colors"
                    />
                </div>

                <!-- Status -->
                <div>
                    <label class="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Status</label>
                    <select
                        name="status"
                        class="w-full px-4 py-2.5 bg-[#1D232A] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#FF014F]/50 transition-colors"
                    >
                        <option value="want-to-read" class="bg-[#1D232A] text-white" selected={book.status === 'want-to-read'}>Want to Read</option>
                        <option value="currently-reading" class="bg-[#1D232A] text-white" selected={book.status === 'currently-reading'}>Currently Reading</option>
                        <option value="read" class="bg-[#1D232A] text-white" selected={book.status === 'read'}>Read</option>
                    </select>
                </div>

                <!-- Genre -->
                <div>
                    <label class="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Genre / Category</label>
                    <input
                        name="genre"
                        type="text"
                        value={book.genre}
                        placeholder="e.g. Self-help, Fiction"
                        class="w-full px-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#FF014F]/50 transition-colors"
                    />
                </div>

                <!-- Rating -->
                <div>
                    <label class="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Rating</label>
                    <input type="hidden" name="rating" value={rating || ''} />
                    <div class="flex gap-2 items-center">
                        {#each [1, 2, 3, 4, 5] as star}
                            <button
                                type="button"
                                on:click={() => (rating = rating === star ? 0 : star)}
                                class="text-2xl leading-none transition-colors duration-150
                                    {star <= rating ? 'text-amber-400' : 'text-white/20 hover:text-white/50'}"
                            >★</button>
                        {/each}
                        {#if rating > 0}
                            <span class="text-white/40 text-xs ml-1">{rating}/5</span>
                        {/if}
                    </div>
                </div>

                <!-- Start Date -->
                <div>
                    <label class="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Start Date</label>
                    <input
                        name="start_date"
                        type="date"
                        value={book.start_date ?? ''}
                        class="w-full px-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-lg text-white/70 text-sm focus:outline-none focus:border-[#FF014F]/50 transition-colors"
                    />
                </div>

                <!-- End Date -->
                <div>
                    <label class="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">End Date</label>
                    <input
                        name="end_date"
                        type="date"
                        value={book.end_date ?? ''}
                        class="w-full px-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-lg text-white/70 text-sm focus:outline-none focus:border-[#FF014F]/50 transition-colors"
                    />
                </div>

                <!-- Cover URL -->
                <div class="md:col-span-2">
                    <label class="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Cover Image URL</label>
                    <input
                        name="cover_url"
                        type="url"
                        value={book.cover_url}
                        placeholder="https://..."
                        class="w-full px-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#FF014F]/50 transition-colors"
                    />
                </div>

                <!-- Notes -->
                <div class="md:col-span-2">
                    <label class="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Notes / Thoughts</label>
                    <textarea
                        name="notes"
                        rows="3"
                        class="w-full px-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#FF014F]/50 transition-colors resize-none"
                    >{book.notes}</textarea>
                </div>
            </div>

            <label class="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" name="visible" checked={book.visible} class="w-4 h-4 accent-[#FF014F]" />
                <span class="text-sm text-white/60 group-hover:text-white transition-colors">Visible on public page</span>
            </label>

            <div class="flex items-center gap-3 pt-2">
                <button
                    type="submit"
                    class="px-6 py-2.5 rounded-lg bg-[#FF014F] text-white text-sm font-bold hover:bg-[#cc0040] transition-colors"
                >
                    Save Changes
                </button>
                <a href="/admin/books" class="px-6 py-2.5 rounded-lg border border-white/10 text-white/60 text-sm hover:text-white hover:border-white/20 transition-colors">
                    Cancel
                </a>
            </div>
        </form>

        <!-- Delete section -->
        <div class="mt-12 pt-8 border-t border-white/[0.06]">
            <h3 class="text-sm font-semibold text-white/30 mb-3">Danger Zone</h3>
            {#if !confirmDelete}
                <button
                    on:click={() => (confirmDelete = true)}
                    class="px-4 py-2 rounded-lg border border-red-500/20 text-red-400/60 text-sm hover:border-red-500/40 hover:text-red-400 transition-colors"
                >
                    Delete Book
                </button>
            {:else}
                <div class="flex items-center gap-3">
                    <span class="text-sm text-white/50">Are you sure?</span>
                    <form method="POST" action="?/delete">
                        <button
                            type="submit"
                            class="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 text-sm font-semibold hover:bg-red-500/30 transition-colors"
                        >
                            Yes, Delete
                        </button>
                    </form>
                    <button
                        on:click={() => (confirmDelete = false)}
                        class="text-sm text-white/40 hover:text-white transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            {/if}
        </div>
    </main>
</div>
