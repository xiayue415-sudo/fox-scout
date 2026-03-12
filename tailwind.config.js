/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
          extend: {
                  colors: {
                            fox: { primary: '#FF5722', secondary: '#795548', dark: '#212121', light: '#F5F5F5' }
                  }
          }
    },
    plugins: [],
}
