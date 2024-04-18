import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
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
