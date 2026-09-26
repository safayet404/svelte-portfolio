<script lang="ts">
    import CaseStudy from "../../../components/CaseStudy.svelte";

    const content = {
        en: {
            back: "← Back to experience",
            badge: "Proposed & led · Shabuj Global Education",
            title: "CAS Shield",
            subtitle: "An AI-powered mock interview system that gets students ready for UK visa credibility interviews.",
            note: "Built for the company's internal platform, so implementation details stay private. This page covers what it does and why it was built the way it was.",
            problemTitle: "The problem",
            problem: [
                "Before a UK university issues a CAS (Confirmation of Acceptance for Studies), it has to be satisfied that the student is genuine, and UK Visas and Immigration can interview any student before granting a visa. A student who can't explain in their own words why they chose the course, how their fees are paid, or what they plan to do afterwards is a red flag, however strong their paper application looks.",
                "Interview readiness used to be checked informally: a phone call, a checklist, or nothing. That was inconsistent, because two students with the same weak points could be treated differently, and it left no record of the due diligence that had been done.",
            ],
            flowTitle: "How it works",
            flow: [
                { title: "Set up", text: "A compliance officer creates an interview for a student's application. Questions come from a vetted question bank and are personalised with the student's own details, such as university, course and fees." },
                { title: "Interview", text: "The student takes it online like a real credibility interview: a device check, preparation time for each question, then a timed, recorded answer." },
                { title: "Analysis", text: "Each answer is transcribed and assessed by AI against clear criteria: is it specific, accurate and clear? Answers are also checked against each other, so contradictions across the session are caught." },
                { title: "Human review", text: "A compliance officer watches each recording next to the AI's findings, edits the feedback where needed, and approves every question." },
                { title: "Report", text: "The student receives a clear report with strengths, weaknesses and a coaching tip for each question." },
            ],
            whyTitle: "Key decisions, and why",
            why: [
                { title: "A human always has the final say", text: "AI is fast and good at spotting contradictions in a long transcript, but it can miss context, like a nervous but well-prepared student. Nothing reaches a student until an officer has reviewed it." },
                { title: "A vetted question bank, not free-form AI questions", text: "Question wording and grading criteria are compliance-sensitive, so they are version-controlled and reviewed like code. The AI only selects and personalises questions; it never invents them." },
                { title: "Consistency across answers, not just single answers", text: "The real red flag is a story that doesn't hold together, like a funding source that changes between answers. Some questions are graded on their own; others are cross-checked against the whole session." },
                { title: "No silent overrides", text: "Officers can reword the feedback but can't flip the underlying verdict without changing the evidence. That keeps every judgement honest and explainable." },
                { title: "Everything is auditable", text: "Who created the interview, who wrote the questions, who reviewed each answer and who approved the report are all recorded. If a case is ever challenged, the due diligence is on file." },
            ],
            impactTitle: "Impact",
            impact: [
                "Replaced an informal, inconsistent readiness check with a structured, repeatable and auditable process.",
                "Became a key differentiator for the firm.",
                "Measurably improved students' visa interview success rates.",
            ],
            roleTitle: "My role",
            role: [
                "Identified the problem and proposed the solution.",
                "Led design and development end to end, from the question bank and grading rules to the student and officer experiences.",
                "Wrote a complete technical and functional reference so other engineers and operations staff can maintain and use it.",
            ],
            skillsTitle: "Skills involved",
            skills: ["Product thinking", "LLM integration", "Speech-to-text", "Human-in-the-loop design", "Background job pipelines", "Audit logging", "Laravel", "Vue.js"],
        },
        bn: {
            back: "← অভিজ্ঞতায় ফিরে যান",
            badge: "প্রস্তাব ও নেতৃত্ব · সবুজ গ্লোবাল এডুকেশন",
            title: "CAS Shield",
            subtitle: "AI-চালিত মক ইন্টারভিউ সিস্টেম, যা শিক্ষার্থীদের যুক্তরাজ্যের ভিসা ক্রেডিবিলিটি ইন্টারভিউয়ের জন্য প্রস্তুত করে।",
            note: "এটি কোম্পানির ইন্টারনাল প্ল্যাটফর্মের জন্য তৈরি, তাই ভেতরের টেকনিক্যাল বিবরণ গোপন রাখা হয়েছে। এখানে দেখানো হয়েছে এটি কী করে এবং কেন এভাবে বানানো হয়েছে।",
            problemTitle: "সমস্যাটা কী ছিল",
            problem: [
                "যুক্তরাজ্যের কোনো বিশ্ববিদ্যালয় CAS (Confirmation of Acceptance for Studies) দেওয়ার আগে নিশ্চিত হতে চায় যে শিক্ষার্থী সত্যিই পড়তে যাচ্ছে। আর ভিসা দেওয়ার আগে UK Visas and Immigration যেকোনো শিক্ষার্থীর ইন্টারভিউ নিতে পারে। কাগজে আবেদন যত ভালোই হোক, শিক্ষার্থী যদি নিজের ভাষায় বলতে না পারে কেন এই কোর্স, খরচ কে দিচ্ছে বা পড়া শেষে কী করবে, তাহলে সেটা বড় সতর্ক সংকেত।",
                "আগে ইন্টারভিউয়ের প্রস্তুতি যাচাই হতো অনানুষ্ঠানিকভাবে: একটা ফোন কল, একটা চেকলিস্ট, বা কিছুই না। এতে একই দুর্বলতার দুজন শিক্ষার্থীর সাথে আলাদা আচরণ হতে পারত, আর কী যাচাই করা হয়েছে তার কোনো রেকর্ডও থাকত না।",
            ],
            flowTitle: "কীভাবে কাজ করে",
            flow: [
                { title: "সেটআপ", text: "একজন কমপ্লায়েন্স অফিসার শিক্ষার্থীর আবেদনের জন্য একটি ইন্টারভিউ তৈরি করেন। প্রশ্নগুলো আসে যাচাই করা একটি প্রশ্নব্যাংক থেকে, আর বিশ্ববিদ্যালয়, কোর্স, টিউশন ফি-র মতো শিক্ষার্থীর নিজের তথ্য দিয়ে সাজানো হয়।" },
                { title: "ইন্টারভিউ", text: "শিক্ষার্থী আসল ইন্টারভিউয়ের মতোই অনলাইনে অংশ নেয়: প্রথমে ডিভাইস চেক, প্রতিটি প্রশ্নে প্রস্তুতির সময়, তারপর নির্দিষ্ট সময়ের মধ্যে রেকর্ড করা উত্তর।" },
                { title: "বিশ্লেষণ", text: "প্রতিটি উত্তর লেখায় রূপান্তর করে AI নির্দিষ্ট মানদণ্ডে যাচাই করে: উত্তরটা কি স্পষ্ট, নির্দিষ্ট আর সঠিক? উত্তরগুলো একে অপরের সাথেও মিলিয়ে দেখা হয়, যাতে পুরো ইন্টারভিউয়ে কোনো স্ববিরোধিতা থাকলে ধরা পড়ে।" },
                { title: "মানুষের যাচাই", text: "কমপ্লায়েন্স অফিসার AI-এর মতামতের পাশাপাশি প্রতিটি রেকর্ডিং দেখেন, দরকার হলে ফিডব্যাক সম্পাদনা করেন, এবং প্রতিটি প্রশ্ন অনুমোদন দেন।" },
                { title: "রিপোর্ট", text: "শিক্ষার্থী একটি পরিষ্কার রিপোর্ট পায়, যেখানে প্রতিটি প্রশ্নের শক্তির দিক, দুর্বলতা আর উন্নতির পরামর্শ থাকে।" },
            ],
            whyTitle: "মূল সিদ্ধান্ত, এবং কেন",
            why: [
                { title: "শেষ সিদ্ধান্ত সবসময় মানুষের", text: "AI দ্রুত কাজ করে আর লম্বা ট্রান্সক্রিপ্টে স্ববিরোধিতা ভালো ধরতে পারে, কিন্তু প্রসঙ্গ বুঝতে ভুল করতে পারে, যেমন নার্ভাস কিন্তু ভালোভাবে প্রস্তুত একজন শিক্ষার্থী। তাই অফিসার যাচাই না করা পর্যন্ত কিছুই শিক্ষার্থীর কাছে যায় না।" },
                { title: "AI-এর বানানো প্রশ্ন নয়, যাচাই করা প্রশ্নব্যাংক", text: "প্রশ্নের ভাষা আর মূল্যায়নের মানদণ্ড কমপ্লায়েন্সের দিক থেকে সংবেদনশীল, তাই এগুলো কোডের মতোই ভার্সন কন্ট্রোলে রেখে রিভিউ করা হয়। AI শুধু প্রশ্ন বাছাই করে সাজায়, নতুন প্রশ্ন বানায় না।" },
                { title: "আলাদা উত্তর নয়, পুরো গল্পের সামঞ্জস্য", text: "আসল সতর্ক সংকেত হলো এমন গল্প যা মেলে না, যেমন এক উত্তরে খরচের উৎস এক রকম, আরেক উত্তরে অন্য রকম। তাই কিছু প্রশ্ন আলাদাভাবে মূল্যায়ন হয়, আর কিছু পুরো ইন্টারভিউয়ের সাথে মিলিয়ে দেখা হয়।" },
                { title: "চুপিচুপি কোনো সিদ্ধান্ত বদল নয়", text: "অফিসার ফিডব্যাকের ভাষা বদলাতে পারেন, কিন্তু প্রমাণ না বদলে মূল রায় উল্টে দিতে পারেন না। এতে প্রতিটি মূল্যায়ন সৎ আর ব্যাখ্যাযোগ্য থাকে।" },
                { title: "সবকিছুর রেকর্ড থাকে", text: "কে ইন্টারভিউ তৈরি করেছে, কে প্রশ্ন লিখেছে, কে কোন উত্তর যাচাই করেছে, কে রিপোর্ট অনুমোদন দিয়েছে, সবকিছু রেকর্ড হয়। কোনো কেস নিয়ে প্রশ্ন উঠলে যাচাইয়ের প্রমাণ হাতে থাকে।" },
            ],
            impactTitle: "ফলাফল",
            impact: [
                "অনানুষ্ঠানিক, অসামঞ্জস্যপূর্ণ যাচাইয়ের জায়গায় একটি কাঠামোবদ্ধ, পুনরাবৃত্তিযোগ্য ও রেকর্ডসহ প্রক্রিয়া চালু হয়েছে।",
                "প্রতিষ্ঠানের একটি বড় বিশেষত্ব হয়ে উঠেছে।",
                "শিক্ষার্থীদের ভিসা ইন্টারভিউয়ে সাফল্যের হার দৃশ্যমানভাবে বেড়েছে।",
            ],
            roleTitle: "আমার ভূমিকা",
            role: [
                "সমস্যাটা চিহ্নিত করে সমাধানের প্রস্তাব দিয়েছি।",
                "প্রশ্নব্যাংক আর মূল্যায়নের নিয়ম থেকে শুরু করে শিক্ষার্থী ও অফিসারের অভিজ্ঞতা পর্যন্ত, পুরো ডিজাইন ও ডেভেলপমেন্টে নেতৃত্ব দিয়েছি।",
                "একটি পূর্ণাঙ্গ টেকনিক্যাল ও ফাংশনাল রেফারেন্স লিখেছি, যাতে অন্য ইঞ্জিনিয়ার আর অপারেশনস টিম এটি ব্যবহার ও রক্ষণাবেক্ষণ করতে পারে।",
            ],
            skillsTitle: "যে দক্ষতাগুলো কাজে লেগেছে",
            skills: ["Product thinking", "LLM integration", "Speech-to-text", "Human-in-the-loop design", "Background job pipelines", "Audit logging", "Laravel", "Vue.js"],
        },
    };

    const meta = {
        title: "CAS Shield: AI-powered mock visa interviews — Safayet",
        description:
            "Case study: an AI-powered mock interview system, proposed and led by Safayet Hossain, that prepares students for UK visa credibility interviews, with human review of every AI judgement.",
        url: "https://safayet.me/work/cas-shield",
    };
</script>

<CaseStudy {content} {meta} />
