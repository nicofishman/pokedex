/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: ({ theme }) => ({
                'background': 'url(/background.jpg)',
                'gradient': `linear-gradient(
                    90deg,
                    ${theme?.colors?.neutral[700]} 0%,
                    ${theme?.colors?.neutral[700]}52 30%,
                    transparent
                )`
            })
        },
        fontFamily: {
            sans: 'Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;'
        }
    },
    plugins: [],
};
