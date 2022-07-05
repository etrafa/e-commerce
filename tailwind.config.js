module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        footer: "#222222",
        border: "#444444",
        customRed: "#FF7362",
        hoverText: "#fea500",
        searchBar: "#777",
        strongRed: "#ff0000",
        tableGray: "#EFEFEF",
        borderRed: "#B32B2B",
      },
      display: ["group-hover"],
      keyframes: {
        addCart: {
          "0%": { top: "-11rem", left: "-9rem", opacity: "0.7" },
          "99%": { top: "-0.5rem", left: "2rem", opacity: "0.7" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        addCart: "addCart 1s  forwards ",
      },
    },
  },

  plugins: [],
};
