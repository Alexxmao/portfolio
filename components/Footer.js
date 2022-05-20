import { Text, Flex } from "@chakra-ui/react";
// needs to be worked on so its at the bottom of the page && mobile responsive
const Footer = (props) => {
    return (
        <Flex alignSelf="bottom" alignItems="bottom" justifyContent="center">
            <Text>Designed and Built by Alex Mao!</Text>
        </Flex>
    )
}

export default Footer