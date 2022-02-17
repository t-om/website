module.exports = {
    plugins: [  ],
    purge: {
        content: [ './src/**/*.{js,jsx,ts,tsx}' ],
        options: {
            safelist: [  ]
        }
    },
    darkMode: false,
    theme: {
        fontFamily: {
            // 'sans': [ 'Avenir', 'Avenir Next', 'Nunito', 'sans-serif', 'ui-sans-serif', 'system-ui' ]
        },
        extend: {
            screens: {
                '3xl': "1792px"
            },
            colors: {
                'primary': "#132D53",
                'secondary': "#169A34",
                'highlight': "#FFF629",
                'light': "#F4F6F9",
                'dark': "#00031E",
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