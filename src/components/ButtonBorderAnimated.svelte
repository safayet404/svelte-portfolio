<script lang="ts">
    const { text, className = "" } = $props();
</script>

<!-- From Uiverse.io by MuhammadHasann -->
<button
    class={`${className}  button bg-gradient-to-r from-[#A011DF] to-[#5813B7] px-4 py-3 md:px-8 md:py-4`}
>
    <div class="dots_border"></div>
    <div class="text_button text-white md:font-medium">
        <p class="flex items-center gap-x-2">
            {text}
        </p>
    </div>
</button>

<style>
    /* From Uiverse.io by MuhammadHasann */
    .button {
        --black-700: hsla(0 0% 12% / 1);
        --border_radius: 12px;
        --transtion: 0.3s ease-in-out;
        --offset: 2px;

        cursor: pointer;
        position: relative;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        transform-origin: center;

        background-color: transparent;

        border: 3px solid #9f11de;
        border-radius: var(--border_radius);
        transform: scale(calc(1 + (var(--active, 0) * 0.1)));

        transition: transform var(--transtion);
    }

    .button::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 100%;
        height: 100%;
        /* background-color: var(--black-700); */
        background-image: linear-gradient(to right, #a011df, #5813b7);

        border-radius: var(--border_radius);
        /* box-shadow:
			inset 0 0.5px hsl(0, 0%, 100%),
			inset 0 -1px 2px 0 hsl(0, 0%, 0%),
			0px 4px 10px -4px hsla(0 0% 0% / calc(1 - var(--active, 0))),
			0 0 0 calc(var(--active, 0) * 0.375rem) hsl(260 97% 50% / 0.75); */

        transition: all var(--transtion);
        z-index: 0;
    }

    .button::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 100%;
        height: 100%;
        background-color: hsla(260 97% 61% / 0.75);
        background-image: radial-gradient(
                at 51% 89%,
                hsla(266, 45%, 74%, 1) 0px,
                transparent 50%
            ),
            radial-gradient(
                at 100% 100%,
                hsla(266, 36%, 60%, 1) 0px,
                transparent 50%
            ),
            radial-gradient(
                at 22% 91%,
                hsla(266, 36%, 60%, 1) 0px,
                transparent 50%
            );
        background-position: top;

        opacity: var(--active, 0);
        border-radius: var(--border_radius);
        transition: opacity var(--transtion);
        z-index: 2;
    }

    .button:is(:hover, :focus-visible) {
        --active: 0.3;
    }

    .button .dots_border {
        --size_border: calc(100% + 2px);

        overflow: hidden;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: var(--size_border);
        height: var(--size_border);
        background-color: transparent;

        border-radius: var(--border_radius);
        z-index: -10;
    }

    .button .dots_border::before {
        content: "";
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: left;
        transform: rotate(0deg);

        width: 100%;
        height: 2rem;
        background-color: white;

        mask: linear-gradient(transparent 0%, white 120%);
        animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes path {
        0%,
        34%,
        71%,
        100% {
            transform: scale(1);
        }
        17% {
            transform: scale(var(--scale_path_1, 1));
        }
        49% {
            transform: scale(var(--scale_path_2, 1));
        }
        83% {
            transform: scale(var(--scale_path_3, 1));
        }
    }

    .button .text_button {
        position: relative;
        z-index: 10;

        background-image: linear-gradient(
            90deg,
            hsla(0 0% 100% / 1) 0%,
            hsla(0 0% 100% / var(--active, 0)) 120%
        );
        background-clip: text;
        color: white;
    }

    p {
        color: white;
    }
</style>
