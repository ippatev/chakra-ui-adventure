import { extendTheme, theme as base } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        brand: {
            50: '#0900FF',
            100: '#0900FF',
            200: '#0900FF',
            300: '#0900FF',
            400: '#0900FF',
            500: '#0900FF',
            600: '#0900FF',
            700: '#0900FF',
            800: '#0900FF',
            900: '#0900FF'
        }
    },
    fonts: {
        heading: `Montserrat, ${base.fonts?.heading}`,
        body: `Inter, ${base.fonts?.body}`
    },
});

export default theme
