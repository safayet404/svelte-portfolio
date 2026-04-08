<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData, ActionData } from './$types';
    export let data: PageData;
    export let form: ActionData;

    const project = data.project;
    let imagePreview = project.cover_image ?? '';

    function handleImagePick(e: Event) {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) imagePreview = URL.createObjectURL(file);
    }
</script>

<svelte:head><title>Edit {project.title} — Admin</title></svelte:head>

<div class="min-h-screen bg-[#1D232A] text-white">
    <header class="border-b border-white/[0.06] sticky top-0 bg-[#1D232A] z-10">
        <div class="container mx-auto px-6 py-4 flex items-center justify-between">
            <h1 class="text-xl font-black truncate">Edit: {project.title}</h1>
            <a href="/admin/projects" class="text-white/40 hover:text-white text-sm transition-colors flex-shrink-0 ml-4">← Projects</a>
        </div>
    </header>

    <main class="container mx-auto px-6 py-10 max-w-3xl">
        {#if form?.error}
            <div class="mb-6 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {form.error}
            </div>
        {/if}

        <form method="POST" action="?/update" enctype="multipart/form-data" use:enhance class="space-y-6">
            <input type="hidden" name="existing_cover" value={project.cover_image} />

            <!-- Cover image upload -->
            <div>
                <label class="field-label">Cover Image</label>
                <div class="mt-2 flex items-start gap-4">
                    <div class="w-40 h-28 rounded-xl overflow-hidden border border-white/10 bg-white/5 flex-shrink-0 flex items-center justify-center">
                        {#if imagePreview}
                            <img src={imagePreview} alt="Preview" class="w-full h-full object-cover" />
                        {:else}
                            <span class="text-white/20 text-3xl">▦</span>
                        {/if}
                    </div>
                    <div class="flex-1">
                        <input type="file" name="cover_image" accept="image/*"
                            on:change={handleImagePick}
                            class="block w-full text-sm text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#FF014F] file:text-white file:text-sm file:font-semibold hover:file:bg-[#cc0040] cursor-pointer" />
                        <p class="text-white/30 text-xs mt-2">Leave empty to keep existing image</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="field-label">Title (English) *</label>
                    <input type="text" name="title" required value={project.title}
                        class="field-input" />
                </div>
                <div>
                    <label class="field-label">Title (বাংলা)</label>
                    <input type="text" name="title_bn" value={project.title_bn}
                        class="field-input" />
                </div>
            </div>

            <div>
                <label class="field-label">Description (English)</label>
                <textarea name="description" rows="3" class="field-input resize-none">{project.description}</textarea>
            </div>

            <div>
                <label class="field-label">Description (বাংলা)</label>
                <textarea name="description_bn" rows="3" class="field-input resize-none">{project.description_bn}</textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="field-label">Tech Stack</label>
                    <input type="text" name="tech_stack" value={project.tech_stack?.join(', ')}
                        class="field-input" />
                    <p class="text-white/30 text-xs mt-1">Comma separated</p>
                </div>
                <div>
                    <label class="field-label">Your Role</label>
                    <input type="text" name="role" value={project.role}
                        class="field-input" />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="field-label">Status</label>
                    <select name="status" class="field-input">
                        <option value="completed" selected={project.status === 'completed'}>Completed</option>
                        <option value="in-progress" selected={project.status === 'in-progress'}>In Progress</option>
                        <option value="archived" selected={project.status === 'archived'}>Archived</option>
                    </select>
                </div>
                <div>
                    <label class="field-label">Live URL</label>
                    <input type="url" name="live_url" value={project.live_url}
                        class="field-input" />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="field-label">GitHub (Frontend/Client)</label>
                    <input type="url" name="github_client_url" value={project.github_client_url}
                        class="field-input" />
                </div>
                <div>
                    <label class="field-label">GitHub (Backend/Server)</label>
                    <input type="url" name="github_server_url" value={project.github_server_url}
                        class="field-input" />
                    <p class="text-white/30 text-xs mt-1">Leave empty if no backend repo</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div>
                    <label class="field-label">Display Order</label>
                    <input type="number" name="display_order" value={project.display_order} min="0"
                        class="field-input" />
                    <p class="text-white/30 text-xs mt-1">Lower = shown first</p>
                </div>
                <div class="flex items-center gap-6 pt-5">
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" name="featured" checked={project.featured} class="w-4 h-4 accent-[#FF014F]" />
                        <span class="text-sm text-white/70">Featured</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" name="visible" checked={project.visible} class="w-4 h-4 accent-[#FF014F]" />
                        <span class="text-sm text-white/70">Visible</span>
                    </label>
                </div>
            </div>

            <div class="flex justify-between pt-4 border-t border-white/[0.06]">
                <!-- Delete -->
                <form id="delete-form" method="POST" action="?/delete" use:enhance></form>
                <button type="submit" form="delete-form"
                    class="px-6 py-2.5 rounded-xl text-red-400 border border-red-500/20 hover:bg-red-500/10 text-sm font-semibold transition-colors"
                    onclick="return confirm('Delete this project? This cannot be undone.')">
                    Delete Project
                </button>

                <button type="submit"
                    class="px-8 py-2.5 rounded-xl bg-[#FF014F] text-white font-bold hover:bg-[#cc0040] transition-colors">
                    Save Changes
                </button>
            </div>
        </form>
    </main>
</div>

<style>
    :global(.field-label) {
        display: block;
        font-size: 0.75rem;
        font-weight: 600;
        color: rgba(255,255,255,0.5);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.375rem;
    }
    :global(.field-input) {
        width: 100%;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 0.625rem;
        padding: 0.625rem 0.875rem;
        font-size: 0.875rem;
        color: #ffffff;
        outline: none;
        transition: border-color 150ms;
    }
    :global(.field-input:focus) {
        border-color: rgba(255,1,79,0.5);
    }
    :global(.field-input option) {
        background: #1D232A;
    }
</style>
