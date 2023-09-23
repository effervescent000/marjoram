/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F5F5F5',
        'bg-secondary': '#D8E2DC',
        'text-primary': '#2E2327',
        'accent-primary': '#FFCAD4',
        'accent-secondary': '#F4ACB7'
      }
    }
  },
  plugins: []
};
