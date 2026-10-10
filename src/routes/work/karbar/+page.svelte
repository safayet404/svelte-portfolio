<script lang="ts">
    import CaseStudy from "../../../components/CaseStudy.svelte";

    const content = {
        en: {
            back: "← Back to projects",
            badge: "Personal project · In progress · 2026",
            title: "Karbar",
            subtitle: "One system to run a shop in Bangladesh: the counter, the online store, stock, customer dues, the books, VAT and payroll.",
            note: "A product I'm designing and building end to end. The demos below run on sample data.",
            problemTitle: "The problem",
            problem: [
                "A typical shop in Bangladesh runs on several disconnected tools: a POS at the counter, a paper khata for customers who buy on credit (baki), Excel for stock, Facebook messages for online orders, and an accountant who rebuilds the books at the end of the month. None of them agree, so the owner never really knows today's stock, who owes what, or whether the month was profitable.",
                "Big ERPs are expensive and built for other countries. Simple POS apps stop at the receipt. Karbar's goal is a single system where every sale, purchase and payment updates stock, dues and the books at the same moment, in language the shop already uses.",
            ],
            flowTitle: "How a sale moves through Karbar",
            flow: [
                { title: "Sold at the counter or online", text: "A cashier scans a barcode on the POS terminal, or a customer orders from the shop's own online store. Both draw from the same stock in the same warehouse." },
                { title: "Stock and cost update instantly", text: "Stock drops in the right warehouse, and the product's average cost is used to work out the real profit on that sale." },
                { title: "The books write themselves", text: "Every sale, purchase, expense and salary is posted as a double-entry journal entry automatically. The owner never writes a journal entry." },
                { title: "Credit sales become dues (baki)", text: "Selling on credit respects each customer's credit limit and shows up in their dues, with collections recorded against them." },
                { title: "Low stock turns into a purchase order", text: "When stock reaches the reorder level, the owner is notified and Karbar drafts a purchase order. Large orders wait for approval before they're placed." },
                { title: "The month closes itself", text: "Profit & loss, balance sheet, trial balance and the VAT report are always up to date, because they're built from the same journal." },
            ],
            whyTitle: "Key decisions, and why",
            why: [
                { title: "A modular monolith, not microservices", text: "Eleven modules (Inventory, POS, Purchasing, Accounting, CRM, HR, E-commerce, Storefront, Reports, Platform, Core) live in one codebase behind one REST API. Each company switches modules on or off by plan. One team gets clear boundaries without the cost of running a distributed system." },
                { title: "Many shops, one database, strict isolation", text: "Every company's data is scoped to that company in a shared PostgreSQL database. Dedicated tests try to read and use another company's data and must fail." },
                { title: "Accounting by double entry, never edited", text: "Journal entries can't be deleted; a mistake is fixed with a reversing entry. The trial balance proves debits and credits always match, so the numbers can be trusted." },
                { title: "Owners stay in control of money", text: "Limits for purchase orders, expenses, supplier payments and discounts send large actions for approval. Nothing reaches the books, and no money leaves, until someone approves." },
                { title: "Speed that doesn't decay as a shop grows", text: "A query-budget test calls every API endpoint on a small shop and again on one five times bigger; the number of database queries must not grow. It catches N+1 problems before they ship." },
                { title: "One storefront deployment, every shop's domain", text: "The Nuxt storefront renders pages on the server for SEO, picks the shop from the domain, keeps customer sessions in httpOnly cookies, and talks to the API through its own gateway, so custom domains need no CORS setup." },
            ],
            featuresTitle: "What's built",
            features: [
                { title: "POS terminal", text: "Barcode scanning, discounts, cash/card/mobile/bank and store credit, receipts, returns and refunds." },
                { title: "Wholesale (B2B)", text: "Quotation → sales order → delivery → invoice, with partial deliveries and payments." },
                { title: "Customers & dues", text: "Credit limits, baki tracking and collections, store credit, loyalty points and activity notes." },
                { title: "Inventory", text: "Products with variants and units, multiple warehouses, average costing, CSV import/export and barcode labels." },
                { title: "Purchasing", text: "Suppliers, purchase orders, receiving goods, reorder planning and supplier payments." },
                { title: "Online store", text: "Server-rendered storefront per domain, orders, discounts and codes, collections and shipping." },
                { title: "Accounting", text: "Cash, bank and bKash/Nagad accounts, expenses, owner's money, opening balances, P&L, balance sheet, trial balance, bank reconciliation." },
                { title: "VAT", text: "Configurable rates, supplementary duty, VAT-inclusive or on-top prices, BIN on invoices, and a VAT report." },
                { title: "HR & payroll", text: "Employees, attendance, leave approval and monthly payroll runs posted to the books." },
                { title: "Approvals", text: "Spending and discount limits with approve, reject and withdraw, and notifications to both sides." },
                { title: "Roles & activity", text: "Role-based permissions per company, a staff activity log and in-app notifications." },
                { title: "Platform admin", text: "Plans, per-company modules and invite-only signup for running Karbar as a service." },
            ],
            impactTitle: "Where it stands",
            impact: [
                "All eleven modules work end to end; the demos above show the desktop and phone apps.",
                "About 220 automated tests across 40 feature suites, including tenant isolation, stock valuation, financial statements, VAT and the N+1 query budget.",
                "A user guide in Bangla and English written for shop staff, not developers.",
                "Next: a pilot with a real shop, then the mobile app on the same API.",
            ],
            roleTitle: "My role",
            role: [
                "Designed the product, the data model and the architecture.",
                "Built the Laravel API, the Vue admin app and the Nuxt storefront, with AI tools as a pair programmer.",
                "Wrote the test suite and the user guides.",
            ],
            skillsTitle: "Skills involved",
            skills: ["Laravel", "PHP", "PostgreSQL", "Multi-tenant SaaS", "Double-entry accounting", "REST API design", "Vue 3", "Pinia", "Nuxt (SSR)", "Sanctum", "Role-based access", "Feature testing"],
        },
        bn: {
            back: "← প্রজেক্টে ফিরে যান",
            badge: "ব্যক্তিগত প্রজেক্ট · চলমান · ২০২৬",
            title: "Karbar",
            subtitle: "বাংলাদেশের একটা দোকান চালানোর জন্য একটাই সিস্টেম: কাউন্টার, অনলাইন দোকান, স্টক, কাস্টমারের বাকি, হিসাবের খাতা, ভ্যাট আর বেতন।",
            note: "এটা আমি শুরু থেকে শেষ পর্যন্ত ডিজাইন আর তৈরি করছি। নিচের ডেমোগুলো নমুনা ডেটায় চলছে।",
            problemTitle: "সমস্যাটা কী ছিল",
            problem: [
                "বাংলাদেশের একটা সাধারণ দোকান কয়েকটা আলাদা জিনিস দিয়ে চলে: কাউন্টারে একটা POS, বাকিতে কেনা কাস্টমারের জন্য কাগজের খাতা, স্টকের জন্য Excel, অনলাইন অর্ডারের জন্য Facebook মেসেজ, আর মাসের শেষে খাতা নতুন করে মেলানোর জন্য একজন হিসাবরক্ষক। কোনোটার সাথে কোনোটা মেলে না, তাই মালিক কখনো ঠিকমতো জানেন না আজকের স্টক কত, কার কাছে কত বাকি, বা মাসে লাভ হলো কিনা।",
                "বড় ERP অনেক দামি আর অন্য দেশের জন্য বানানো। সাধারণ POS অ্যাপ রসিদ দিয়েই শেষ। Karbar-এর লক্ষ্য একটা সিস্টেম, যেখানে প্রতিটা বিক্রি, কেনা আর পেমেন্ট একই মুহূর্তে স্টক, বাকি আর খাতা আপডেট করে, দোকানের নিজের চেনা ভাষায়।",
            ],
            flowTitle: "একটা বিক্রি Karbar-এর ভেতর দিয়ে কীভাবে যায়",
            flow: [
                { title: "কাউন্টারে বা অনলাইনে বিক্রি", text: "ক্যাশিয়ার POS-এ বারকোড স্ক্যান করেন, অথবা কাস্টমার দোকানের নিজের অনলাইন স্টোর থেকে অর্ডার দেন। দুটোই একই গুদামের একই স্টক থেকে যায়।" },
                { title: "স্টক আর খরচ সাথে সাথে আপডেট", text: "ঠিক গুদামে স্টক কমে, আর পণ্যের গড় কেনা দাম দিয়ে ওই বিক্রির আসল লাভ হিসাব হয়।" },
                { title: "খাতা নিজেই লেখা হয়", text: "প্রতিটা বিক্রি, কেনা, খরচ আর বেতন স্বয়ংক্রিয়ভাবে ডাবল-এন্ট্রি জার্নালে যায়। মালিককে কখনো জার্নাল লিখতে হয় না।" },
                { title: "বাকিতে বিক্রি হয় পাওনা", text: "বাকিতে বিক্রির সময় কাস্টমারের ক্রেডিট লিমিট মানা হয়, আর সেটা তার বাকির হিসাবে ওঠে, আদায় হলে সেখানে জমা হয়।" },
                { title: "স্টক কম হলে ক্রয় আদেশ", text: "স্টক রিঅর্ডার লেভেলে নামলে মালিক নোটিফিকেশন পান আর Karbar একটা ক্রয় আদেশের খসড়া বানায়। বড় অর্ডার অনুমোদনের পরই দেওয়া হয়।" },
                { title: "মাস নিজেই বন্ধ হয়", text: "লাভ-ক্ষতি, ব্যালান্স শিট, ট্রায়াল ব্যালান্স আর ভ্যাট রিপোর্ট সবসময় হালনাগাদ, কারণ সবই একই জার্নাল থেকে তৈরি।" },
            ],
            whyTitle: "মূল সিদ্ধান্ত, এবং কেন",
            why: [
                { title: "মাইক্রোসার্ভিস নয়, মডিউলার মনোলিথ", text: "এগারোটা মডিউল (Inventory, POS, Purchasing, Accounting, CRM, HR, E-commerce, Storefront, Reports, Platform, Core) একই কোডবেসে, একই REST API-র পেছনে। প্রতিটা কোম্পানি প্ল্যান অনুযায়ী মডিউল চালু বা বন্ধ করে। একটা টিম পরিষ্কার সীমানা পায়, ডিস্ট্রিবিউটেড সিস্টেম চালানোর খরচ ছাড়াই।" },
                { title: "অনেক দোকান, একটা ডেটাবেস, কড়া আলাদা রাখা", text: "শেয়ার করা PostgreSQL-এ প্রতিটা কোম্পানির ডেটা শুধু সেই কোম্পানির মধ্যে সীমাবদ্ধ। আলাদা টেস্ট অন্য কোম্পানির ডেটা পড়তে আর ব্যবহার করতে চেষ্টা করে, আর সেটা ব্যর্থ হতেই হবে।" },
                { title: "ডাবল-এন্ট্রি হিসাব, কখনো মোছা নয়", text: "জার্নাল এন্ট্রি মোছা যায় না; ভুল হলে উল্টো এন্ট্রি দিয়ে ঠিক করা হয়। ট্রায়াল ব্যালান্স দেখায় ডেবিট আর ক্রেডিট সবসময় মেলে, তাই সংখ্যায় ভরসা করা যায়।" },
                { title: "টাকার নিয়ন্ত্রণ মালিকের হাতে", text: "ক্রয় আদেশ, খরচ, সাপ্লায়ার পেমেন্ট আর ডিসকাউন্টের সীমা ছাড়ালে অনুমোদন লাগে। কেউ অনুমোদন না দেওয়া পর্যন্ত কিছু খাতায় ওঠে না, কোনো টাকাও বের হয় না।" },
                { title: "দোকান বড় হলেও গতি কমে না", text: "একটা কোয়েরি-বাজেট টেস্ট প্রতিটা API এন্ডপয়েন্ট একটা ছোট দোকানে আর পাঁচ গুণ বড় দোকানে চালায়; ডেটাবেস কোয়েরির সংখ্যা বাড়তে পারবে না। এতে N+1 সমস্যা প্রকাশের আগেই ধরা পড়ে।" },
                { title: "একটা স্টোরফ্রন্ট, প্রতিটা দোকানের নিজের ডোমেইন", text: "Nuxt স্টোরফ্রন্ট SEO-র জন্য সার্ভারে পেজ বানায়, ডোমেইন দেখে দোকান চেনে, কাস্টমারের সেশন httpOnly কুকিতে রাখে, আর নিজের গেটওয়ে দিয়ে API-র সাথে কথা বলে, তাই কাস্টম ডোমেইনে CORS সেটআপ লাগে না।" },
            ],
            featuresTitle: "যা তৈরি হয়েছে",
            features: [
                { title: "POS টার্মিনাল", text: "বারকোড স্ক্যান, ডিসকাউন্ট, ক্যাশ/কার্ড/মোবাইল/ব্যাংক আর স্টোর ক্রেডিট, রসিদ, রিটার্ন আর রিফান্ড।" },
                { title: "পাইকারি (B2B)", text: "কোটেশন → সেলস অর্ডার → ডেলিভারি → ইনভয়েস, আংশিক ডেলিভারি আর পেমেন্টসহ।" },
                { title: "কাস্টমার আর বাকি", text: "ক্রেডিট লিমিট, বাকির হিসাব আর আদায়, স্টোর ক্রেডিট, লয়্যালটি পয়েন্ট আর নোট।" },
                { title: "ইনভেন্টরি", text: "ভ্যারিয়েন্ট আর ইউনিটসহ পণ্য, একাধিক গুদাম, গড় খরচ, CSV ইমপোর্ট/এক্সপোর্ট আর বারকোড লেবেল।" },
                { title: "ক্রয়", text: "সাপ্লায়ার, ক্রয় আদেশ, মাল গ্রহণ, রিঅর্ডার পরিকল্পনা আর সাপ্লায়ার পেমেন্ট।" },
                { title: "অনলাইন স্টোর", text: "ডোমেইন অনুযায়ী সার্ভারে রেন্ডার হওয়া স্টোর, অর্ডার, ডিসকাউন্ট আর কোড, কালেকশন আর শিপিং।" },
                { title: "হিসাব", text: "ক্যাশ, ব্যাংক আর বিকাশ/নগদ অ্যাকাউন্ট, খরচ, মালিকের টাকা, শুরুর ব্যালান্স, লাভ-ক্ষতি, ব্যালান্স শিট, ট্রায়াল ব্যালান্স, ব্যাংক মেলানো।" },
                { title: "ভ্যাট", text: "নিজের মতো রেট, সম্পূরক শুল্ক, ভ্যাটসহ বা ভ্যাট বাদে দাম, ইনভয়েসে BIN, আর ভ্যাট রিপোর্ট।" },
                { title: "HR আর বেতন", text: "কর্মচারী, হাজিরা, ছুটির অনুমোদন আর মাসিক বেতন, যা খাতায় যায়।" },
                { title: "অনুমোদন", text: "খরচ আর ডিসকাউন্টের সীমা, অনুমোদন, বাতিল আর প্রত্যাহার, দুই পক্ষকেই নোটিফিকেশন।" },
                { title: "রোল আর কার্যকলাপ", text: "কোম্পানি অনুযায়ী রোল-ভিত্তিক অনুমতি, স্টাফের কার্যকলাপের লগ আর অ্যাপের ভেতরে নোটিফিকেশন।" },
                { title: "প্ল্যাটফর্ম অ্যাডমিন", text: "প্ল্যান, কোম্পানি অনুযায়ী মডিউল আর শুধু আমন্ত্রণে সাইনআপ, Karbar-কে সার্ভিস হিসেবে চালানোর জন্য।" },
            ],
            impactTitle: "এখন কোথায় আছে",
            impact: [
                "এগারোটা মডিউলই শুরু থেকে শেষ পর্যন্ত কাজ করছে; উপরের ডেমোতে ডেস্কটপ আর ফোন দুটোই দেখানো হয়েছে।",
                "৪০টা ফিচার স্যুটে প্রায় ২২০টা স্বয়ংক্রিয় টেস্ট, যার মধ্যে আছে টেন্যান্ট আলাদা রাখা, স্টকের মূল্যায়ন, আর্থিক বিবরণী, ভ্যাট আর N+1 কোয়েরি বাজেট।",
                "দোকানের কর্মীদের জন্য বাংলা আর ইংরেজিতে ব্যবহার নির্দেশিকা, ডেভেলপারদের জন্য নয়।",
                "পরের ধাপ: একটা আসল দোকানে পরীক্ষামূলক ব্যবহার, তারপর একই API-তে মোবাইল অ্যাপ।",
            ],
            roleTitle: "আমার ভূমিকা",
            role: [
                "প্রোডাক্ট, ডেটা মডেল আর আর্কিটেকচার ডিজাইন করেছি।",
                "Laravel API, Vue অ্যাডমিন অ্যাপ আর Nuxt স্টোরফ্রন্ট তৈরি করেছি, AI টুলকে pair programmer হিসেবে ব্যবহার করে।",
                "টেস্ট স্যুট আর ব্যবহার নির্দেশিকা লিখেছি।",
            ],
            skillsTitle: "যে দক্ষতাগুলো কাজে লাগছে",
            skills: ["Laravel", "PHP", "PostgreSQL", "Multi-tenant SaaS", "Double-entry accounting", "REST API design", "Vue 3", "Pinia", "Nuxt (SSR)", "Sanctum", "Role-based access", "Feature testing"],
        },
    };

    const meta = {
        title: "Karbar: one system to run a shop — Safayet",
        description:
            "Case study: Karbar, a modular multi-tenant ERP by Safayet Hossain for shops in Bangladesh: POS, online store, inventory, purchasing, double-entry accounting, VAT, dues and payroll, built on Laravel, PostgreSQL, Vue and Nuxt.",
        url: "https://safayet.me/work/karbar",
        image: "https://safayet.me/karbar.jpg",
    };

    const media = [
        { src: "/karbar/karbar-demo-desktop.mp4", poster: "/karbar/desktop-poster.jpg", video: true, alt: "Karbar on desktop: sign in, dashboard, POS sale with receipt, approvals and financial statements" },
        { src: "/karbar/karbar-demo-phone.mp4", poster: "/karbar/phone-poster.jpg", video: true, narrow: true, alt: "Karbar on a phone: sign in and a POS sale with receipt" },
    ];
</script>

<CaseStudy {content} {meta} backHref="/#projects" {media} />
