// src/lib/i18n.ts
import { writable } from 'svelte/store';

export const locale = writable('en');

export const translations: any = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "hero.welcome": "WELCOME TO MY WORLD",
        "hero.intro": "Hi, I’m",
        "knowme.title": "Know Me",
        // Add more keys here...
    },
    bn: {
        "nav.home": "হোম",
        "nav.about": "সম্পর্কে",
        "hero.welcome": "আমার পৃথিবীতে স্বাগতম",
        "hero.intro": "হাই, আমি",
        "knowme.title": "আমাকে জানুন",
        // Add more keys here...
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