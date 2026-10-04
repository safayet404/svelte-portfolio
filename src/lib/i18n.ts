// src/lib/i18n.ts
import { writable } from 'svelte/store';

export const locale = writable('en');
export const translations: any = {
    en: {
        "nav_home": "Home",
        "nav_about": "About",
        "nav_project": "Projects",
        "nav_experience": "Experience",
        "nav_education": "Education",
        "nav_contact": "Contact",
        "nav_resume": "Resume",
        "nav_blog": "Blog",

        "hero_welcome": "WELCOME TO MY WORLD",
        "hero_intro": "Hi, I'm",
        "hero_desc": "A software engineer building AI-powered, multi-tenant SaaS, from LLM pipelines to real-time systems",
        "hero_skill_title": "BEST SKILL ON",

        "knowme_title": "Know Me",
        "knowme_p1": "I'm a software engineer at Shabuj Global Education, where I build and maintain the CRM our teams use every day with Laravel and Vue.js, working directly with the business side to turn real problems into working software.",
        "knowme_p2": "Beyond feature work, I look for places where AI can change how the business runs, and then build it. I proposed and led CAS Shield, an AI-powered mock interview system that prepares students for UK visa interviews, and I'm now leading Nexora, a multi-tenant conversational AI platform that handles admissions leads across chat, email, WhatsApp and voice.",
        "knowme_p3": "I care about systems that are reliable, auditable and easy for the next engineer to understand: background job pipelines, clear data boundaries between tenants, and a human in the loop wherever AI makes a judgement. I graduated in Computer Science & Engineering with a CGPA of 3.98 out of 4.00.",

        "edu_title": "Education",
        "edu_skills": "Professional Skill",
        "edu_bsc": "BSc in Computer Science and Engineering",
        "edu_hsc": "Higher Secondary School Certificate",
        "edu_ssc": "Secondary School Certificate",

        "contact_title": "Contact with me",
        "contact_label_name": "YOUR NAME",
        "contact_label_phone": "PHONE NUMBER",
        "contact_label_email": "EMAIL",
        "contact_label_subject": "YOUR SUBJECT",
        "contact_label_message": "YOUR MESSAGE",
        "contact_btn": "Send Message",

        "project_title": "Projects",
        "project_client": "Client Code",
        "project_server": "Server Code",
        "project_live": "Live Site",
        "project_case_study": "Case Study",

        "blog_title": "Blog",
        "blog_view_all": "View all",
        "blog_read_more": "Read more",

        "nav_books": "Books",
        "books_title": "My Books",
        "books_read": "Read",
        "books_reading": "Reading",
        "books_want": "Want to Read"
    },
    bn: {
        "nav_home": "হোম",
        "nav_about": "এবাউট",
        "nav_project": "প্রজেক্টস",
        "nav_experience": "এক্সপিরিয়ান্স",
        "nav_education": "এডুকেশন",
        "nav_contact": "কন্টাক্ট",
        "nav_resume": "রিজিউমি",
        "nav_blog": "ব্লগ",

        "hero_welcome": "আমার ডিজিটাল দুনিয়ায় স্বাগতম",
        "hero_intro": "হ্যালো, আমি",
        "hero_desc": "একজন সফটওয়্যার ইঞ্জিনিয়ার, যে AI-চালিত মাল্টি-টেন্যান্ট SaaS তৈরি করে, LLM পাইপলাইন থেকে রিয়েল-টাইম সিস্টেম পর্যন্ত",
        "hero_skill_title": "আমার দক্ষতা",

        "knowme_title": "আমার সম্পর্কে",
        "knowme_p1": "আমি সবুজ গ্লোবাল এডুকেশনে সফটওয়্যার ইঞ্জিনিয়ার হিসেবে কাজ করি। Laravel আর Vue.js দিয়ে আমাদের টিমের প্রতিদিনের কাজের CRM তৈরি ও রক্ষণাবেক্ষণ করি, আর বিজনেস টিমের সাথে সরাসরি কাজ করে বাস্তব সমস্যাকে কার্যকর সফটওয়্যারে রূপ দিই।",
        "knowme_p2": "ফিচার তৈরির বাইরেও আমি খুঁজি কোথায় AI দিয়ে ব্যবসার কাজের ধরন বদলানো যায়, তারপর সেটা বানাই। আমি CAS Shield-এর প্রস্তাব দিয়ে নেতৃত্ব দিয়েছি, একটি AI-চালিত মক ইন্টারভিউ সিস্টেম যা শিক্ষার্থীদের যুক্তরাজ্যের ভিসা ইন্টারভিউয়ের জন্য প্রস্তুত করে। এখন নেতৃত্ব দিচ্ছি Nexora-তে, একটি মাল্টি-টেন্যান্ট কনভারসেশনাল AI প্ল্যাটফর্ম, যা চ্যাট, ইমেইল, WhatsApp আর ভয়েসে আসা ভর্তি-সংক্রান্ত লিড সামলায়।",
        "knowme_p3": "আমি এমন সিস্টেম বানাতে চাই যা নির্ভরযোগ্য, যার প্রতিটি কাজের রেকর্ড থাকে, আর যা পরের ইঞ্জিনিয়ার সহজে বুঝতে পারে: ব্যাকগ্রাউন্ড জব পাইপলাইন, টেন্যান্টদের ডেটার মধ্যে পরিষ্কার সীমারেখা, আর যেখানে AI সিদ্ধান্ত নেয় সেখানে মানুষের যাচাই। আমি কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিংয়ে ৪.০০-এর মধ্যে ৩.৯৮ সিজিপিএ নিয়ে স্নাতক করেছি।",

        "edu_title": "শিক্ষাগত যোগ্যতা",
        "edu_skills": "প্রফেশনাল স্কিল",
        "edu_bsc": "বিএসসি ইন কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং",
        "edu_hsc": "উচ্চ মাধ্যমিক (HSC)",
        "edu_ssc": "মাধ্যমিক (SSC)",

        "contact_title": "যোগাযোগ করুন",
        "contact_label_name": "আপনার নাম",
        "contact_label_phone": "ফোন নম্বর",
        "contact_label_email": "ইমেইল",
        "contact_label_subject": "বিষয়",
        "contact_label_message": "আপনার বার্তা",
        "contact_btn": "মেসেজ পাঠান",

        "project_title": "প্রজেক্টসমূহ",
        "project_client": "ক্লায়েন্ট কোড",
        "project_server": "সার্ভার কোড",
        "project_live": "লাইভ সাইট",
        "project_case_study": "কেস স্টাডি",

        "blog_title": "ব্লগ",
        "blog_view_all": "সব দেখুন",
        "blog_read_more": "পড়ুন",

        "nav_books": "বই",
        "books_title": "বইয়ের তালিকা",
        "books_read": "পড়া হয়েছে",
        "books_reading": "পড়ছি",
        "books_want": "পড়তে চাই"
    }
};
export function initLocale() {
    locale.set('en');
}