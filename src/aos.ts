// src/aos.ts
import { onMount } from "svelte";
import AOS from "aos";
import "aos/dist/aos.css";

// Create a function to initialize AOS
export function initAOS() {
  onMount(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      easing: "ease-in-out",
      delay: 200,
      once: false, // Re-run the animation every time the element comes into view
    });
  });
}
