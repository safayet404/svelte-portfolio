<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    $: books = data.books ?? [];

    const statusColor: Record<string, string> = {
        'read': 'bg-emerald-400/20 text-emerald-400 border-emerald-400/30',
        'currently-reading': 'bg-blue-400/20 text-blue-400 border-blue-400/30',
        'want-to-read': 'bg-amber-400/20 text-amber-400 border-amber-400/30',
    };

    const statusLabel: Record<string, string> = {
        'read': 'Read',
        'currently-reading': 'Reading',
        'want-to-read': 'Want to Read',
    };
</script>

<svelte:head><title>Books — Admin</title></svelte:head>

<div class="min-h-screen bg-[#1D232A] text-white">
    <header class="backdrop-blur-xl sticky top-0 z-10 border-b border-white/[0.06]">
        <div class="container mx-auto px-6 py-4 flex items-center justify-between">
            <div>
                <h1 class="text-xl font-black">Books</h1>
                <p class="text-white/40 text-xs mt-0.5">{books.length} books</p>
            </div>
            <div class="flex items-center gap-3">
                <a href="/admin/books/new"
                    class="px-4 py-2 rounded-lg bg-[#FF014F] text-white text-sm font-bold hover:bg-[#cc0040] transition-colors">
                    + Add Book
                </a>
                <a href="/admin/projects" class="text-white/40 hover:text-white text-sm transition-colors">Projects</a>
                <a href="/admin" class="text-white/40 hover:text-white text-sm transition-colors">Blogs</a>
                <a href="/" class="text-white/40 hover:text-white text-sm transition-colors">← Site</a>
                <a href="/admin/logout" class="text-white/40 hover:text-red-400 text-sm transition-colors">Logout</a>
            </div>
        </div>
    </header>

    <main class="container mx-auto px-6 py-10">
        {#if books.length === 0}
            <div class="text-center py-24">
                <p class="text-white/30 text-lg mb-4">No books yet.</p>
                <a href="/admin/books/new"
                    class="px-6 py-3 rounded-xl bg-[#FF014F] text-white font-bold inline-block hover:bg-[#cc0040] transition-colors">
                    Add your first book
                </a>
            </div>
        {:else}
            <div class="grid gap-2">
                {#each books as book}
                    <div class="group flex items-center gap-4 border border-white/[0.07] bg-white/[0.03] rounded-xl px-4 py-3 hover:border-white/15 transition-all duration-200">
                        <!-- Cover thumbnail -->
                        <div class="flex-shrink-0 w-10 h-14 rounded-md overflow-hidden bg-white/5 flex items-center justify-center">
                            {#if book.cover_url}
                                <img src={book.cover_url} alt={book.title} class="w-full h-full object-cover" />
                            {:else}
                                <span class="text-white/20 text-lg">📖</span>
                            {/if}
                        </div>

                        <div class="flex items-center gap-3 min-w-0 flex-1">
                            <span class="flex-shrink-0 w-2 h-2 rounded-full {book.visible ? 'bg-green-400' : 'bg-white/20'}"></span>

                            <div class="min-w-0 flex-1">
                                <h3 class="text-white font-semibold text-sm truncate">{book.title}</h3>
                                <p class="text-white/30 text-xs mt-0.5">
                                    {book.author}
                                    {#if book.genre}
                                        <span class="mx-1.5">·</span>{book.genre}
                                    {/if}
                                    {#if book.rating}
                                        <span class="mx-1.5">·</span>
                                        {'★'.repeat(book.rating)}{'☆'.repeat(5 - book.rating)}
                                    {/if}
                                </p>
                            </div>
                        </div>

                        <span class="flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full border {statusColor[book.status] ?? ''}">
                            {statusLabel[book.status] ?? book.status}
                        </span>

                        <a href="/admin/books/{book.id}/edit"
                            class="flex-shrink-0 text-xs text-white/60 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                            Edit
                        </a>
                    </div>
                {/each}
            </div>
        {/if}
    </main>
</div>
