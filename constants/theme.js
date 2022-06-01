import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/roboto";

const styles = {
    global: props => ({
        body: {
            bg: mode("#CAD2C5", "#2F3E46")(props),
            color: mode("#2F3E46", "#CAD2C5")(props),
        },
    })
}

const theme = extendTheme ({
    config:{
        initialColorMode: 'system',
        useSystemColorMode: true
    },
    colors: {
        brand: {
            //light
            100: "#CAD2C5",
            200: "#84A98C",
            300: "#52796F",
            400: "#354F52",
            500: "#2F3E46"
            //dark
        },
    },
    styles,
    fonts: {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif'
    }
})

export default theme