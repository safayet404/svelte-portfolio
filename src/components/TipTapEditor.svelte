<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { Editor } from "@tiptap/core";
    import StarterKit from "@tiptap/starter-kit";
    import Image from "@tiptap/extension-image";
    import Link from "@tiptap/extension-link";
    import Placeholder from "@tiptap/extension-placeholder";

    export let content = "";
    export let placeholder = "Start writing...";

    let element: HTMLDivElement;
    let editor: Editor;
    let imageUrl = "";
    let linkUrl = "";
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
                Link.configure({
                    openOnClick: false,
                    HTMLAttributes: { class: "text-[#FF014F] underline" },
                }),
            ],
            content,
            editorProps: {
                attributes: {
                    class: "focus:outline-none min-h-[300px] text-gray-200 leading-relaxed",
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
        if (!linkUrl) {
            editor.chain().focus().unsetLink().run();
        } else {
            editor.chain().focus().setLink({ href: linkUrl }).run();
        }
        linkUrl = "";
        showLinkInput = false;
    }

    function insertImage() {
        if (imageUrl) {
            editor.chain().focus().setImage({ src: imageUrl }).run();
        }
        imageUrl = "";
        showImageInput = false;
    }

    type BtnProps = {
        label: string;
        action: () => void;
        active?: boolean;
        title?: string;
    };
    function btn(
        label: string,
        action: () => void,
        active = false,
        title = label,
    ): BtnProps {
        return { label, action, active, title };
    }

    const headingLevels: Array<1 | 2 | 3> = [1, 2, 3];
</script>

<div class="border border-white/10 rounded-xl overflow-hidden bg-[#1D232A] flex flex-col" style="max-height: 600px;">
    <!-- Toolbar -->
    <div
        class="flex-shrink-0 flex flex-wrap items-center gap-1 p-2 border-b border-white/10 bg-[#1D232A] z-10"
    >
        <!-- History -->
        <button
            type="button"
            title="Undo"
            on:click={() => editor?.chain().focus().undo().run()}
            class="toolbar-btn">↩</button
        >
        <button
            type="button"
            title="Redo"
            on:click={() => editor?.chain().focus().redo().run()}
            class="toolbar-btn">↪</button
        >

        <div class="w-px h-5 bg-white/10 mx-1"></div>

        <!-- Headings -->
        {#each headingLevels as level}
            <button
                type="button"
                title="Heading {level}"
                on:click={() =>
                    editor?.chain().focus().toggleHeading({ level }).run()}
                class="toolbar-btn {isActive('heading', { level })
                    ? 'active'
                    : ''}"
            >
                H{level}
            </button>
        {/each}

        <div class="w-px h-5 bg-white/10 mx-1"></div>

        <!-- Inline formatting -->
        <button
            type="button"
            title="Bold"
            on:click={() => editor?.chain().focus().toggleBold().run()}
            class="toolbar-btn font-bold {isActive('bold') ? 'active' : ''}"
            >B</button
        >
        <button
            type="button"
            title="Italic"
            on:click={() => editor?.chain().focus().toggleItalic().run()}
            class="toolbar-btn italic {isActive('italic') ? 'active' : ''}"
            >I</button
        >
        <button
            type="button"
            title="Strikethrough"
            on:click={() => editor?.chain().focus().toggleStrike().run()}
            class="toolbar-btn line-through {isActive('strike')
                ? 'active'
                : ''}">S</button
        >
        <button
            type="button"
            title="Inline code"
            on:click={() => editor?.chain().focus().toggleCode().run()}
            class="toolbar-btn font-mono {isActive('code') ? 'active' : ''}"
            >{"</>"}</button
        >

        <div class="w-px h-5 bg-white/10 mx-1"></div>

        <!-- Lists -->
        <button
            type="button"
            title="Bullet list"
            on:click={() => editor?.chain().focus().toggleBulletList().run()}
            class="toolbar-btn {isActive('bulletList') ? 'active' : ''}"
            >• List</button
        >
        <button
            type="button"
            title="Ordered list"
            on:click={() => editor?.chain().focus().toggleOrderedList().run()}
            class="toolbar-btn {isActive('orderedList') ? 'active' : ''}"
            >1. List</button
        >
        <button
            type="button"
            title="Blockquote"
            on:click={() => editor?.chain().focus().toggleBlockquote().run()}
            class="toolbar-btn {isActive('blockquote') ? 'active' : ''}"
            >❝</button
        >

        <div class="w-px h-5 bg-white/10 mx-1"></div>

        <!-- Link -->
        <button
            type="button"
            title="Link"
            on:click={() => {
                showLinkInput = !showLinkInput;
                showImageInput = false;
            }}
            class="toolbar-btn {isActive('link') || showLinkInput
                ? 'active'
                : ''}">🔗</button
        >

        <!-- Image -->
        <button
            type="button"
            title="Image"
            on:click={() => {
                showImageInput = !showImageInput;
                showLinkInput = false;
            }}
            class="toolbar-btn {showImageInput ? 'active' : ''}">🖼</button
        >

        <div class="w-px h-5 bg-white/10 mx-1"></div>

        <!-- HR -->
        <button
            type="button"
            title="Horizontal rule"
            on:click={() => editor?.chain().focus().setHorizontalRule().run()}
            class="toolbar-btn">—</button
        >
    </div>

    <!-- Link input -->
    {#if showLinkInput}
        <div
            class="flex-shrink-0 flex items-center gap-2 p-2 border-b border-white/10 bg-white/[0.02]"
        >
            <input
                bind:value={linkUrl}
                placeholder="https://example.com"
                type="url"
                class="flex-1 bg-white/5 border border-white/10 rounded px-3 py-1 text-sm text-white placeholder-white/30 outline-none focus:border-[#FF014F]/50"
            />
            <button
                type="button"
                on:click={setLink}
                class="text-xs px-3 py-1 rounded bg-[#FF014F] text-white font-semibold"
                >Set</button
            >
            <button
                type="button"
                on:click={() => (showLinkInput = false)}
                class="text-xs text-white/40 hover:text-white">✕</button
            >
        </div>
    {/if}

    <!-- Image input -->
    {#if showImageInput}
        <div
            class="flex-shrink-0 flex items-center gap-2 p-2 border-b border-white/10 bg-white/[0.02]"
        >
            <input
                bind:value={imageUrl}
                placeholder="Image URL or /static path"
                type="url"
                class="flex-1 bg-white/5 border border-white/10 rounded px-3 py-1 text-sm text-white placeholder-white/30 outline-none focus:border-[#FF014F]/50"
            />
            <button
                type="button"
                on:click={insertImage}
                class="text-xs px-3 py-1 rounded bg-[#FF014F] text-white font-semibold"
                >Insert</button
            >
            <button
                type="button"
                on:click={() => (showImageInput = false)}
                class="text-xs text-white/40 hover:text-white">✕</button
            >
        </div>
    {/if}

    <!-- Editor area -->
    <div bind:this={element} class="p-5 min-h-[300px] flex-1 overflow-y-auto"></div>
</div>

<style>
    :global(.toolbar-btn) {
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.6);
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        transition:
            color 150ms,
            background-color 150ms;
    }
    :global(.toolbar-btn:hover) {
        color: #ffffff;
        background-color: rgba(255, 255, 255, 0.1);
    }
    :global(.toolbar-btn.active) {
        color: #ff014f;
        background-color: rgba(255, 1, 79, 0.1);
    }
    :global(.tiptap p.is-editor-empty:first-child::before) {
        content: attr(data-placeholder);
        color: rgba(255, 255, 255, 0.25);
        float: left;
        height: 0;
        pointer-events: none;
    }
    :global(.tiptap h2) {
        font-size: 1.25rem;
        font-weight: 700;
        color: #ff014f;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    }
    :global(.tiptap h3) {
        font-size: 1.125rem;
        font-weight: 700;
        color: #ffffff;
        margin-top: 1rem;
        margin-bottom: 0.25rem;
    }
    :global(.tiptap ul) {
        list-style: disc;
        padding-left: 1.25rem;
    }
    :global(.tiptap ul li + li),
    :global(.tiptap ol li + li) {
        margin-top: 0.25rem;
    }
    :global(.tiptap ol) {
        list-style: decimal;
        padding-left: 1.25rem;
    }
    :global(.tiptap blockquote) {
        border-left: 4px solid rgba(255, 1, 79, 0.4);
        padding-left: 1rem;
        font-style: italic;
        color: rgba(255, 255, 255, 0.6);
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    :global(.tiptap code) {
        background-color: rgba(255, 255, 255, 0.1);
        color: #ff014f;
        padding: 0.125rem 0.25rem;
        border-radius: 0.25rem;
        font-size: 0.875em;
        font-family: monospace;
    }
    :global(.tiptap hr) {
        border-color: rgba(255, 255, 255, 0.1);
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
    :global(.tiptap a) {
        color: #ff014f;
        text-decoration: underline;
    }
</style>
