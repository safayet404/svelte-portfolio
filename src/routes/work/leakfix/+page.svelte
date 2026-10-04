<script lang="ts">
    import CaseStudy from "../../../components/CaseStudy.svelte";

    const links = [
        { label: "GitHub", href: "https://github.com/safayet404/leakfix" },
        { label: "npm", href: "https://www.npmjs.com/package/leakfix" },
        { label: "Write-up on dev.to", href: "https://dev.to/safayet404/i-leaked-my-mongodb-password-so-i-built-a-tool-that-rotates-it-with-zero-downtime-3amh" },
    ];

    const content = {
        en: {
            back: "← Back to projects",
            badge: "Open source · Personal project · 2026",
            title: "leakfix",
            subtitle: "An open-source CLI that replaces a leaked secret without taking the app down, and undoes everything if any step fails.",
            note: "Open source under the MIT licence. The code, tests and every design decision are public on GitHub.",
            links,
            problemTitle: "The problem",
            problem: [
                "I pushed the .env file of one of my own apps to a public GitHub repo: the MongoDB password and the JWT secrets, readable by anyone. Deleting the file doesn't help, because it stays in the git history and bots scan new commits for credentials within minutes. The only real fix is to rotate: replace every secret so the leaked one stops working.",
                "Finding a leak is the easy part; GitHub even emails you. Fixing it is a fiddly sequence across several dashboards, and doing it in the wrong order takes production down. Delete the old database user before the app has switched, and every request fails. Most small teams have no tool for this step, so they either rush it or leave the leaked secret alive.",
            ],
            flowTitle: "How a rotation works",
            flow: [
                { title: "Prepare", text: "Create a new credential next to the leaked one, so both work for a moment. For MongoDB Atlas that's a new database user with exactly the same roles; for a JWT secret, a new random value." },
                { title: "Switch", text: "Put the new values into the deployment's environment variables on Vercel or Render, remembering the old ones so they can be restored." },
                { title: "Redeploy once", text: "One production redeploy for all changed variables, then wait until the new deployment is actually serving traffic." },
                { title: "Verify", text: "Call the app's health route. If the app can't reach its database with the new credential, this is where it's caught." },
                { title: "Revoke", text: "Only now delete the leaked credential. Every step is written to an audit log that never contains a secret value." },
            ],
            whyTitle: "Key decisions, and why",
            why: [
                { title: "Everything before revoking can be undone", text: "If any step fails, the completed steps are undone in reverse: variables get their old values back, production is redeployed on the old config, and the new credential is deleted. The app keeps running the whole time." },
                { title: "Once revoking starts, never roll back", text: "Rolling back at that point would mean pointing production at the leaked credential again. A test caught my first version doing exactly that, so this became a hard rule." },
                { title: "Test every failure against fake clouds", text: "The tests run whole rotations against in-memory imitations of the Atlas, Vercel and Render APIs, and make them fail on purpose: a broken deploy, a failing health check, a blocked IP." },
                { title: "Prove it on real services", text: "Green tests weren't trusted until the tool had rotated real secrets on a live Vercel app and a live Render service, including a deliberate rollback." },
                { title: "Read-only setup before any change", text: "leakfix init finds the right project, checks every permission and explains exactly what's missing, without changing anything. Setup friction was the main reason people wouldn't use it." },
                { title: "One small interface per platform", text: "A platform only has to read a variable, set it and redeploy. Vercel and Render share that interface, so adding Railway or Netlify is a single file." },
            ],
            featuresTitle: "What's built",
            features: [
                { title: "scan", text: "Finds secrets in a repo and whether git tracks them, with values masked on screen." },
                { title: "init", text: "Detects the deployment and the Atlas project, checks access and writes the config." },
                { title: "rotate", text: "Prints the plan as a dry run; with --yes, rotates with rollback on failure." },
                { title: "fix-repo", text: "Stops tracking .env files, adds .gitignore entries and an .env.example with names only." },
                { title: "GitHub Action", text: "Fails a pull request that commits a secret, before it reaches the main branch." },
                { title: "Shipping", text: "Published on npm (npx leakfix), a Docker image, CI on Node 22 and 24, and releases published from a git tag with npm Trusted Publishing." },
            ],
            impactTitle: "Results",
            impact: [
                "Rotated the leaked secrets of my own production app with zero downtime. The first two real runs failed (an Atlas IP allowlist, then a Vercel redeploy quirk), and both times leakfix rolled everything back on its own while the app stayed up.",
                "Rotation and rollback verified on a live Render service.",
                "22 tests cover whole rotations, including failed deploys, failed health checks and rollbacks.",
                "Published on npm with a demo, a roadmap and a contributing guide for new platforms.",
            ],
            roleTitle: "My role",
            role: [
                "Designed and built it end to end, as a solo open-source project, with AI tools as a pair programmer.",
                "Ran the first real rotations on my own production app and fixed what they uncovered.",
                "Set up CI, the Docker image, npm releases and the launch write-up.",
            ],
            skillsTitle: "Skills involved",
            skills: ["TypeScript", "Node.js", "CLI design", "Cloud APIs (MongoDB Atlas, Vercel, Render)", "Zero-downtime deployment", "Rollback design", "Vitest", "Docker", "GitHub Actions", "npm publishing", "Security"],
        },
        bn: {
            back: "← প্রজেক্টে ফিরে যান",
            badge: "ওপেন সোর্স · ব্যক্তিগত প্রজেক্ট · ২০২৬",
            title: "leakfix",
            subtitle: "একটি ওপেন সোর্স CLI, যা ফাঁস হওয়া secret অ্যাপ বন্ধ না করেই বদলে দেয়, আর কোনো ধাপে সমস্যা হলে সবকিছু আগের মতো ফিরিয়ে দেয়।",
            note: "MIT লাইসেন্সে ওপেন সোর্স। কোড, টেস্ট আর প্রতিটি ডিজাইন সিদ্ধান্ত GitHub-এ সবার জন্য খোলা।",
            links,
            problemTitle: "সমস্যাটা কী ছিল",
            problem: [
                "আমার নিজের একটা অ্যাপের .env ফাইল ভুল করে পাবলিক GitHub repo-তে চলে গিয়েছিল: MongoDB-র password আর JWT secret, যে কেউ পড়তে পারতো। ফাইল মুছে দিলে লাভ নেই, কারণ git-এর ইতিহাসে সেটা থেকে যায়, আর বট কয়েক মিনিটের মধ্যেই নতুন commit-এ password খোঁজে। একমাত্র আসল সমাধান হলো rotate করা: প্রতিটা secret বদলে ফেলা, যাতে ফাঁস হওয়াটা আর কাজ না করে।",
                "ফাঁস খুঁজে পাওয়া সহজ, GitHub নিজেই ইমেইল পাঠায়। কিন্তু ঠিক করাটা কয়েকটা ড্যাশবোর্ড জুড়ে খুঁটিনাটি কাজ, আর ভুল ক্রমে করলে প্রোডাকশন বন্ধ হয়ে যায়। অ্যাপ নতুনটায় যাওয়ার আগেই পুরোনো ডেটাবেস ইউজার মুছে দিলে প্রতিটা রিকোয়েস্ট ব্যর্থ হয়। বেশিরভাগ ছোট টিমের কাছে এই ধাপের জন্য কোনো টুল নেই, তাই তারা হয় তাড়াহুড়ো করে, নয়তো ফাঁস হওয়া secret চালুই রেখে দেয়।",
            ],
            flowTitle: "একটা rotation কীভাবে হয়",
            flow: [
                { title: "প্রস্তুতি", text: "ফাঁস হওয়াটার পাশাপাশি নতুন একটা credential বানানো, যাতে কিছুক্ষণ দুটোই কাজ করে। MongoDB Atlas-এর জন্য হুবহু একই অনুমতিসহ নতুন ডেটাবেস ইউজার, JWT secret-এর জন্য নতুন র‍্যান্ডম মান।" },
                { title: "বদল", text: "Vercel বা Render-এ অ্যাপের environment variable-এ নতুন মান বসানো, পুরোনোগুলো মনে রেখে, যাতে দরকার হলে ফিরিয়ে আনা যায়।" },
                { title: "একবার redeploy", text: "সব বদলানো variable-এর জন্য প্রোডাকশনে একবারই redeploy, তারপর নতুন deployment সত্যিই চালু না হওয়া পর্যন্ত অপেক্ষা।" },
                { title: "যাচাই", text: "অ্যাপের health route-এ রিকোয়েস্ট পাঠানো। নতুন credential দিয়ে অ্যাপ ডেটাবেসে পৌঁছাতে না পারলে এখানেই ধরা পড়ে।" },
                { title: "বাতিল", text: "শুধু এখনই ফাঁস হওয়া credential মুছে ফেলা। প্রতিটা ধাপ audit log-এ লেখা থাকে, যেখানে কোনো secret-এর মান থাকে না।" },
            ],
            whyTitle: "মূল সিদ্ধান্ত, এবং কেন",
            why: [
                { title: "বাতিলের আগ পর্যন্ত সব ফেরানো যায়", text: "কোনো ধাপ ব্যর্থ হলে শেষ হওয়া ধাপগুলো উল্টো ক্রমে ফেরানো হয়: variable-এ পুরোনো মান ফেরে, পুরোনো কনফিগে আবার deploy হয়, আর নতুন credential মুছে যায়। পুরো সময় অ্যাপ চালু থাকে।" },
                { title: "বাতিল শুরু হলে আর ফেরা নয়", text: "তখন ফেরা মানে প্রোডাকশনকে আবার ফাঁস হওয়া credential-এ ফিরিয়ে নেওয়া। আমার প্রথম ভার্শন ঠিক এটাই করছিল, একটা টেস্টে ধরা পড়ে, তাই এটা কঠিন নিয়ম হয়ে গেছে।" },
                { title: "নকল ক্লাউডে প্রতিটা ব্যর্থতা পরীক্ষা", text: "টেস্টগুলো Atlas, Vercel আর Render-এর API-র মেমরিতে চলা নকল সংস্করণের বিরুদ্ধে পুরো rotation চালায়, আর ইচ্ছা করে ব্যর্থ করায়: ভাঙা deploy, ব্যর্থ health check, আটকে দেওয়া IP।" },
                { title: "আসল সার্ভিসে প্রমাণ", text: "টেস্ট সবুজ হলেই ভরসা করা হয়নি। চালু থাকা একটা Vercel অ্যাপ আর একটা Render সার্ভিসে আসল secret বদলানো হয়েছে, ইচ্ছাকৃত rollback-সহ।" },
                { title: "কিছু বদলানোর আগে শুধু-পড়া সেটআপ", text: "leakfix init ঠিক প্রজেক্ট খুঁজে বের করে, প্রতিটা অনুমতি যাচাই করে আর কী নেই তা স্পষ্ট বলে দেয়, কিছুই না বদলে। সেটআপের ঝামেলাই ছিল মানুষের এটা ব্যবহার না করার মূল কারণ।" },
                { title: "প্রতিটা প্ল্যাটফর্মের জন্য ছোট একটা interface", text: "একটা প্ল্যাটফর্মকে শুধু variable পড়তে, বসাতে আর redeploy করতে হয়। Vercel আর Render একই interface ব্যবহার করে, তাই Railway বা Netlify যোগ করা মানে একটা ফাইল।" },
            ],
            featuresTitle: "যা তৈরি হয়েছে",
            features: [
                { title: "scan", text: "repo-তে secret খোঁজে, আর git সেটা ট্র্যাক করে কিনা দেখায়, স্ক্রিনে মান ঢেকে রেখে।" },
                { title: "init", text: "deployment আর Atlas প্রজেক্ট খুঁজে বের করে, অনুমতি যাচাই করে, কনফিগ লিখে দেয়।" },
                { title: "rotate", text: "প্রথমে শুধু পরিকল্পনা দেখায়; --yes দিলে rotate করে, ব্যর্থ হলে rollback করে।" },
                { title: "fix-repo", text: ".env ফাইল ট্র্যাক করা বন্ধ করে, .gitignore-এ যোগ করে, আর শুধু নামসহ .env.example বানায়।" },
                { title: "GitHub Action", text: "কেউ secret commit করলে pull request-টা আটকে দেয়, main branch-এ পৌঁছানোর আগেই।" },
                { title: "প্রকাশ", text: "npm-এ প্রকাশিত (npx leakfix), Docker image, Node 22 আর 24-এ CI, আর git tag দিলেই npm Trusted Publishing দিয়ে রিলিজ।" },
            ],
            impactTitle: "ফলাফল",
            impact: [
                "আমার নিজের প্রোডাকশন অ্যাপের ফাঁস হওয়া secret কোনো downtime ছাড়াই বদলানো হয়েছে। প্রথম দুটো আসল চেষ্টা ব্যর্থ হয়েছিল (Atlas-এর IP তালিকা, তারপর Vercel-এর redeploy-এর একটা খুঁত), আর দুবারই leakfix নিজে সব ফিরিয়ে দিয়েছে, অ্যাপ চালু ছিল।",
                "চালু থাকা একটা Render সার্ভিসে rotation আর rollback যাচাই করা হয়েছে।",
                "২২টি টেস্ট পুরো rotation পরীক্ষা করে, ব্যর্থ deploy, ব্যর্থ health check আর rollback-সহ।",
                "npm-এ প্রকাশিত, সাথে ডেমো, রোডম্যাপ আর নতুন প্ল্যাটফর্ম যোগ করার গাইড।",
            ],
            roleTitle: "আমার ভূমিকা",
            role: [
                "একক ওপেন সোর্স প্রজেক্ট হিসেবে শুরু থেকে শেষ পর্যন্ত ডিজাইন ও তৈরি করেছি, AI টুলকে pair programmer হিসেবে ব্যবহার করে।",
                "নিজের প্রোডাকশন অ্যাপে প্রথম আসল rotation চালিয়েছি, আর তাতে যা বেরিয়েছে তা ঠিক করেছি।",
                "CI, Docker image, npm রিলিজ আর লঞ্চের লেখা তৈরি করেছি।",
            ],
            skillsTitle: "যে দক্ষতাগুলো কাজে লেগেছে",
            skills: ["TypeScript", "Node.js", "CLI design", "Cloud APIs (MongoDB Atlas, Vercel, Render)", "Zero-downtime deployment", "Rollback design", "Vitest", "Docker", "GitHub Actions", "npm publishing", "Security"],
        },
    };

    const meta = {
        title: "leakfix: rotate leaked secrets without downtime — Safayet",
        description:
            "Case study: leakfix, an open-source CLI by Safayet Hossain that rotates leaked secrets (MongoDB Atlas, JWT) on Vercel and Render with zero downtime and automatic rollback.",
        url: "https://safayet.me/work/leakfix",
        image: "https://safayet.me/leakfix.png",
    };
</script>

<CaseStudy
    {content}
    {meta}
    backHref="/#projects"
    media={{ src: "/leakfix-demo.gif", alt: "leakfix finds committed secrets, rolls back a failed rotation, then rotates them with zero downtime" }}
/>
