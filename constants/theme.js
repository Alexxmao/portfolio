    import { background, extendTheme } from "@chakra-ui/react"
    import { mode } from "@chakra-ui/theme-tools"

    export const theme = extendTheme({
        styles: {
            global: ({
                "html, body": {
                    background: mode("white", "green")
                }
            })
        }
    })