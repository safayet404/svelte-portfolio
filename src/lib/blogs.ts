export type Blog = {
  slug: string;
  title: string;
  title_bn: string;
  excerpt: string;
  excerpt_bn: string;
  content?: string;
  content_bn?: string;
  date: string;
  tags: string[];
  cover: string; // image path in /static or empty string
};

export const blogs: Blog[] = [
  {
    slug: "bootloader-bistarito-vabe-janun",
    title: "Bootloader Explained: The Bridge Between Hardware and Your OS",
    title_bn: "বুটলোডার বিস্তারিতভাবে জানুন: হার্ডওয়্যার ও OS-এর মধ্যে সেতু",
    excerpt: "When you press the power button, your computer is completely clueless. Here's how a bootloader brings it to life — step by step.",
    excerpt_bn: "আপনি যখন পাওয়ার বাটন চাপেন, কম্পিউটার তখন একদম বোকা থাকে। বুটলোডার কীভাবে সেটাকে জীবন্ত করে তোলে — ধাপে ধাপে জানুন।",
    content: `<p>When you press your computer's power button, it's completely clueless. It doesn't know where Windows is on the hard drive, where Arch Linux is, or where your important files are. The responsibility of bringing the computer to life in this state falls on the bootloader.</p>

<h2>1. The Very Beginning (The Handshake)</h2>
<p>When you press the power button, the motherboard's BIOS or UEFI (the motherboard's own software) wakes up. It checks whether RAM, keyboard, and everything else is working. Its job is then to find the Operating System. But BIOS can't load the OS itself. So it goes to a specific location on the hard drive, finds the Bootloader, and says: "I've finished the checkup — now it's your responsibility."</p>

<h2>2. What Does a Bootloader Actually Do?</h2>
<p>A bootloader is a small piece of software that lives in a special section of the hard drive (the EFI Partition). Its three main jobs are:</p>
<ul>
  <li><strong>Finding the OS:</strong> It knows which partition on the hard drive contains the Linux kernel or Windows files.</li>
  <li><strong>Showing a menu (Multi-boot):</strong> For users like you with 3 OSes, it presents a list or menu (like the GRUB menu). Whatever you select, it boots.</li>
  <li><strong>Loading the Kernel:</strong> When you press Enter, the bootloader copies the Linux or Windows Kernel (the actual brain of the OS) into RAM, hands over complete control to that Kernel, and quietly exits.</li>
</ul>

<h2>3. A Real-World Analogy</h2>
<p>Think of a huge library (your hard drive):</p>
<ul>
  <li><strong>BIOS/UEFI</strong> is the library's security guard — it just opens the gate.</li>
  <li><strong>Bootloader</strong> is the receptionist. You walk in and say "I want to read Linux." It takes you to the right shelf and brings the book (Kernel) to your table.</li>
  <li><strong>Operating System</strong> is the book you're reading.</li>
</ul>

<h2>4. Why This Matters (Especially for You)</h2>
<p>Since you're using Arch Linux and NixOS, here's why the bootloader is important for you:</p>
<ul>
  <li><strong>Customization:</strong> Through the bootloader, you can pass various "parameters" to the kernel — like disabling a graphics card or entering safe mode.</li>
  <li><strong>Recovery:</strong> If your system ever crashes or you can't log in, you can enter Recovery Mode right from the bootloader menu and fix the system.</li>
</ul>

<h2>5. Famous Bootloaders</h2>
<ul>
  <li><strong>GRUB:</strong> The most popular and powerful for Linux. It can comfortably handle 3–4 OSes.</li>
  <li><strong>Windows Boot Manager:</strong> Windows' own bootloader. It doesn't like sharing space with other OSes (a bit selfish).</li>
  <li><strong>systemd-boot:</strong> Lightweight and fast. Best for those who want a simple setup on NixOS or Arch.</li>
</ul>

<p><strong>In one line:</strong> A bootloader is the bridge that connects hardware (motherboard) and software (OS), making your computer usable.</p>`,
    content_bn: `<p>আপনি যখন কম্পিউটারের পাওয়ার বাটন টিপেন, তখন কম্পিউটার আসলে একদম বোকা থাকে। সে জানে না তার হার্ডড্রাইভের কোথায় Windows আছে, কোথায় Arch Linux আছে, আর কোথায় আপনার দরকারি ফাইলগুলো আছে। এই অবস্থায় কম্পিউটারকে "জীবন্ত" করার দায়িত্বটা নেয় বুটলোডার।</p>

<h2>১. একদম শুরুর গল্প (The Handshake)</h2>
<p>আপনি পাওয়ার বাটন চাপলে মাদারবোর্ডের BIOS বা UEFI (যেটা মাদারবোর্ডের নিজস্ব সফটওয়্যার) জেগে ওঠে। সে চেক করে র‍্যাম, কিবোর্ড সব ঠিক আছে কি না। এরপর তার কাজ হলো অপারেটিং সিস্টেমকে (OS) খুঁজে বের করা। কিন্তু BIOS নিজে অপারেটিং সিস্টেম লোড করতে পারে না। সে তখন হার্ডড্রাইভের একটা নির্দিষ্ট জায়গায় গিয়ে Bootloader-কে খুঁজে বের করে এবং বলে, "ভাই, আমি চেকআপ শেষ করেছি, এখন তুমি দায়িত্ব নাও।"</p>

<h2>২. বুটলোডার আসলে কী করে?</h2>
<p>বুটলোডার মূলত একটা ছোট সফটওয়্যার যেটা হার্ডড্রাইভের একটা বিশেষ অংশে (EFI Partition) থাকে। এর প্রধান কাজ ৩টি:</p>
<ul>
  <li><strong>OS খুঁজে বের করা:</strong> সে জানে হার্ডড্রাইভের কোন পার্টিশনে লিনাক্স কার্নেল বা উইন্ডোজের ফাইলগুলো আছে।</li>
  <li><strong>মেনু দেখানো (Multi-boot):</strong> আপনার মতো যাদের পিসিতে ৩টা OS আছে, তাদের সামনে সে একটা লিস্ট বা মেনু দেয় (যেমন: GRUB মেনু)। আপনি যেটা সিলেক্ট করবেন, সে সেটাকেই চালু করবে।</li>
  <li><strong>Kernel লোড করা:</strong> আপনি যখন এন্টার চাপেন, বুটলোডার তখন লিনাক্স বা উইন্ডোজের Kernel (অপারেটিং সিস্টেমের আসল মগজ) টাকে র‍্যামে (RAM) কপি করে দেয় এবং কম্পিউটার চালানোর পুরো ক্ষমতা ওই Kernel-এর হাতে তুলে দিয়ে নিজে বিদায় নেয়।</li>
</ul>

<h2>৩. একটা বাস্তব উদাহরণ (Analogical View)</h2>
<p>চিন্তা করেন একটা বিশাল লাইব্রেরি (আপনার হার্ডড্রাইভ)।</p>
<ul>
  <li><strong>BIOS/UEFI</strong> হলো লাইব্রেরির দারোয়ান। সে শুধু গেট খুলে দেয়।</li>
  <li><strong>Bootloader</strong> হলো লাইব্রেরির রিসেপশনিস্ট। আপনি গিয়ে বললেন, "আমি লিনাক্স পড়ব।" সে আপনাকে সঠিক আলমারিতে নিয়ে যাবে এবং বইটা (Kernel) আপনার টেবিলে এনে দিবে।</li>
  <li><strong>Operating System</strong> হলো সেই বই যেটা আপনি পড়ছেন।</li>
</ul>

<h2>৪. কেন এটা এত দরকারি? (বিশেষ করে আপনার জন্য)</h2>
<p>যেহেতু আপনি Arch Linux এবং NixOS ব্যবহার করছেন, আপনার কাছে বুটলোডার কেন গুরুত্বপূর্ণ:</p>
<ul>
  <li><strong>Customization:</strong> লিনাক্সে বুটলোডারের মাধ্যমে আপনি কার্নেলকে বিভিন্ন "Parameter" পাঠাতে পারেন (যেমন: গ্রাফিক্স কার্ড অফ করা বা সেফ মোডে ঢোকা)।</li>
  <li><strong>Recovery:</strong> আপনার সিস্টেম যদি কখনো ক্র্যাশ করে বা লগইন করতে না পারেন, এই বুটলোডার মেনু থেকেই আপনি "Recovery Mode"-এ ঢুকে সিস্টেম ঠিক করতে পারবেন।</li>
</ul>

<h2>৫. কিছু ফেমাস বুটলোডার</h2>
<ul>
  <li><strong>GRUB:</strong> লিনাক্সের সবচেয়ে জনপ্রিয় এবং শক্তিশালী। এটা ৩-৪টা OS আরামসে সামলাতে পারে।</li>
  <li><strong>Windows Boot Manager:</strong> উইন্ডোজের নিজস্ব। এটা অন্য OS-কে সহজে জায়গা দিতে চায় না (একটু স্বার্থপর টাইপ)।</li>
  <li><strong>systemd-boot:</strong> একদম হালকা এবং ফাস্ট। যারা NixOS বা Arch-এ খুব সিম্পল সেটআপ চায়, তাদের জন্য বেস্ট।</li>
</ul>

<p><strong>এক কথায়:</strong> বুটলোডার হলো সেই ব্রিজ, যেটা হার্ডওয়্যার (মাদারবোর্ড) আর সফটওয়্যার (OS)-এর মধ্যে সংযোগ ঘটিয়ে আপনার কম্পিউটারকে ব্যবহারের উপযোগী করে তোলে।</p>`,
    date: "2026-04-07",
    tags: ["Linux", "BIOS", "GRUB", "Kernel"],
    cover: "",
  },
  {
    slug: "bootloader-ki-3-os-thakle-asal-don-ke",
    title: "What is a Bootloader? With 3 OSes, Who's the Real Boss?",
    title_bn: "Bootloader কী আর ৩টা OS থাকলে \"আসল ডন\" কে?",
    excerpt: "A simple explainer on how bootloaders work, what happens when you have 3 operating systems installed, and who actually controls your PC at startup.",
    excerpt_bn: "সহজ কথায় বুটলোডার কী, ৩টা OS থাকলে কোনটা আগে লোড হয়, আর আসলে কে আপনার পিসি কন্ট্রোল করে — সব কিছু সহজে জানুন।",
    content: `<p>Simply put, a Bootloader is your computer's "gatekeeper" — it decides which Operating System (Windows, Linux, or anything else) loads after you power on. When you press the power button, the BIOS/UEFI looks for this gatekeeper first.</p>

<h2>Scenario: 3 OSes on Your PC</h2>
<p>Say you have Windows, Arch Linux, and NixOS installed. The question is: whose face shows up on screen first? Who rules your PC?</p>

<h2>1. "UEFI is God" (The BIOS/UEFI Priority)</h2>
<p>No software or OS can crown itself king. The real control lives in your motherboard's UEFI Settings. If you install Arch Linux last, its bootloader (say, GRUB) puts itself at position #1. So on boot, GRUB's menu appears first, giving you the option to go to Windows or Arch.</p>

<h2>2. Multiple Bootloaders? Enter Chainloading</h2>
<p>Say each OS has its own bootloader:</p>
<ul>
  <li><strong>Windows Boot Manager</strong> — for Windows</li>
  <li><strong>GRUB</strong> — for Arch Linux</li>
  <li><strong>systemd-boot</strong> — for NixOS</li>
</ul>
<p>Whoever is #1 takes the screen. But Linux bootloaders like GRUB are smart — they can host Windows Boot Manager inside themselves via <strong>Chainloading</strong>. Select Windows in GRUB, and GRUB passes the baton to Windows Boot Manager, which then loads Windows.</p>

<h2>With 3 OSes — Who Rules?</h2>
<p>Whoever was installed last, or whoever you set as "Boot Priority 1" in BIOS. A few common headaches:</p>
<ul>
  <li><strong>Windows Update drama:</strong> Sometimes after an update, Windows thinks it owns the world and pushes itself to #1, hiding the Linux bootloader. Don't panic — Linux isn't deleted. Just go into BIOS and bump the Linux bootloader back to the top.</li>
  <li><strong>rEFInd (The Peacemaker):</strong> If you want zero drama, use rEFInd. It detects all bootloaders automatically and builds a pretty icon-based menu. Nobody rules over anyone — everyone coexists peacefully.</li>
</ul>`,
    content_bn: `<p>সহজ কথায় বলতে গেলে, Bootloader হলো আপনার কম্পিউটারের সেই "দারোয়ান" যে ঠিক করে কম্পিউটার চালু হওয়ার পর কোন অপারেটিং সিস্টেমটা (Windows, Linux, বা অন্য কিছু) লোড হবে। আপনি যখন পাওয়ার বাটন চাপেন, তখন BIOS/UEFI প্রথমে এই দারোয়ানকে খুঁজে বের করে।</p>

<h2>সিনারিও: আপনার পিসিতে ৩টা OS</h2>
<p>ধরেন আপনার পিসিতে Windows, Arch Linux আর NixOS আছে। প্রশ্ন হলো, স্ক্রিনে কার চেহারা আগে আসবে? কে শাসন করবে আপনার পিসিকে?</p>

<h2>১. "সবার উপরে UEFI ঠাকুর" (The BIOS/UEFI Priority)</h2>
<p>আসলে কোনো সফটওয়্যার বা OS নিজে থেকে রাজা হতে পারে না। আসল কন্ট্রোল থাকে আপনার মাদারবোর্ডের UEFI Settings-এ।</p>
<p>আপনি যদি Arch Linux সবার শেষে ইন্সটল করেন, তবে Arch-এর বুটলোডার (ধরি GRUB) নিজেকে তালিকার ১ নম্বরে বসিয়ে দেয়। ফলে কম্পিউটার চালু করলেই আগে GRUB-এর মেনু আসবে। সেখানে অপশন থাকবে আপনি Windows-এ যাবেন নাকি Arch-এ।</p>

<h2>২. মাল্টিপল বুটলোডার থাকলে কী হয়? (The Chainloading Concept)</h2>
<p>ধরেন আপনার ৩টা OS-এর জন্য ৩টা আলাদা বুটলোডার আছে:</p>
<ul>
  <li><strong>Windows Boot Manager</strong> — উইন্ডোজের জন্য</li>
  <li><strong>GRUB</strong> — আর্চ লিনাক্সের জন্য</li>
  <li><strong>systemd-boot</strong> — নিক্স-ওএস এর জন্য</li>
</ul>
<p>যে ১ নম্বরে থাকবে, সে-ই স্ক্রিন দখল করবে। কিন্তু মজার ব্যাপার হলো, লিনাক্সের বুটলোডারগুলো (যেমন GRUB) বেশ স্মার্ট। সে উইন্ডোজের বুটলোডারকেও নিজের ভেতরে জায়গা দেয়। এটাকে বলে <strong>Chainloading</strong>। অর্থাৎ, আপনি GRUB-এর মেনুতে Windows সিলেক্ট করলে, GRUB তখন "ব্যাটন"টা Windows Boot Manager-এর হাতে পাস করে দেয়। তখন উইন্ডোজ লোড হওয়া শুরু করে।</p>

<h2>৩টা OS থাকলে "রুল" করবে কে?</h2>
<p>যে সবশেষে ইন্সটল হয়েছে বা যাকে আপনি BIOS থেকে "Boot Priority 1" করে রেখেছেন, সেই রুল করবে। তবে কিছু কমন গ্যাঞ্জাম আছে:</p>
<ul>
  <li><strong>Windows Update-এর ফাজলামি:</strong> মাঝেমধ্যে Windows আপডেট হওয়ার পর মনে করে সে-ই দুনিয়ার মালিক। তখন সে লিনাক্সের বুটলোডারকে সরিয়ে নিজেকে ১ নম্বরে নিয়ে আসে। ভয় পাওয়ার কিছু নেই, লিনাক্স ডিলিট হয় না, শুধু BIOS থেকে আবার লিনাক্সের বুটলোডারকে উপরে তুলে দিলেই সব ঠিক।</li>
  <li><strong>rEFInd (The Peace Maker):</strong> আপনি যদি খুব অলস হন এবং কোনো ঝামেলা না চান, তবে rEFInd নামে একটা টুল ইউজ করতে পারেন। এটা ৩টা বুটলোডারকেই খুঁজে বের করে সুন্দর আইকন দিয়ে একটা মেনু বানিয়ে দেয়। তখন কেউ কাউকে রুল করে না, সবাই মিলেমিশে থাকে।</li>
</ul>`,
    date: "2026-04-07",
    tags: ["Linux", "OS", "BIOS", "GRUB"],
    cover: "",
  },
  {
    slug: "why-i-chose-sveltekit",
    title: "Why I Chose SvelteKit for My Portfolio",
    title_bn: "কেন আমি আমার পোর্টফোলিওর জন্য SvelteKit বেছে নিলাম",
    excerpt: "After working with React and Next.js for years, I decided to build my portfolio with SvelteKit. Here's why it was the right call.",
    excerpt_bn: "বছরের পর বছর React ও Next.js নিয়ে কাজ করার পর, আমি আমার পোর্টফোলিও SvelteKit দিয়ে তৈরি করার সিদ্ধান্ত নিলাম। কেন এটি সঠিক সিদ্ধান্ত ছিল তা জানুন।",
    content: `<p>When I set out to rebuild my portfolio, I had a simple goal: fast, clean, and enjoyable to write. React was my comfort zone, but I wanted to try something different.</p>

<h2>What is SvelteKit?</h2>
<p>SvelteKit is a full-stack framework built on top of Svelte — a compiler-based UI framework that ships zero runtime overhead to the browser. Instead of shipping a virtual DOM library, Svelte compiles your components into plain JavaScript at build time.</p>

<h2>Why Not Next.js?</h2>
<p>Next.js is excellent, but for a portfolio it felt like overkill. The bundle size, the complexity of the React ecosystem, and the hydration overhead were things I wanted to avoid for a simple personal site.</p>

<h2>What I Love About SvelteKit</h2>
<ul>
  <li><strong>No boilerplate</strong> — reactivity is built into the language with the <code>$:</code> syntax.</li>
  <li><strong>Smaller bundles</strong> — significantly less JavaScript shipped to the client.</li>
  <li><strong>File-based routing</strong> — intuitive and clean, just like Next.js but simpler.</li>
  <li><strong>Scoped styles</strong> — CSS inside <code>&lt;style&gt;</code> blocks is automatically scoped to the component.</li>
</ul>

<h2>Final Thoughts</h2>
<p>If you're building a portfolio or a small-to-medium web app, give SvelteKit a serious look. It's fun, fast, and the developer experience is genuinely great.</p>`,
    content_bn: `<p>যখন আমি আমার পোর্টফোলিও নতুন করে বানাতে বসলাম, তখন আমার একটাই লক্ষ্য ছিল — দ্রুত, পরিষ্কার এবং লিখতে আনন্দদায়ক। React ছিল আমার কমফোর্ট জোন, কিন্তু আমি কিছু নতুন চেষ্টা করতে চেয়েছিলাম।</p>

<h2>SvelteKit কী?</h2>
<p>SvelteKit হলো Svelte-এর উপর নির্মিত একটি ফুল-স্ট্যাক ফ্রেমওয়ার্ক। Svelte একটি কম্পাইলার-ভিত্তিক UI ফ্রেমওয়ার্ক যা ব্রাউজারে কোনো runtime overhead পাঠায় না।</p>

<h2>কেন Next.js নয়?</h2>
<p>Next.js চমৎকার, কিন্তু একটি পোর্টফোলিওর জন্য এটি একটু বেশি ভারী মনে হয়েছিল। বান্ডেল সাইজ এবং React ইকোসিস্টেমের জটিলতা এড়াতে চেয়েছিলাম।</p>

<h2>SvelteKit এ যা ভালো লাগলো</h2>
<ul>
  <li><strong>কম boilerplate</strong> — <code>$:</code> সিনট্যাক্সে reactivity বিল্ট-ইন।</li>
  <li><strong>ছোট bundle</strong> — ক্লায়েন্টে অনেক কম JavaScript পাঠানো হয়।</li>
  <li><strong>File-based routing</strong> — সহজ এবং পরিষ্কার।</li>
  <li><strong>Scoped styles</strong> — CSS স্বয়ংক্রিয়ভাবে কম্পোনেন্টে scoped হয়।</li>
</ul>

<h2>সর্বশেষ কথা</h2>
<p>যদি আপনি একটি পোর্টফোলিও বা ছোট ওয়েব অ্যাপ বানাচ্ছেন, SvelteKit একবার ট্রাই করুন। এটি মজাদার, দ্রুত এবং developer experience সত্যিই দারুণ।</p>`,
    date: "2026-03-15",
    tags: ["SvelteKit", "Web Dev", "Frontend"],
    cover: "",
  },
  {
    slug: "building-collabify",
    title: "Building Collabify: Real-time Collaboration with Socket.io",
    title_bn: "Collabify তৈরির গল্প: Socket.io দিয়ে রিয়েল-টাইম কোলাবোরেশন",
    excerpt: "How I built a Trello-like collaborative board app with real-time updates using React, Node.js, and Socket.io.",
    excerpt_bn: "React, Node.js এবং Socket.io ব্যবহার করে কীভাবে Trello-এর মতো একটি রিয়েল-টাইম কোলাবোরেটিভ বোর্ড অ্যাপ তৈরি করলাম।",
    content: `<p>Collabify started as a personal challenge: could I build a real-time collaborative board tool from scratch in a weekend? Spoiler — it took a bit longer, but the result was worth it.</p>

<h2>The Stack</h2>
<ul>
  <li><strong>Frontend:</strong> React, Tailwind CSS</li>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB</li>
  <li><strong>Real-time:</strong> Socket.io</li>
</ul>

<h2>The Hardest Part: Real-time Sync</h2>
<p>Getting real-time updates to feel seamless was the biggest challenge. The key was emitting granular events — instead of re-fetching the whole board, I emit only the changed card or list and update state locally on every connected client.</p>

<h2>Workspace & Permission Model</h2>
<p>Users can belong to multiple workspaces. Each workspace has boards, each board has lists, each list has cards. Role-based access ensures members can only do what they're permitted to.</p>

<h2>What I Learned</h2>
<p>Socket.io rooms are incredibly powerful for scoping broadcasts. Each board gets its own room — only members of that board receive updates, keeping traffic efficient.</p>`,
    content_bn: `<p>Collabify শুরু হয়েছিল একটি ব্যক্তিগত চ্যালেঞ্জ হিসেবে: একটি উইকেন্ডে স্ক্র্যাচ থেকে রিয়েল-টাইম কোলাবোরেটিভ বোর্ড টুল বানানো কি সম্ভব? একটু বেশি সময় লেগেছিল, কিন্তু ফলাফল দারুণ হয়েছে।</p>

<h2>টেকনোলজি স্ট্যাক</h2>
<ul>
  <li><strong>Frontend:</strong> React, Tailwind CSS</li>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB</li>
  <li><strong>Real-time:</strong> Socket.io</li>
</ul>

<h2>সবচেয়ে কঠিন অংশ: রিয়েল-টাইম সিঙ্ক</h2>
<p>রিয়েল-টাইম আপডেট নিরবচ্ছিন্ন করাটাই সবচেয়ে বড় চ্যালেঞ্জ ছিল। পুরো বোর্ড রিফেচ না করে শুধুমাত্র পরিবর্তিত কার্ড বা লিস্টের event emit করা হয় এবং প্রতিটি connected client-এ state আপডেট হয়।</p>

<h2>আমি কী শিখলাম</h2>
<p>Socket.io rooms broadcast scoping-এর জন্য অসাধারণ। প্রতিটি বোর্ড নিজস্ব room পায় — শুধুমাত্র সেই বোর্ডের মেম্বাররাই আপডেট পায়, যা ট্র্যাফিক দক্ষ রাখে।</p>`,
    date: "2026-02-28",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    cover: "/collabify.png",
  },


];
