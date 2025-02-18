import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/globals.css",
  ],
  safelist: [
    "bg-light-red-bg",
    "bg-light-green-bg",
    { pattern: /^bg-light-.*-bg$/ },
    { pattern: /^border-.*-bg-border$/ },
    "bg-ui-component-default",
    "border-red-bg-border",
    "border-green-bg-border",
    "border-borders-non-interactive",
    "text-error",
    "text-success",
    "text-warning",
    "text-info",
    "text-high-contrast-text",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxHeight: {
        "screen-minus-20": "calc(100vh - 5rem)",
      },
      colors: {
        primary: "var(--primary)",
        "app-bg": "var(--app-bg)",
        "sidebar-bg": "var(--sidebar-bg)",
        "ui-component-default": "var(--ui-component-default)",
        "ui-component-hover": "var(--ui-component-hover)",
        "ui-component-pressed-selected": "var(--ui-component-pressed-selected)",
        "borders-non-interactive": "var(--borders-non-interactive)",
        "subtle-borders-interactive": "var(--subtle-borders-interactive)",
        "stronger-borders-interactive-focus-rings": "var(--stronger-borders-interactive-focus-rings)",
        "solid-backgrounds": "var(--solid-backgrounds)",
        "hovered-solid-backgrounds": "var(--hovered-solid-backgrounds)",
        "low-contrast-text": "var(--low-contrast-text)",
        "high-contrast-text": "var(--high-contrast-text)",
        "muted-text": "var(--muted-text)",
        error: "var(--error)",
        info: "var(--info)",
        success: "var(--success)",
        warning: "var(--warning)",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};

export default config;
