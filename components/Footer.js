import { Text, useColorMode } from '@chakra-ui/react'


const Footer = () => {
    const colorModeText = useColorMode("brand.200", "brand.400")

    return(
            <Text fontSize="sm" color={ colorModeText }>
                Designed and Developed by Alexander Mao
            </Text>
    )
}

export default Footer