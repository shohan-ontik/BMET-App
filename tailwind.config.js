/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        main: {
          text: "#11181C",
          background: "#fff",
          tint: "#0a7ea4",
          icon: "#687076",
          tabIconDefault: "#687076",
          tabIconSelected: "#0a7ea4",
          link: "#0a7ea4",
        },
      },
        textColor: {
        primary: "#101828",
        "primary-on-brand": "#FFFFFF",
        secondary: "#344054",
      },
      fontSize: {
        overline: ["10px", { lineHeight: "150%" }],
        h1: ["56px", { lineHeight: "110%", fontWeight: "700" }],
        h2: ["48px", { lineHeight: "120%", fontWeight: "700" }],
        h3: ["40px", { lineHeight: "130%", fontWeight: "700" }],
        h4: ["32px", { lineHeight: "140%", fontWeight: "700" }],
        h5: ["24px", { lineHeight: "140%", fontWeight: "700" }],
        h6: ["20px", { lineHeight: "150%", fontWeight: "600" }],
        body1: ["16px", { lineHeight: "140%" }],
        body2: ["14px", { lineHeight: "140%" }],
        caption: ["12px", { lineHeight: "150%" }],
        subheading: ["18px", { lineHeight: "150%" }],
      },
      letterSpacing: {
        "body2-allcaps": "4%",
        "caption-allcaps": "2%",
        "subheading-allcaps-italic": "8%",
      },
    },
  },
  plugins: [],
};
