/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Quicksand"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            colors: {
                primary: "#2c98f0", // Blue
                secondary: "#f9bf3f", // Yellow
                accent: {
                    blue: "#2c98f0",
                    red: "#ec5453",
                    yellow: "#f9bf3f",
                    purple: "#a84cb8",
                    teal: "#2fa499",
                },
                sidebar: "#f2f3f7",
            }
        },
    },
    plugins: [],
}
