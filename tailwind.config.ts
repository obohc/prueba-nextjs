import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        "1/3-gap-2": "calc(33.3% - (2/3 * 0.5rem))",
        "1/4-gap-2": "calc(25% - (3/4 * 0.5rem))",
        "3/4-gap-2": "calc(75% - (1/4 * 0.5rem))",
      }
    },
  },
  plugins: [],
};
export default config;
