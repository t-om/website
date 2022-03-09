module.exports = {
    plugins: [  ],
    content: [ './src/**/*.{js,jsx,ts,tsx}' ],
    safelist: [  ],
    ...process.env.NODE_ENV === 'development' && {
        safelist: [
            { pattern: /.*/ }
        ]
    },
    theme: {
        fontFamily: {
            // 'sans': [ 'Avenir', 'Avenir Next', 'Nunito', 'sans-serif', 'ui-sans-serif', 'system-ui' ]
        },
        extend: {
            screens: {
                '3xl': "1792px"
            },
            colors: {
                'primary': "#2C404D",
                'primary-light': "#799DB3",
                'secondary': "#8F6D6D",
                'secondary-light': "#FDC0B6",
                'light': "#F5FCFB",
                'dark': "#1B1C1C",
            },
            justifyContent: {
                'safe-center': "safe center"
            },
            alignItems: {
                'safe-center': "safe center"
            }
        }
    }
};