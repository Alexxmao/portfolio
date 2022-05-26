import { EmailIcon } from "@chakra-ui/icons"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Heading, Text, useColorModeValue, Stack, HStack, Button, IconButton } from "@chakra-ui/react"

export default function Home(){
  const colorModeText = useColorModeValue("brand.500", "brand.100")
  const colorModeButton = useColorModeValue("brand.200", "brand.400")
  return (
    <HStack>
      <Stack direction="column" align="left" p="25vh">
        <Heading color={ colorModeText } size="4xl"> Alexander Mao </Heading>
        <Text color={ colorModeText } fontSize="4xl"> Full Stack Developer </Text>
        <Text color={ colorModeText } fontSize="l"> 
          Building next level digital experiences.
        </Text>
      </Stack>
      <Stack direction="column" align="right" p="25vh">
        <IconButton icon={<FaGithub/>} bg={ colorModeButton } color={ colorModeText } isRound />
        <IconButton icon={<FaLinkedin/>} bg={ colorModeButton } color={ colorModeText } isRound />
        <IconButton icon={<EmailIcon/>} bg={ colorModeButton } color={ colorModeText } isRound />
      </Stack>
    </HStack>
  )
}