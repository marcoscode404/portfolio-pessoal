/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./components/**/*.{html,js}",
        "./pages/**/*.{html,js}"
    ],
    theme: {
        extend: {
            colors: {
                msRed600: '#dc2626',
                msRed500: '#ff4842',
                msRed100: '#FFE7D9',
                msBlue500: '#3B82F6',
                msCyan500: '#1890FF',
                msCyan50: '#D0F2FF',
                msTeal800: '#01534A',
                msGreen800: '#166534',
                msGreen600: '#00AB55',
                msGreen500: '#22C55E',
                msGreen100: '#C8FACD',
                msOrange500: '#F97316',
                msGray300: '#9CA3AF',
                msGray200: '#B9B9B9',
                msSkay400: '#4DC4FC',
                msSkay500: '#3CB3E7',
                msDarkGrey: '#1A1A1A',
                msDarkGrey500:'#181B1F',
                msDarkGrey550: '#27272A',
                msDarkGrey600: '#24272D',
                msJetBlack: '#141517',
                msJetBlack800: '#171717',
                msDarkHover: '#333336',
                msPureBlack: '#181b1f63',
                msBrown: '#333338',
                msDarkHeader: '#29292E',
                token_bgHeader: '#1A1A1E',
                token_bgDark: '#1A1A1E'
            },
            screens: {
                'desktop': { 'min': '1370px' },
                'desktop_big_screen': { 'min': '1760px' },
                'device': { 'min': '340px' },
            },
        },
        fontFamily: {
            'body': ['"Open Sans"'],
            jersey: ['Jersey10', 'sans-serif'],
        },
    },
    plugins: [],
}

