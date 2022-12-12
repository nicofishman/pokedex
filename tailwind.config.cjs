/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'background': 'url(/background.jpg)',
                "gradient": 'linear-gradient(90deg,#363636,transparent)'
            }
        },
        fontFamily: {
            sans: 'Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;'
        }
    },
    plugins: [],
};
