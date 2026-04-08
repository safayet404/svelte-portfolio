<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    $: projects = data.projects ?? [];

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
                <p class="text-white/40 text-xs mt-0.5">{projects.length} projects</p>
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
            <div class="grid gap-3">
                {#each projects as project}
                    <div class="group flex items-center gap-4 border border-white/[0.07] bg-white/[0.03] rounded-xl px-4 py-3 hover:border-white/15 transition-all duration-200">
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
                                    Order: {project.display_order}
                                </p>
                            </div>
                        </div>

                        <span class="flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full border {statusColor[project.status] ?? statusColor.archived}">
                            {project.status}
                        </span>

                        <div class="flex items-center gap-2 flex-shrink-0">
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
