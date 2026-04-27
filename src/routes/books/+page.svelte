<script lang="ts">
    import { locale, initLocale } from '$lib/i18n';
    import { onMount } from 'svelte';
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';

    export let data: PageData;

    onMount(() => initLocale());

    $: books = data.books ?? [];

    type Book = {
        id: string;
        title: string;
        author: string;
        status: string;
        genre: string;
        rating: number | null;
        start_date: string | null;
        end_date: string | null;
        notes: string;
        cover_url: string;
    };

    let searchQuery = '';
    let selectedStatus = 'all';
    let selectedGenre = 'all';
    let selectedRating = 0;

    $: genres = ['all', ...new Set(books.map((b: Book) => b.genre).filter(Boolean))];

    $: filtered = books.filter((b: Book) => {
        const matchSearch =
            !searchQuery ||
            b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            b.author.toLowerCase().includes(searchQuery.toLowerCase());
        const matchStatus = selectedStatus === 'all' || b.status === selectedStatus;
        const matchGenre = selectedGenre === 'all' || b.genre === selectedGenre;
        const matchRating = selectedRating === 0 || b.rating === selectedRating;
        return matchSearch && matchStatus && matchGenre && matchRating;
    });

    $: totalRead = books.filter((b: Book) => b.status === 'read').length;
    $: totalReading = books.filter((b: Book) => b.status === 'currently-reading').length;
    $: totalWant = books.filter((b: Book) => b.status === 'want-to-read').length;

    const statusConfig: Record<string, { label: string; labelBn: string; color: string; dot: string }> = {
        'read': {
            label: 'Read',
            labelBn: 'পড়া হয়েছে',
            color: 'bg-emerald-400/15 text-emerald-400 border-emerald-400/30',
            dot: 'bg-emerald-400',
        },
        'currently-reading': {
            label: 'Reading',
            labelBn: 'পড়ছি',
            color: 'bg-blue-400/15 text-blue-400 border-blue-400/30',
            dot: 'bg-blue-400',
        },
        'want-to-read': {
            label: 'Want to Read',
            labelBn: 'পড়তে চাই',
            color: 'bg-amber-400/15 text-amber-400 border-amber-400/30',
            dot: 'bg-amber-400',
        },
    };

    function formatDate(dateStr: string | null) {
        if (!dateStr) return null;
        return new Date(dateStr).toLocaleDateString(
            $locale === 'bn' ? 'bn-BD' : 'en-US',
            { year: 'numeric', month: 'short' }
        );
    }

    function resetFilters() {
        searchQuery = '';
        selectedStatus = 'all';
        selectedGenre = 'all';
        selectedRating = 0;
    }

    $: hasActiveFilters =
        searchQuery !== '' ||
        selectedStatus !== 'all' ||
        selectedGenre !== 'all' ||
        selectedRating !== 0;
</script>

<svelte:head>
    <title>{$locale === 'bn' ? 'বইয়ের তালিকা' : 'Reading List'} — Safayet</title>
    <meta name="description" content="Books I've read, am reading, or want to read." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://safayet.me/books" />
</svelte:head>

