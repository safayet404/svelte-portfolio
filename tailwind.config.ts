import type { Config } from "tailwindcss";

import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    }
  },

  plugins: [daisyui],

  daisyui: {
    themes: ["dark"]
  }
} as Config;
