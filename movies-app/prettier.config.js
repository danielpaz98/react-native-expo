module.exports = {
  printWidth: 110,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "all",
  endOfLine: "auto",
  semi: true,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tailwindAttributes: ["className"],
};
