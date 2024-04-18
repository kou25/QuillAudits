import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    "bg-sky-300",
    "bg-yellow-500",
    "bg-red-500",
    "bg-green-500",
    "bg-indigo-500"
  ],
  theme: {
    extend: {
      colors: {
        "quill-200": "#007AFF",
        "quill-300": "#191D24",
        "quill-400": "#12161A",
        "quill-500": "#0D0F11"
      }
    }
  },
  plugins: []
};
export default config;
