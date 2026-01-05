/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF69B4', // Hot pink-ish
                secondary: '#FFB6C1', // Light pink
                accent: '#FFD700', // Gold
            },
            fontFamily: {
                cursive: ['"Great Vibes"', 'cursive'],
                sans: ['"Poppins"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
