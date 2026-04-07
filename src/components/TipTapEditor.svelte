<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { Editor } from '@tiptap/core';
    import StarterKit from '@tiptap/starter-kit';
    import Image from '@tiptap/extension-image';
    import Link from '@tiptap/extension-link';
    import Placeholder from '@tiptap/extension-placeholder';

    export let content = '';
    export let placeholder = 'Start writing...';

    let element: HTMLDivElement;
    let editor: Editor;
    let imageUrl = '';
    let linkUrl = '';
    let showLinkInput = false;
    let showImageInput = false;

    $: if (editor && !editor.isDestroyed) {
        // Reflect external content changes (e.g. switching EN/BN tab)
    }

    function isActive(name: string, attrs: Record<string, unknown> = {}) {
        return editor?.isActive(name, attrs) ?? false;
    }

    onMount(() => {
        editor = new Editor({
            element,
            extensions: [
                StarterKit.configure({ codeBlock: false }),
                Placeholder.configure({ placeholder }),
                Image.configure({ inline: false, allowBase64: true }),
                Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-[#FF014F] underline' } }),
            ],
            content,
            editorProps: {
                attributes: {
                    class: 'prose prose-invert max-w-none focus:outline-none min-h-[300px] text-gray-200 leading-relaxed',
                },
            },
            onUpdate({ editor: e }) {
                content = e.getHTML();
            },
        });
    });

    onDestroy(() => {
        editor?.destroy();
    });

    function setLink() {
        if (!linkUrl) { editor.chain().focus().unsetLink().run(); }
        else { editor.chain().focus().setLink({ href: linkUrl }).run(); }
        linkUrl = '';
        showLinkInput = false;
    }

    function insertImage() {
        if (imageUrl) { editor.chain().focus().setImage({ src: imageUrl }).run(); }
        imageUrl = '';
        showImageInput = false;
    }

    type BtnProps = { label: string; action: () => void; active?: boolean; title?: string };
    function btn(label: string, action: () => void, active = false, title = label): BtnProps {
        return { label, action, active, title };
    }
</script>

<div class="border border-white/10 rounded-xl overflow-hidden bg-[#0a0a1a]">
    <!-- Toolbar -->
    <div class="flex flex-wrap items-center gap-1 p-2 border-b border-white/10 bg-white/[0.03]">
        <!-- History -->
        <button type="button" title="Undo" on:click={() => editor?.chain().focus().undo().run()}
            class="toolbar-btn">↩</button>
        <button type="button" title="Redo" on:click={() => editor?.chain().focus().redo().run()}
            class="toolbar-btn">↪</button>

        <div class="w-px h-5 bg-white/10 mx-1"></div>

        <!-- Headings -->
        {#each [1, 2, 3] as level}
            <button type="button" title="Heading {level}"
                on:click={() => editor?.chain().focus().toggleHeading({ level }).run()}
                class="toolbar-btn {isActive('heading', { level }) ? 'active' : ''}">
                H{level}
            </button>
        {/each}

        <div class="w-px h-5 bg-white/10 mx-1"></div>

        <!-- Inline formatting -->
        <button type="button" title="Bold" on:click={() => editor?.chain().focus().toggleBold().run()}
            class="toolbar-btn font-bold {isActive('bold') ? 'active' : ''}">B</button>
        <button type="button" title="Italic" on:click={() => editor?.chain().focus().toggleItalic().run()}
            class="toolbar-btn italic {isActive('italic') ? 'active' : ''}">I</button>
        <button type="button" title="Strikethrough" on:click={() => editor?.chain().focus().toggleStrike().run()}
            class="toolbar-btn line-through {isActive('strike') ? 'active' : ''}">S</button>
        <button type="button" title="Inline code" on:click={() => editor?.chain().focus().toggleCode().run()}
            class="toolbar-btn font-mono {isActive('code') ? 'active' : ''}">{'</>'}</button>

        <div class="w-px h-5 bg-white/10 mx-1"></div>

        <!-- Lists -->
        <button type="button" title="Bullet list" on:click={() => editor?.chain().focus().toggleBulletList().run()}
            class="toolbar-btn {isActive('bulletList') ? 'active' : ''}">• List</button>
        <button type="button" title="Ordered list" on:click={() => editor?.chain().focus().toggleOrderedList().run()}
            class="toolbar-btn {isActive('orderedList') ? 'active' : ''}">1. List</button>
        <button type="button" title="Blockquote" on:click={() => editor?.chain().focus().toggleBlockquote().run()}
            class="toolbar-btn {isActive('blockquote') ? 'active' : ''}">❝</button>

        <div class="w-px h-5 bg-white/10 mx-1"></div>

        <!-- Link -->
        <button type="button" title="Link" on:click={() => { showLinkInput = !showLinkInput; showImageInput = false; }}
            class="toolbar-btn {isActive('link') || showLinkInput ? 'active' : ''}">🔗</button>

        <!-- Image -->
        <button type="button" title="Image" on:click={() => { showImageInput = !showImageInput; showLinkInput = false; }}
            class="toolbar-btn {showImageInput ? 'active' : ''}">🖼</button>

        <div class="w-px h-5 bg-white/10 mx-1"></div>

        <!-- HR -->
        <button type="button" title="Horizontal rule" on:click={() => editor?.chain().focus().setHorizontalRule().run()}
            class="toolbar-btn">—</button>
    </div>

    <!-- Link input -->
    {#if showLinkInput}
        <div class="flex items-center gap-2 p-2 border-b border-white/10 bg-white/[0.02]">
            <input bind:value={linkUrl} placeholder="https://example.com" type="url"
                class="flex-1 bg-white/5 border border-white/10 rounded px-3 py-1 text-sm text-white placeholder-white/30 outline-none focus:border-[#FF014F]/50" />
            <button type="button" on:click={setLink} class="text-xs px-3 py-1 rounded bg-[#FF014F] text-white font-semibold">Set</button>
            <button type="button" on:click={() => showLinkInput = false} class="text-xs text-white/40 hover:text-white">✕</button>
        </div>
    {/if}

    <!-- Image input -->
    {#if showImageInput}
        <div class="flex items-center gap-2 p-2 border-b border-white/10 bg-white/[0.02]">
            <input bind:value={imageUrl} placeholder="Image URL or /static path" type="url"
                class="flex-1 bg-white/5 border border-white/10 rounded px-3 py-1 text-sm text-white placeholder-white/30 outline-none focus:border-[#FF014F]/50" />
            <button type="button" on:click={insertImage} class="text-xs px-3 py-1 rounded bg-[#FF014F] text-white font-semibold">Insert</button>
            <button type="button" on:click={() => showImageInput = false} class="text-xs text-white/40 hover:text-white">✕</button>
        </div>
    {/if}

    <!-- Editor area -->
    <div bind:this={element} class="p-5 min-h-[300px]"></div>
</div>

<style>
    :global(.toolbar-btn) {
        @apply text-xs text-white/60 hover:text-white px-2 py-1 rounded transition-colors duration-150 hover:bg-white/10;
    }
    :global(.toolbar-btn.active) {
        @apply text-[#FF014F] bg-[#FF014F]/10;
    }
    :global(.tiptap p.is-editor-empty:first-child::before) {
        content: attr(data-placeholder);
        @apply text-white/25 float-left h-0 pointer-events-none;
    }
    :global(.tiptap h2) { @apply text-xl font-bold text-[#FF014F] mt-6 mb-2; }
    :global(.tiptap h3) { @apply text-lg font-bold text-white mt-4 mb-1; }
    :global(.tiptap ul) { @apply list-disc pl-5 space-y-1; }
    :global(.tiptap ol) { @apply list-decimal pl-5 space-y-1; }
    :global(.tiptap blockquote) { @apply border-l-4 border-[#FF014F]/40 pl-4 italic text-white/60 my-4; }
    :global(.tiptap code) { @apply bg-white/10 text-[#FF014F] px-1 py-0.5 rounded text-sm font-mono; }
    :global(.tiptap hr) { @apply border-white/10 my-6; }
    :global(.tiptap a) { @apply text-[#FF014F] underline; }
</style>