<div class="min-h-screen bg-[#1D232A]">

    <!-- Header -->
    <div class="relative overflow-hidden py-20 border-b border-white/[0.07]">
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-0 right-1/4 w-96 h-96 bg-[#FF014F]/8 rounded-full blur-3xl -translate-y-1/2"></div>
            <div class="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2"></div>
            <div class="absolute inset-0 opacity-[0.025]"
                style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 40px 40px;">
            </div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <a href="/" class="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors duration-200">
                ← {$locale === 'bn' ? 'হোমে ফিরুন' : 'Back to Home'}
            </a>

            <div class="flex flex-col md:flex-row md:items-end gap-8">
                <div class="flex-1">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-xl bg-[#FF014F]/15 border border-[#FF014F]/20 flex items-center justify-center">
                            <svg class="w-5 h-5 text-[#FF014F]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <span class="text-[#FF014F] text-xs font-bold uppercase tracking-widest">
                            {$locale === 'bn' ? 'পাঠ্যতালিকা' : 'Reading List'}
                        </span>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-black text-white">
                        {$locale === 'bn' ? 'বইয়ের তালিকা' : 'My Books'}<span class="text-[#FF014F]">.</span>
                    </h1>
                    <p class="text-white/40 mt-3 text-base max-w-lg">
                        {$locale === 'bn'
                            ? 'আমি যেসব বই পড়েছি, পড়ছি অথবা পড়তে চাই — সেগুলোর একটি ব্যক্তিগত তালিকা।'
                            : "A personal log of books I've read, am currently reading, or want to explore."}
                    </p>
                </div>

                <!-- Stats -->
                <div class="flex gap-4">
                    <button
                        on:click={() => { selectedStatus = selectedStatus === 'read' ? 'all' : 'read'; }}
                        class="flex flex-col items-center px-5 py-3 rounded-xl border transition-all duration-200 cursor-pointer
                            {selectedStatus === 'read'
                                ? 'border-emerald-400/40 bg-emerald-400/10'
                                : 'border-white/[0.07] bg-white/[0.03] hover:border-white/15'}"
                    >
                        <span class="text-2xl font-black text-white">{totalRead}</span>
                        <span class="text-xs text-white/40 mt-0.5">{$locale === 'bn' ? 'পড়েছি' : 'Read'}</span>
                    </button>
                    <button
                        on:click={() => { selectedStatus = selectedStatus === 'currently-reading' ? 'all' : 'currently-reading'; }}
                        class="flex flex-col items-center px-5 py-3 rounded-xl border transition-all duration-200 cursor-pointer
                            {selectedStatus === 'currently-reading'
                                ? 'border-blue-400/40 bg-blue-400/10'
                                : 'border-white/[0.07] bg-white/[0.03] hover:border-white/15'}"
                    >
                        <span class="text-2xl font-black text-white">{totalReading}</span>
                        <span class="text-xs text-white/40 mt-0.5">{$locale === 'bn' ? 'পড়ছি' : 'Reading'}</span>
                    </button>
                    <button
                        on:click={() => { selectedStatus = selectedStatus === 'want-to-read' ? 'all' : 'want-to-read'; }}
                        class="flex flex-col items-center px-5 py-3 rounded-xl border transition-all duration-200 cursor-pointer
                            {selectedStatus === 'want-to-read'
                                ? 'border-amber-400/40 bg-amber-400/10'
                                : 'border-white/[0.07] bg-white/[0.03] hover:border-white/15'}"
                    >
                        <span class="text-2xl font-black text-white">{totalWant}</span>
                        <span class="text-xs text-white/40 mt-0.5">{$locale === 'bn' ? 'পড়তে চাই' : 'Want'}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Filters -->
    <div class="sticky top-[73px] z-30 bg-[#1D232A]/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div class="container mx-auto px-6 py-3">
            <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">

                <!-- Search -->
                <div class="relative flex-1 min-w-0">
                    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input
                        bind:value={searchQuery}
                        type="text"
                        placeholder={$locale === 'bn' ? 'বই বা লেখক খুঁজুন...' : 'Search by title or author...'}
                        class="w-full pl-9 pr-4 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF014F]/40 transition-colors"
                    />
                </div>

                <!-- Genre filter -->
                <div class="flex gap-1.5 flex-wrap">
                    {#each genres as genre}
                        <button
                            on:click={() => (selectedGenre = genre)}
                            class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150
                                {selectedGenre === genre
                                    ? 'bg-[#FF014F] text-white'
                                    : 'bg-white/[0.05] text-white/50 hover:text-white hover:bg-white/[0.08] border border-white/10'}"
                        >
                            {genre === 'all' ? ($locale === 'bn' ? 'সব' : 'All') : genre}
                        </button>
                    {/each}
                </div>

                <!-- Rating filter -->
                <div class="flex items-center gap-1.5">
                    <span class="text-white/30 text-xs">{$locale === 'bn' ? 'রেটিং:' : 'Rating:'}</span>
                    {#each [1, 2, 3, 4, 5] as star}
                        <button
                            on:click={() => (selectedRating = selectedRating === star ? 0 : star)}
                            class="text-lg leading-none transition-colors duration-150
                                {star <= selectedRating ? 'text-amber-400' : 'text-white/20 hover:text-white/40'}"
                        >★</button>
                    {/each}
                </div>

                <!-- Reset -->
                {#if hasActiveFilters}
                    <button
                        on:click={resetFilters}
                        class="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1 flex-shrink-0"
                    >
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        {$locale === 'bn' ? 'ক্লিয়ার' : 'Clear'}
                    </button>
                {/if}
            </div>
        </div>
    </div>

    <!-- Books list -->
    <div class="container mx-auto px-6 py-10">
        {#if books.length === 0}
            <div class="text-center py-32">
                <div class="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-white/20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                </div>
                <p class="text-white/30 text-base">{$locale === 'bn' ? 'এখনো কোনো বই যোগ করা হয়নি।' : 'No books added yet.'}</p>
            </div>
        {:else if filtered.length === 0}
            <div class="text-center py-24">
                <p class="text-white/30 text-base mb-3">{$locale === 'bn' ? 'কোনো ফলাফল পাওয়া যায়নি।' : 'No results found.'}</p>
                <button on:click={resetFilters} class="text-sm text-[#FF014F] hover:underline">
                    {$locale === 'bn' ? 'ফিল্টার রিসেট করুন' : 'Reset filters'}
                </button>
            </div>
        {:else}
            <div class="mb-4 text-white/30 text-sm">
                {filtered.length} {$locale === 'bn' ? 'টি বই' : filtered.length === 1 ? 'book' : 'books'}
                {#if hasActiveFilters}
                    <span class="text-white/20"> ({$locale === 'bn' ? 'ফিল্টার করা' : 'filtered'})</span>
                {/if}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {#each filtered as book (book.id)}
                    <div class="group relative flex flex-col rounded-xl border border-white/[0.08] bg-white/[0.03] hover:border-white/15 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">

                        <!-- Top accent line -->
                        <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FF014F]/50 to-transparent"></div>

                        <div class="flex gap-4 p-5">
                            <!-- Cover -->
                            <div class="flex-shrink-0 w-16 h-22 rounded-lg overflow-hidden bg-white/[0.05] border border-white/[0.07] flex items-center justify-center"
                                style="height: 88px;">
                                {#if book.cover_url}
                                    <img src={book.cover_url} alt={book.title} class="w-full h-full object-cover" />
                                {:else}
                                    <svg class="w-7 h-7 text-white/15" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                {/if}
                            </div>

                            <!-- Info -->
                            <div class="flex-1 min-w-0 flex flex-col gap-1.5">
                                <div class="flex items-start justify-between gap-2">
                                    <h3 class="text-white font-bold text-sm leading-snug line-clamp-2 group-hover:text-[#FF014F] transition-colors duration-200">
                                        {book.title}
                                    </h3>
                                    {#if statusConfig[book.status]}
                                        <form method="POST" action="?/updateStatus" use:enhance class="flex-shrink-0">
                                            <input type="hidden" name="id" value={book.id} />
                                            <input type="hidden" name="status" value={book.status} />
                                            <button
                                                type="submit"
                                                title="Click to change status"
                                                class="text-[10px] font-semibold px-2 py-0.5 rounded-full border cursor-pointer hover:opacity-70 transition-opacity {statusConfig[book.status].color}"
                                            >
                                                {$locale === 'bn' ? statusConfig[book.status].labelBn : statusConfig[book.status].label}
                                            </button>
                                        </form>
                                    {/if}
                                </div>

                                <p class="text-white/50 text-xs">{book.author}</p>

                                <!-- Rating -->
                                {#if book.rating}
                                    <div class="flex gap-0.5">
                                        {#each [1, 2, 3, 4, 5] as star}
                                            <span class="text-sm {star <= book.rating ? 'text-amber-400' : 'text-white/15'}">★</span>
                                        {/each}
                                    </div>
                                {/if}

                                <!-- Genre + dates row -->
                                <div class="flex flex-wrap items-center gap-x-2 gap-y-1 mt-auto">
                                    {#if book.genre}
                                        <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/[0.06] text-white/40 border border-white/10">
                                            {book.genre}
                                        </span>
                                    {/if}
                                    {#if book.start_date || book.end_date}
                                        <span class="text-[10px] text-white/30">
                                            {#if book.start_date}{formatDate(book.start_date)}{/if}
                                            {#if book.start_date && book.end_date} → {/if}
                                            {#if book.end_date}{formatDate(book.end_date)}{/if}
                                        </span>
                                    {/if}
                                </div>
                            </div>
                        </div>

                        <!-- Notes -->
                        {#if book.notes}
                            <div class="mx-5 mb-4 pt-3 border-t border-white/[0.06]">
                                <p class="text-white/30 text-xs leading-relaxed line-clamp-2 italic">
                                    "{book.notes}"
                                </p>
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>
