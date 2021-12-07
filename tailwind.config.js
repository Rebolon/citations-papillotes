module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      enabled: true,
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
      }
    },
    plugins: [/*require('@tailwindcss/forms'),require('@tailwindcss/typography')*/],
};
