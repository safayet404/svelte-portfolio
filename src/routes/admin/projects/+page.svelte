<script lang="ts">
    import { deserialize } from '$app/forms';
    import type { PageData } from './$types';
    export let data: PageData;

    let projects = data.projects ?? [];
    $: projects = data.projects ?? [];

    // Drag and drop to reorder; the new order is saved as soon as it changes.
    let dragIndex: number | null = null;
    let overIndex: number | null = null;
    let saveState: 'idle' | 'saving' | 'saved' | 'error' = 'idle';
    let saveError = '';

    function move(from: number, to: number) {
        if (from === to || to < 0 || to >= projects.length) return;
        const next = [...projects];
        const [item] = next.splice(from, 1);
        next.splice(to, 0, item);
        projects = next.map((p, i) => ({ ...p, display_order: i }));
        saveOrder();
    }

    async function saveOrder() {
        saveState = 'saving';
        const body = new FormData();
        body.set('ids', JSON.stringify(projects.map((p) => String(p.id))));
        try {
            const res = await fetch('?/reorder', { method: 'POST', body, headers: { 'x-sveltekit-action': 'true' } });
            const result = deserialize(await res.text());
            if (result.type === 'success') {
                saveState = 'saved';
                setTimeout(() => saveState === 'saved' && (saveState = 'idle'), 2000);
            } else {
                saveState = 'error';
                saveError = result.type === 'failure' ? String(result.data?.error ?? 'Could not save') : 'Could not save';
            }
        } catch {
            saveState = 'error';
            saveError = 'Network error, order not saved';
        }
    }

    function onDrop(index: number) {
        if (dragIndex !== null) move(dragIndex, index);
        dragIndex = overIndex = null;
    }

    const statusColor: Record<string, string> = {
        completed: 'bg-green-400/20 text-green-400 border-green-400/30',
        'in-progress': 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30',
        archived: 'bg-white/10 text-white/40 border-white/10',
    };
</script>

<svelte:head><title>Projects — Admin</title></svelte:head>

<div class="min-h-screen bg-[#1D232A] text-white">
    <header class="backdrop-blur-xl sticky top-0 z-10 border-b border-white/[0.06]">
        <div class="container mx-auto px-6 py-4 flex items-center justify-between">
            <div>
                <h1 class="text-xl font-black">Projects</h1>
                <p class="text-white/40 text-xs mt-0.5">
                    {projects.length} projects · drag to reorder
                    {#if saveState === 'saving'}<span class="ml-2 text-white/60">Saving…</span>{/if}
                    {#if saveState === 'saved'}<span class="ml-2 text-green-400">Order saved</span>{/if}
                    {#if saveState === 'error'}<span class="ml-2 text-red-400">{saveError}</span>{/if}
                </p>
            </div>
            <div class="flex items-center gap-3">
                <a href="/admin/projects/new"
                    class="px-4 py-2 rounded-lg bg-[#FF014F] text-white text-sm font-bold hover:bg-[#cc0040] transition-colors">
                    + New Project
                </a>
                <a href="/admin" class="text-white/40 hover:text-white text-sm transition-colors">← Blogs</a>
                <a href="/" class="text-white/40 hover:text-white text-sm transition-colors">← Site</a>
                <a href="/admin/logout" class="text-white/40 hover:text-red-400 text-sm transition-colors">Logout</a>
            </div>
        </div>
    </header>

    <main class="container mx-auto px-6 py-10">
        {#if projects.length === 0}
            <div class="text-center py-24">
                <p class="text-white/30 text-lg mb-4">No projects yet.</p>
                <a href="/admin/projects/new"
                    class="px-6 py-3 rounded-xl bg-[#FF014F] text-white font-bold inline-block hover:bg-[#cc0040] transition-colors">
                    Add your first project
                </a>
            </div>
        {:else}
            <div class="grid gap-3" role="list">
                {#each projects as project, index (project.id)}
                    <div
                        role="listitem"
                        draggable="true"
                        on:dragstart={(e) => { dragIndex = index; e.dataTransfer?.setData('text/plain', String(index)); }}
                        on:dragover|preventDefault={() => (overIndex = index)}
                        on:dragleave={() => overIndex === index && (overIndex = null)}
                        on:drop|preventDefault={() => onDrop(index)}
                        on:dragend={() => (dragIndex = overIndex = null)}
                        class="group flex items-center gap-4 border bg-white/[0.03] rounded-xl px-4 py-3 hover:border-white/15 transition-all duration-200 cursor-grab active:cursor-grabbing
                            {overIndex === index && dragIndex !== index ? 'border-[#FF014F]/60' : 'border-white/[0.07]'}
                            {dragIndex === index ? 'opacity-40' : ''}">
                        <!-- Drag handle -->
                        <span class="flex-shrink-0 text-white/25 group-hover:text-white/50 select-none text-lg leading-none" aria-hidden="true">⠿</span>

                        <!-- Cover thumbnail -->
                        <div class="flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden bg-white/5">
                            {#if project.cover_image}
                                <img src={project.cover_image} alt={project.title}
                                    class="w-full h-full object-cover" />
                            {:else}
                                <div class="w-full h-full flex items-center justify-center text-white/20 text-lg">▦</div>
                            {/if}
                        </div>

                        <div class="flex items-center gap-3 min-w-0 flex-1">
                            <span class="flex-shrink-0 w-2 h-2 rounded-full {project.visible ? 'bg-green-400' : 'bg-white/20'}"></span>

                            <div class="min-w-0 flex-1">
                                <div class="flex items-center gap-2">
                                    <h3 class="text-white font-semibold text-sm truncate">{project.title}</h3>
                                    {#if project.featured}
                                        <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#FF014F]/20 text-[#FF014F] border border-[#FF014F]/30 flex-shrink-0">Featured</span>
                                    {/if}
                                </div>
                                <p class="text-white/30 text-xs mt-0.5">
                                    {project.role || '—'}
                                    <span class="mx-1.5">·</span>
                                    Position: {index + 1}
                                </p>
                            </div>
                        </div>

                        <span class="flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full border {statusColor[project.status] ?? statusColor.archived}">
                            {project.status}
                        </span>

                        <div class="flex items-center gap-2 flex-shrink-0">
                            <!-- Buttons for touch screens and keyboards, where dragging doesn't work -->
                            <button type="button" on:click={() => move(index, index - 1)} disabled={index === 0}
                                aria-label="Move {project.title} up"
                                class="text-xs text-white/60 hover:text-white px-2 py-1.5 rounded-lg border border-white/10 hover:border-white/20 disabled:opacity-25 disabled:cursor-not-allowed">↑</button>
                            <button type="button" on:click={() => move(index, index + 1)} disabled={index === projects.length - 1}
                                aria-label="Move {project.title} down"
                                class="text-xs text-white/60 hover:text-white px-2 py-1.5 rounded-lg border border-white/10 hover:border-white/20 disabled:opacity-25 disabled:cursor-not-allowed">↓</button>
                            <a href="/admin/projects/{project.id}/edit"
                                class="text-xs text-white/60 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                                Edit
                            </a>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    </main>
</div>
