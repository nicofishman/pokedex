/** @type {import("prettier").Config} */
module.exports = {
    plugins: [require.resolve('prettier-plugin-tailwindcss')],
    printWidth: 120,
    singleQuote: true,
    semi: true,
    tabWidth: 4,
    endOfLine: 'auto',
};
