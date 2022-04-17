import {color, extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const inputSelectStyles = {
    variants: {
        filled: {
            field: {
                _focus: {
                    borderColor: 'brand.500'
                }
            }
        }
    },
    sizes: {
        md: {
            field: {
                borderRadius: 'none',
            }
        }
    }
}

const brandRing = {
    _focus: {
        ring: 2,
        ringColor: 'brand.500'
    }
}

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
    components: {
        Button: {
         variants: {
             primary: (props) => ({
                 rounded: 'none',
                 ...brandRing,
                 color: mode('white', 'gray.800')(props),
                 bgColor: mode('brand.500', 'blue.200')(props),

                 _hover: {
                     bgColor: mode("blue.600",'blue.300')(props),
                 },

                 _active: {
                     bgColor: mode("blue.700",'blue.400')(props),
                 }
             })
         }
        },
        Input: { ...inputSelectStyles },
        Select: { ...inputSelectStyles },
        Checkbox: {
            baseStyle: {
                control: {
                    borderRadius: 'none',
                    ...brandRing
                }
            }
        }
    }
},
withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox']
}),
withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select']
})
);

export default theme
