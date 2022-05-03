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
      },
      display: ["group-hover"],
    },
  },

  plugins: [],
};
