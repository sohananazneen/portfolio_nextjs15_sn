// tailwind.config.js
module.exports = {
  darkMode: "class", // Enables dark mode based on the 'dark' class on the HTML element
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        black: {
          900: "#000000",
          500: "#4F5665",
          600: "#0B132A",
        },
        orange: {
          100: "#FFECEC",
          500: "#F53855",
        },
        green: {
          500: "#2FAB73",
          main: "#0DB760",
        },
        white: {
          300: "#F8F8F8",
          500: "#fff",
        },
        gray: {
          100: "#EEEFF2",
          400: "#AFB5C0",
          500: "#DDDDDD",
        },
      },
      extend: {},
    },
    variants: {
      extend: {
        boxShadow: ["active", "hover"],
      },
    },
  },
  plugins: [],
};
