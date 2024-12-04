import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                'inter-bold': ['Inter', ...defaultTheme.fontFamily.sans],
                'libre-bold': ['Libre Baskerville', ...defaultTheme.fontFamily.sans],
                'roboto': ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
                'roboto-bold': ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
            },
            fontWeight: {
                'inter-bold': 700,
                'libre-bold': 700,
                'roboto': 400,
                'roboto-bold': 700
            },
        },
        colors: {
            color: {
                primary: '#2B4834',
                secondary: '#FDFFEC',
                accent: '#406B4E',
                white: '#FFFFFF',
                succes: '#25C32B',
                danger: '#EC3F3F',
                gray: '#A09E9E',
                purple: '#7166BA',
                'darker-purple': '#2B2E3C',
                'dark-danger': '#7A0404'
            }
        }
    },

    plugins: [forms],
};
