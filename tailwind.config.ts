import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": ["0.65rem", "0.7rem"],
      },
      backgroundImage: () => ({
        "overlay-gradient":
          "linear-gradient(135deg, rgba(106, 0, 255, 0.5) 0%, rgba(0, 255, 222, 0.5) 100%)",
        "container-gradient-dark":
          "linear-gradient(135deg, rgba(54, 12, 81, 0.5) 0%, rgba(9, 9, 121, 0.5) 100%)",
      }),
    },
  },
  plugins: [],
} satisfies Config;
