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
    },
    plugins: [],
};
