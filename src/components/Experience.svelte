<script lang="ts">
    import { initAOS } from "../aos";
    import { locale } from "$lib/i18n";
    initAOS();

    const content = {
        en: {
            title: "Experience",
            role: "Software Engineer",
            company: "Shabuj Global Education",
            period: "Jan 2025 – Present",
            place: "Dhaka, Bangladesh",
            current: "Current",
            duties: [
                "Build and ship features for the company's internal CRM with Laravel and Vue.js, working directly with the business team to turn requirements into working software.",
                "Diagnose and fix critical production bugs, improving the platform's stability, performance and user experience.",
                "Optimize MySQL schemas and Eloquent queries, and take part in code reviews to keep code quality high across the team.",
            ],
            initiativesTitle: "Key initiatives I proposed and lead",
            proposedLed: "Proposed & led",
            proposedLeading: "Proposed & leading",
            inProgress: "In progress",
            readMore: "What it does & why",
            initiatives: [
                {
                    name: "CAS Shield",
                    subtitle: "AI-powered mock interview system",
                    text: "Prepares students for UK visa credibility interviews: personalised questions from each student's profile, recorded answers, and AI feedback on clarity, accuracy and consistency that a compliance officer reviews and approves. Became a key differentiator for the firm and measurably improved students' visa interview success rates.",
                    tags: ["Laravel", "Vue.js", "LLM", "Speech-to-text", "Human-in-the-loop"],
                    href: "/work/cas-shield",
                    done: true,
                },
                {
                    name: "Nexora",
                    subtitle: "Multi-tenant conversational AI platform",
                    text: "An in-house platform for handling admissions leads across chat, email, WhatsApp and voice: an LLM routing engine with automatic model fallback, RAG knowledge retrieval, a visual workflow builder for AI-agent conversations, a real-time unified inbox, and full tenant data isolation with PostgreSQL Row-Level Security.",
                    tags: ["NestJS", "Next.js", "Prisma", "PostgreSQL + pgvector", "Redis / BullMQ", "Socket.IO", "Twilio", "Turborepo"],
                    href: "/work/nexora",
                    done: false,
                },
            ],
        },
        bn: {
            title: "অভিজ্ঞতা",
            role: "সফটওয়্যার ইঞ্জিনিয়ার",
            company: "সবুজ গ্লোবাল এডুকেশন",
            period: "জানুয়ারি ২০২৫ – বর্তমান",
            place: "ঢাকা, বাংলাদেশ",
            current: "বর্তমান",
            duties: [
                "Laravel আর Vue.js দিয়ে কোম্পানির ইন্টারনাল CRM-এ নতুন ফিচার তৈরি ও চালু করি। বিজনেস টিমের সাথে সরাসরি কাজ করে তাদের চাহিদাকে কার্যকর সফটওয়্যারে রূপ দিই।",
                "প্রোডাকশনের জটিল বাগ খুঁজে বের করে ঠিক করি, যাতে প্ল্যাটফর্মের স্থিতিশীলতা, পারফরম্যান্স আর ইউজার এক্সপেরিয়েন্স ভালো হয়।",
                "MySQL স্কিমা আর Eloquent কুয়েরি অপটিমাইজ করি এবং কোড রিভিউয়ের মাধ্যমে টিমের কোডের মান ধরে রাখি।",
            ],
            initiativesTitle: "আমার প্রস্তাব করা ও নেতৃত্ব দেওয়া উদ্যোগ",
            proposedLed: "প্রস্তাব ও নেতৃত্ব",
            proposedLeading: "প্রস্তাব ও নেতৃত্ব দিচ্ছি",
            inProgress: "চলমান",
            readMore: "কী করে ও কেন",
            initiatives: [
                {
                    name: "CAS Shield",
                    subtitle: "AI-চালিত মক ইন্টারভিউ সিস্টেম",
                    text: "যুক্তরাজ্যের ভিসা ক্রেডিবিলিটি ইন্টারভিউয়ের জন্য শিক্ষার্থীদের প্রস্তুত করে। প্রত্যেক শিক্ষার্থীর প্রোফাইল অনুযায়ী প্রশ্ন, রেকর্ড করা উত্তর, আর উত্তরের স্পষ্টতা, সঠিকতা ও সামঞ্জস্য নিয়ে AI ফিডব্যাক, যা একজন কমপ্লায়েন্স অফিসার যাচাই করে অনুমোদন দেন। এটি প্রতিষ্ঠানের একটি বড় বিশেষত্ব হয়ে উঠেছে এবং শিক্ষার্থীদের ভিসা ইন্টারভিউয়ে সাফল্যের হার দৃশ্যমানভাবে বাড়িয়েছে।",
                    tags: ["Laravel", "Vue.js", "LLM", "Speech-to-text", "Human-in-the-loop"],
                    href: "/work/cas-shield",
                    done: true,
                },
                {
                    name: "Nexora",
                    subtitle: "মাল্টি-টেন্যান্ট কনভারসেশনাল AI প্ল্যাটফর্ম",
                    text: "চ্যাট, ইমেইল, WhatsApp আর ভয়েস কলে আসা ভর্তি-সংক্রান্ত লিড সামলানোর ইন-হাউস প্ল্যাটফর্ম। এতে আছে স্বয়ংক্রিয় মডেল-ফলব্যাকসহ LLM রাউটিং, RAG দিয়ে তথ্য খোঁজা, AI এজেন্টের কথোপকথনের জন্য ভিজ্যুয়াল ওয়ার্কফ্লো বিল্ডার, রিয়েল-টাইম ইউনিফায়েড ইনবক্স, আর PostgreSQL Row-Level Security দিয়ে প্রতিটি টেন্যান্টের ডেটা সম্পূর্ণ আলাদা রাখা।",
                    tags: ["NestJS", "Next.js", "Prisma", "PostgreSQL + pgvector", "Redis / BullMQ", "Socket.IO", "Twilio", "Turborepo"],
                    href: "/work/nexora",
                    done: false,
                },
            ],
        },
    };

    $: c = content[$locale === "bn" ? "bn" : "en"];
