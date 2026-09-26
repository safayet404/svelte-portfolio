<script lang="ts">
    import CaseStudy from "../../../components/CaseStudy.svelte";

    const content = {
        en: {
            back: "← Back to experience",
            badge: "Proposed & leading · Shabuj Global Education · In progress",
            title: "Nexora",
            subtitle: "A multi-tenant conversational AI platform that serves every lead on every channel: chat, email, WhatsApp and phone.",
            note: "An in-house platform that is still being built, so implementation details stay private. This page covers what it does and why it's built the way it is.",
            problemTitle: "The problem",
            problem: [
                "Leads arrive through many doors: the website, WhatsApp, email, phone calls and walk-in inquiries. Each was handled differently depending on who was free. A lead who messaged the website at 11pm might not hear back until the next morning, if at all, and a missed call might never be returned.",
                "There was no single place to see a lead's conversation from start to finish, and no consistent way to measure whether leads were actually being served well. The goal of Nexora isn't to build another chatbot. It's to never lose a lead to a slow reply or a forgotten follow-up.",
            ],
            flowTitle: "How a lead moves through Nexora",
            flow: [
                { title: "Any door in", text: "A visitor opens the website chat widget, sends a WhatsApp message, replies to an email or calls. The AI agent answers straight away, day or night, using the organisation's own program information." },
                { title: "Anonymous visitor to real lead", text: "After a few helpful answers, the widget asks for a name and email. From that moment the visitor becomes a real, contactable lead in the same system as every phone and WhatsApp lead." },
                { title: "One conversation, every channel", text: "Every message the lead ever sends, whether chat, email, WhatsApp or a call transcript, lands in one thread in a shared inbox, so anyone on the team sees the full history." },
                { title: "Human takeover, no friction", text: "Any staff member can step into a conversation at any moment and the AI steps back immediately. There's nothing to reassign or explain, because the history is already there." },
                { title: "No lead goes cold", text: "If a lead stops replying, automated journeys send a sensible follow-up after a set number of days instead of letting them quietly drop off." },
                { title: "Measured, not guessed", text: "Calls and chats can be graded automatically against a scorecard, and trends in questions and sentiment show what leads actually want." },
            ],
            featuresTitle: "What's built",
            features: [
                { title: "Unified inbox", text: "Chat, email, WhatsApp and voice in one place, with live updates, search, staff assignment and per-person unread state." },
                { title: "AI agent", text: "Answers grounded in the organisation's knowledge base, and able to send an email or WhatsApp message itself when that's the right next step." },
                { title: "Voice calls", text: "The AI can answer inbound calls and place outbound calls to leads, with speech recognition and text-to-speech." },
                { title: "Embeddable chat widget", text: "One line of script on any website, with an optional pre-chat form for lead capture." },
                { title: "Visual journey builder", text: "A node-based editor for both AI conversation flows and automations like \"wait two days, then follow up if there's no reply\"." },
                { title: "Email with AI replies", text: "Real inbox polling, threaded conversations and opt-in AI auto-replies." },
                { title: "QA scorecards", text: "An AI judge grades calls and chats, with a dispute workflow so staff can challenge a score." },
                { title: "Analytics", text: "Keyphrase search, sentiment trends and saved reports across every conversation." },
                { title: "Bulk campaigns", text: "Reach many leads at once, sent through a queue with limited concurrency rather than all at the same moment." },
            ],
            whyTitle: "Key decisions, and why",
            why: [
                { title: "Every channel is one lead, not one feature", text: "Website chat, email, WhatsApp and calls aren't separate products. They're different doors into the same job, so they all feed a single lead record and a single conversation." },
                { title: "The AI steps back the moment a human steps in", text: "Automation handles speed and after-hours coverage; people handle judgement. Handoff has to be instant and invisible to the lead, or staff won't trust it." },
                { title: "No single AI model is a single point of failure", text: "Requests go through a router that falls back to another model if one fails, so a provider outage doesn't mean an unanswered lead." },
                { title: "Tenant isolation enforced by the database", text: "Many organisations share one platform, so data separation can't depend on every query being written correctly. The database itself refuses to return another organisation's rows." },
                { title: "Roles defined by each organisation", text: "Instead of a fixed set of ranks, each organisation builds its own roles and permissions to match how its team actually works." },
                { title: "Verified end to end before it counts", text: "Every feature is checked with real API calls, a real browser and the database itself before it's called done, and gaps are reported honestly rather than hidden." },
            ],
            impactTitle: "Where it stands",
            impact: [
                "The unified inbox, knowledge-grounded AI replies, website widget with lead capture, email reply capture, WhatsApp messaging, and inbound and outbound calling are built and tested end to end.",
                "Next steps are production rollout: choosing the first channel to go live with real leads and walking the team through the new inbox.",
            ],
            roleTitle: "My role",
            role: [
                "Proposed the platform and the lead-first idea behind it.",
                "Leading design and development across the backend, dashboard, voice and messaging channels.",
                "Report progress and rollout needs directly to the team and management.",
            ],
            skillsTitle: "Skills involved",
            skills: ["Multi-tenant SaaS", "LLM routing & fallback", "RAG", "Tool calling", "Workflow engines", "Real-time systems", "Voice & messaging", "NestJS", "Next.js", "PostgreSQL", "Redis / BullMQ", "Monorepo"],
        },
        bn: {
            back: "← অভিজ্ঞতায় ফিরে যান",
            badge: "প্রস্তাব ও নেতৃত্ব দিচ্ছি · সবুজ গ্লোবাল এডুকেশন · চলমান",
            title: "Nexora",
            subtitle: "একটি মাল্টি-টেন্যান্ট কনভারসেশনাল AI প্ল্যাটফর্ম, যা চ্যাট, ইমেইল, WhatsApp আর ফোন, প্রতিটি চ্যানেলে প্রতিটি লিডকে সেবা দেয়।",
            note: "এটি একটি ইন-হাউস প্ল্যাটফর্ম, যার কাজ এখনো চলছে, তাই ভেতরের টেকনিক্যাল বিবরণ গোপন রাখা হয়েছে। এখানে দেখানো হয়েছে এটি কী করে এবং কেন এভাবে বানানো হচ্ছে।",
            problemTitle: "সমস্যাটা কী ছিল",
            problem: [
                "লিড আসে নানা পথে: ওয়েবসাইট, WhatsApp, ইমেইল, ফোন কল, সরাসরি অফিসে এসে খোঁজ নেওয়া। কে ফাঁকা আছে তার ওপর নির্ভর করে প্রতিটা আলাদাভাবে সামলানো হতো। রাত ১১টায় ওয়েবসাইটে মেসেজ দেওয়া লিড হয়তো পরদিন সকালে উত্তর পেত, হয়তো পেতই না। আর ধরতে না পারা কলের ফিরতি কল হয়তো কখনো যেত না।",
                "একজন লিডের পুরো কথোপকথন শুরু থেকে শেষ পর্যন্ত এক জায়গায় দেখার উপায় ছিল না, লিডদের ঠিকমতো সেবা দেওয়া হচ্ছে কিনা মাপারও কোনো নিয়মিত পদ্ধতি ছিল না। Nexora-র লক্ষ্য আরেকটা চ্যাটবট বানানো নয়। লক্ষ্য হলো দেরিতে উত্তর বা ভুলে যাওয়া ফলোআপের কারণে একজন লিডও না হারানো।",
            ],
            flowTitle: "একজন লিড Nexora-র ভেতর দিয়ে কীভাবে যায়",
            flow: [
                { title: "যেকোনো পথে প্রবেশ", text: "একজন ভিজিটর ওয়েবসাইটের চ্যাট উইজেট খোলে, WhatsApp-এ মেসেজ দেয়, ইমেইলের উত্তর দেয় বা ফোন করে। দিন হোক বা রাত, AI এজেন্ট প্রতিষ্ঠানের নিজের প্রোগ্রামের তথ্য দিয়ে সাথে সাথে উত্তর দেয়।" },
                { title: "অচেনা ভিজিটর থেকে আসল লিড", text: "কয়েকটা কাজের উত্তর দেওয়ার পর উইজেট নাম আর ইমেইল চায়। সেই মুহূর্ত থেকে ভিজিটর হয়ে যায় একজন আসল, যোগাযোগযোগ্য লিড, ফোন আর WhatsApp-এর লিডদের মতো একই সিস্টেমে।" },
                { title: "এক কথোপকথন, সব চ্যানেল", text: "লিডের পাঠানো প্রতিটি মেসেজ, চ্যাট, ইমেইল, WhatsApp বা কলের ট্রান্সক্রিপ্ট, সব একটা শেয়ার্ড ইনবক্সে একই থ্রেডে জমা হয়, তাই টিমের যে কেউ পুরো ইতিহাস দেখতে পায়।" },
                { title: "ঝামেলা ছাড়াই মানুষের হাতে", text: "টিমের যেকোনো সদস্য যেকোনো মুহূর্তে কথোপকথনে ঢুকতে পারেন, আর AI সাথে সাথে সরে যায়। কাউকে নতুন করে দায়িত্ব দেওয়া বা কিছু ব্যাখ্যা করার দরকার নেই, কারণ পুরো ইতিহাস আগে থেকেই সামনে থাকে।" },
                { title: "কোনো লিড ঠান্ডা হয় না", text: "লিড উত্তর দেওয়া বন্ধ করলে স্বয়ংক্রিয় জার্নি নির্দিষ্ট কয়েকদিন পর একটা যুক্তিসঙ্গত ফলোআপ পাঠায়, চুপচাপ হারিয়ে যেতে দেয় না।" },
                { title: "অনুমান নয়, মাপা", text: "কল আর চ্যাট স্কোরকার্ড অনুযায়ী স্বয়ংক্রিয়ভাবে মূল্যায়ন করা যায়, আর প্রশ্ন ও মনোভাবের ট্রেন্ড দেখায় লিডরা আসলে কী চায়।" },
            ],
            featuresTitle: "যা তৈরি হয়েছে",
            features: [
                { title: "ইউনিফায়েড ইনবক্স", text: "চ্যাট, ইমেইল, WhatsApp আর ভয়েস এক জায়গায়, সাথে লাইভ আপডেট, সার্চ, স্টাফ অ্যাসাইনমেন্ট আর প্রত্যেকের আলাদা না-পড়া অবস্থা।" },
                { title: "AI এজেন্ট", text: "প্রতিষ্ঠানের নলেজ বেস থেকে উত্তর দেয়, আর দরকার হলে নিজেই ইমেইল বা WhatsApp মেসেজ পাঠাতে পারে।" },
                { title: "ভয়েস কল", text: "AI আসা কলের উত্তর দিতে আর লিডদের কল করতে পারে, স্পিচ রিকগনিশন আর টেক্সট-টু-স্পিচ দিয়ে।" },
                { title: "এমবেড করা যায় এমন চ্যাট উইজেট", text: "যেকোনো ওয়েবসাইটে এক লাইনের স্ক্রিপ্ট, লিড সংগ্রহের জন্য ঐচ্ছিক প্রি-চ্যাট ফর্মসহ।" },
                { title: "ভিজ্যুয়াল জার্নি বিল্ডার", text: "AI কথোপকথন আর \"দুই দিন অপেক্ষা করো, উত্তর না এলে ফলোআপ দাও\" ধরনের অটোমেশন, দুটোর জন্যই নোড-ভিত্তিক এডিটর।" },
                { title: "AI উত্তরসহ ইমেইল", text: "আসল ইনবক্স থেকে মেইল আনা, থ্রেড অনুযায়ী কথোপকথন, আর ঐচ্ছিক AI স্বয়ংক্রিয় উত্তর।" },
                { title: "QA স্কোরকার্ড", text: "AI বিচারক কল আর চ্যাট মূল্যায়ন করে, আর স্টাফ চাইলে স্কোর নিয়ে আপত্তি জানাতে পারে।" },
                { title: "অ্যানালিটিক্স", text: "সব কথোপকথনে কি-ফ্রেজ সার্চ, মনোভাবের ট্রেন্ড আর সেভ করা রিপোর্ট।" },
                { title: "বাল্ক ক্যাম্পেইন", text: "একসাথে অনেক লিডের সাথে যোগাযোগ, তবে সবাইকে একই মুহূর্তে নয়, কিউয়ের মাধ্যমে সীমিত গতিতে।" },
            ],
            whyTitle: "মূল সিদ্ধান্ত, এবং কেন",
            why: [
                { title: "প্রতিটি চ্যানেল একই লিড, আলাদা ফিচার নয়", text: "ওয়েবসাইট চ্যাট, ইমেইল, WhatsApp আর কল আলাদা প্রোডাক্ট নয়। এগুলো একই কাজের ভিন্ন ভিন্ন দরজা, তাই সব মিলে একটাই লিড রেকর্ড আর একটাই কথোপকথন তৈরি হয়।" },
                { title: "মানুষ ঢুকলেই AI সরে যায়", text: "গতি আর অফিস সময়ের বাইরের কাজ সামলায় অটোমেশন, বিচার-বিবেচনা করে মানুষ। হ্যান্ডঅফ তাৎক্ষণিক আর লিডের কাছে অদৃশ্য না হলে স্টাফরা এতে ভরসা করবে না।" },
                { title: "কোনো একটা AI মডেলের ওপর নির্ভরতা নয়", text: "অনুরোধগুলো একটা রাউটারের মধ্য দিয়ে যায়, একটা মডেল ব্যর্থ হলে আরেকটা চেষ্টা করে। তাই কোনো সার্ভিস বন্ধ থাকলেও লিড উত্তর ছাড়া থাকে না।" },
                { title: "ডেটার আলাদা থাকা নিশ্চিত করে ডেটাবেস নিজে", text: "অনেক প্রতিষ্ঠান একই প্ল্যাটফর্ম ব্যবহার করে, তাই ডেটা আলাদা রাখা প্রতিটা কুয়েরি ঠিকভাবে লেখার ওপর নির্ভর করতে পারে না। ডেটাবেস নিজেই অন্য প্রতিষ্ঠানের ডেটা দিতে অস্বীকার করে।" },
                { title: "রোল ঠিক করে প্রতিটি প্রতিষ্ঠান নিজে", text: "নির্দিষ্ট কিছু পদের বদলে প্রতিটি প্রতিষ্ঠান নিজের টিমের কাজের ধরন অনুযায়ী নিজস্ব রোল আর পারমিশন বানায়।" },
                { title: "পুরোপুরি যাচাই না হলে কাজ শেষ নয়", text: "প্রতিটি ফিচার আসল API কল, আসল ব্রাউজার আর ডেটাবেস দিয়ে যাচাই করার পরই শেষ ধরা হয়, আর যা বাকি তা লুকানো হয় না, সৎভাবে জানানো হয়।" },
            ],
            impactTitle: "এখন কোথায় আছে",
            impact: [
                "ইউনিফায়েড ইনবক্স, নলেজ বেস থেকে AI-এর উত্তর, লিড সংগ্রহসহ ওয়েবসাইট উইজেট, ইমেইলের উত্তর ধরা, WhatsApp মেসেজিং, আর আসা ও যাওয়া দুই ধরনের কল তৈরি হয়ে পুরোপুরি পরীক্ষিত।",
                "পরের ধাপ প্রোডাকশনে চালু করা: কোন চ্যানেল প্রথমে আসল লিডদের জন্য চালু হবে তা ঠিক করা, আর টিমকে নতুন ইনবক্স দেখিয়ে দেওয়া।",
            ],
            roleTitle: "আমার ভূমিকা",
            role: [
                "প্ল্যাটফর্মটি আর এর পেছনের \"লিড সবার আগে\" ধারণাটির প্রস্তাব দিয়েছি।",
                "ব্যাকএন্ড, ড্যাশবোর্ড, ভয়েস আর মেসেজিং চ্যানেল জুড়ে ডিজাইন ও ডেভেলপমেন্টে নেতৃত্ব দিচ্ছি।",
                "অগ্রগতি আর চালু করার জন্য যা দরকার, তা সরাসরি টিম ও ম্যানেজমেন্টকে জানাই।",
            ],
            skillsTitle: "যে দক্ষতাগুলো কাজে লাগছে",
            skills: ["Multi-tenant SaaS", "LLM routing & fallback", "RAG", "Tool calling", "Workflow engines", "Real-time systems", "Voice & messaging", "NestJS", "Next.js", "PostgreSQL", "Redis / BullMQ", "Monorepo"],
        },
    };

    const meta = {
        title: "Nexora: a multi-tenant conversational AI platform — Safayet",
        description:
            "Case study: Nexora, a multi-tenant conversational AI platform proposed and led by Safayet Hossain, that serves every lead across website chat, email, WhatsApp and phone in one inbox.",
        url: "https://safayet.me/work/nexora",
    };
</script>

<CaseStudy {content} {meta} />
