/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#3B82F6",
          "secondary": "#D1D5DB", // gray-300
          "accent": "#6B7280",    // gray-500
          "neutral": "#374151",   // gray-700
          "base-100": "#F5F5F5",
          "base-content": "#1A1A1A",
          "info": "#3B82F6",      // blue-500
          "success": "#10B981",  // green-500
          "warning": "#F59E0B",  // amber-500
          "error": "#EF4444",    // red-500
        },
      },
      {
        dark: {
          "primary": "#3B82F6",
          "secondary": "#374151", // gray-700
          "accent": "#9CA3AF",    // gray-400
          "neutral": "#D1D5DB",   // gray-300
          "base-100": "#1A1A1A",
          "base-content": "#E5E5E5",
          "info": "#3B82F6",      // blue-500
          "success": "#10B981",  // green-500
          "warning": "#F59E0B",  // amber-500
          "error": "#EF4444",    // red-500
        },
      },
    ]
  }
}