</script>

<div class="container mx-auto p-4 mt-20">
    <h1
        class="font-semibold text-[#FF104F] text-2xl text-center md:text-left md:text-3xl uppercase mb-8"
    >
        {c.title}
    </h1>

    <div
        data-aos="fade-up"
        class="relative bg-[#050014] overflow-hidden border border-white/[0.07] rounded-2xl"
    >
        <div class="absolute inset-0 pointer-events-none">
            <div
                class="absolute top-0 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2"
            ></div>
        </div>
        <div
            class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent"
        ></div>

        <div class="relative z-10 p-6 md:p-10">
            <!-- Role -->
            <div class="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <span
                        class="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-red-400/80 bg-red-500/10 border border-red-500/20 rounded-full px-2.5 py-1 w-fit mb-3"
                    >
                        <span
                            class="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"
                        ></span>
                        {c.current}
                    </span>
                    <h2
                        class="text-white font-black text-xl md:text-3xl tracking-tight"
                    >
                        {c.role}
                        <span class="text-white/40 font-medium">·</span>
                        <span class="text-red-500">{c.company}</span>
                    </h2>
                </div>
                <div class="text-left md:text-right text-white/50 text-sm">
                    <p class="font-semibold text-white/70">{c.period}</p>
                    <p>{c.place}</p>
                </div>
            </div>

            <ul class="mt-6 space-y-3 text-sm leading-relaxed text-white/70">
                {#each c.duties as duty}
                    <li class="flex gap-3">
                        <span
                            class="mt-2 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-[#FF014F]"
                        ></span>
                        <span>{duty}</span>
                    </li>
                {/each}
            </ul>

            <!-- Initiatives -->
            <h3
                class="mt-10 mb-5 text-xs font-semibold tracking-widest uppercase text-white/50"
            >
                {c.initiativesTitle}
            </h3>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {#each c.initiatives as item, index}
                    <div
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        class="relative flex flex-col border border-white/[0.07] bg-white/[0.03] rounded-xl p-5 md:p-6 hover:border-red-500/30 transition-all duration-300"
                    >
                        <div
                            class="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                        ></div>

                        <div class="flex flex-wrap items-center gap-2 mb-1">
                            <h4 class="text-white font-bold text-lg">
                                {item.name}
                            </h4>
                            <span
                                class="text-[10px] px-2 py-0.5 rounded-full bg-[#FF014F]/20 text-[#FF014F] border border-[#FF014F]/30 font-semibold"
                            >
                                {item.done ? c.proposedLed : c.proposedLeading}
                            </span>
                            {#if !item.done}
                                <span
                                    class="text-[10px] px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 font-semibold"
                                >
                                    {c.inProgress}
                                </span>
                            {/if}
                        </div>
                        <p
                            class="text-white/40 text-xs uppercase tracking-widest mb-3"
                        >
                            {item.subtitle}
                        </p>
                        <p class="text-sm leading-relaxed text-white/70">
                            {item.text}
                        </p>

                        <div class="mt-4 flex flex-wrap gap-2">
                            {#each item.tags as tag}
                                <span
                                    class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-white/60"
                                    >{tag}</span
                                >
                            {/each}
                        </div>

                        {#if item.href}
                            <a
                                href={item.href}
                                class="mt-5 w-fit border border-[#FF014F]/40 text-[#FF014F] hover:bg-[#FF014F] hover:text-white font-semibold px-5 py-2 rounded-md text-sm transition-all duration-200"
                            >
                                {c.readMore} →
                            </a>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
