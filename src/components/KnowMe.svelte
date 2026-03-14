<script lang="ts">
    import { initAOS } from "../aos";
    import { locale, translations } from "$lib/i18n";
    initAOS();
    $: t = translations[$locale];
</script>

<div class="container mx-auto p-4 mt-20">
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div data-aos="fade-right">
            <h1 class="text-[#FF014F] text-3xl uppercase">{t.knowme_title}</h1>
            <div class="mt-4 text-white text-sm leading-loose">
                <p>{t.knowme_p1}</p>
                <br />
                <p>{t.knowme_p2}</p>
                <br />
                <p>{t.knowme_p3}</p>
            </div>
        </div>
        <div data-aos="fade-left">
            <img src="/me.png" alt="Safayet" loading="lazy" />
        </div>
    </div>
</div>
