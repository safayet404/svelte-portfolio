// src/lib/i18n.ts
import { writable } from 'svelte/store';

export const locale = writable('en');
export const translations: any = {
    en: {
        "nav_home": "Home",
        "nav_about": "About",
        "nav_project": "Projects",
        "nav_education": "Experience",
        "nav_contact": "Contact",
        "nav_resume": "Resume",

        "hero_welcome": "WELCOME TO MY WORLD",
        "hero_intro": "Hi, I'm",
        "hero_desc": "A passionate web developer with a flair for crafting elegant and efficient solutions",
        "hero_skill_title": "BEST SKILL ON",

        "knowme_title": "Know Me",
        "knowme_p1": "I'm a passionate web developer dedicated to crafting innovative digital experiences that leave a lasting impact. With a keen eye for detail and a drive for excellence, I specialize in creating dynamic websites that not only look stunning but also function flawlessly across all platforms.",
        "knowme_p2": "My journey into the world of web development began with a fascination for technology and a desire to bring creative visions to life. Over the years, I've honed my skills in a variety of programming languages, including HTML, CSS, JavaScript, and more, allowing me to turn ideas into reality with precision and efficiency.",
        "knowme_p3": "What sets me apart is not just my technical expertise, but also my commitment to understanding each client's unique needs and objectives. Whether you're a small business looking to establish an online presence or a large corporation in need of a complex web solution, I'll work closely with you every step of the way to deliver a tailored solution that exceeds your expectations.",

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
        "contact_btn": "Send Message"
    },
    bn: {
        "nav_home": "হোম",
        "nav_about": "পরিচয়",
        "nav_project": "প্রজেক্টস",
        "nav_education": "যোগ্যতা",
        "nav_contact": "যোগাযোগ",
        "nav_resume": "রিজিউমি",

        "hero_welcome": "আমার ডিজিটাল দুনিয়ায় স্বাগতম",
        "hero_intro": "হ্যালো, আমি",
        "hero_desc": "আমি একজন প্যাশনেট ওয়েব ডেভেলপার, যে কি না আধুনিক এবং ইউজার-ফ্রেন্ডলি ওয়েব সল্যুশন তৈরিতে বিশ্বাসী",
        "hero_skill_title": "আমার দক্ষতা",

        "knowme_title": "আমার সম্পর্কে",
        "knowme_p1": "আমি একজন ডেডিকেটেড ওয়েব ডেভেলপার। আমার লক্ষ্য হলো ইনোভেটিভ ডিজিটাল এক্সপেরিয়েন্সের মাধ্যমে মানুষের মনে জায়গা করে নেওয়া। নিখুঁত কাজ এবং নতুন কিছু করার প্রবল ইচ্ছা নিয়ে আমি এমন সব ডাইনামিক ওয়েবসাইট তৈরি করি, যা দেখতে যেমন চমৎকার, কাজ করতেও তেমনি স্মুথ।",
        "knowme_p2": "প্রযুক্তির প্রতি গভীর আগ্রহ থেকেই আমার এই ওয়েব ডেভেলপমেন্ট যাত্রা শুরু। সময়ের সাথে সাথে আমি HTML, CSS, JavaScript-এর মতো আধুনিক সব টেকনোলজিতে নিজেকে দক্ষ করে তুলেছি। এর ফলে যেকোনো আইডিয়াকে আমি খুব সহজেই একটি কার্যকর এবং আধুনিক প্রজেক্টে রূপান্তর করতে পারি।",
        "knowme_p3": "শুধুমাত্র টেকনিক্যাল স্কিল নয়, বরং ক্লায়েন্টের চাহিদা বুঝে সঠিক সল্যুশন দেওয়াটাই আমার মূল বৈশিষ্ট্য। আপনি কোনো ছোট ব্যবসার অনলাইন উপস্থিতি গড়তে চান কিংবা বড় কোনো কর্পোরেশনের জন্য জটিল সফটওয়্যার সল্যুশন খুঁজছেন—আমি শুরু থেকে শেষ পর্যন্ত আপনার পাশে থেকে আপনার প্রত্যাশার চেয়েও ভালো কিছু উপহার দিতে প্রতিশ্রুতিবদ্ধ।",

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
        "contact_btn": "মেসেজ পাঠান"
    }
};
export function initLocale() {
    if (typeof window !== 'undefined') {
        // Simple logic: Check browser language or Geolocation API 
        // Note: For true "Country" detection, you'd usually use a server-side hook with Vercel/Cloudflare headers.
        const browserLang = navigator.language;
        if (browserLang.includes('bn') || Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Dhaka') {
            locale.set('bn');
        } else {
            locale.set('en');
        }
    }
}