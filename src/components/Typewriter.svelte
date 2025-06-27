<script lang="ts">
    import { onMount } from "svelte";

    export let text: string = "";
    export let speed: number = 100;
    export let className: string = "";
    export let tag: keyof HTMLElementTagNameMap = "p";

    let displayHTML: string = "";
    let index: number = 0;

    let tempEl: HTMLDivElement | null;

    const type = () => {
        const fullText = tempEl?.innerText ?? "";
        if (index < fullText.length) {
            const visibleText = fullText.slice(0, index + 1);

            // Clone the original HTML structure
            if (!tempEl) return;
            const clone = tempEl.cloneNode(true) as HTMLDivElement;

            const walker = document.createTreeWalker(
                clone,
                NodeFilter.SHOW_TEXT,
            );

            let charsRemaining = visibleText.length;

            while (walker.nextNode()) {
                const node = walker.currentNode as Text;

                if (node.textContent === null) continue;

                if (charsRemaining >= node.textContent.length) {
                    charsRemaining -= node.textContent.length;
                } else {
                    node.textContent = node.textContent.slice(
                        0,
                        charsRemaining,
                    );
                    // Clear any remaining nodes
                    while (walker.nextNode()) {
                        const nextNode = walker.currentNode as Text;
                        if (nextNode.textContent !== null) {
                            nextNode.textContent = "";
                        }
                    }
                    break;
                }
            }

            displayHTML = clone.innerHTML;
            index++;
            setTimeout(type, speed);
        }
    };

    onMount(() => {
        type();
    });
</script>

<!-- Hidden template used for structure -->
<div bind:this={tempEl} style="display: none">
    {@html text}
</div>

<!-- Visible typed HTML -->
<svelte:element this={tag} class={className}>
    {@html displayHTML}
</svelte:element>
