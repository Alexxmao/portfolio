import Link from "next/link"

// import { EmailIcon } from "@chakra-ui/icons"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Heading, Text, useColorModeValue, Stack, HStack, Button, IconButton } from "@chakra-ui/react"

export default function Home(){
  const colorModeButton = useColorModeValue("brand.200", "brand.400")
  return (
    <HStack p="25vh">
      <Stack direction="column" align="left" mx="25vh">
        <Heading  size="4xl" fontWeight="bold"> Alexander Mao </Heading>
        <Text as="kbd" fontSize="m">AH·LUHG·ZAN·DR  MA·OW</Text>
        <Text fontSize="4xl" fontWeight="bold"> Full Stack Developer </Text>
        <Text fontSize="l" fontWeight="bold"> 
          Building next level digital experiences.
        </Text>
      </Stack>
      <Stack direction="column" align="right" >
        <Link href="https://github.com/alexxmao" passHref={false}><IconButton icon={<FaGithub/>} bg={ colorModeButton } isRound /></Link>
        <Link href="https://linkedin.com/in/alexanderpnmao/"><IconButton icon={<FaLinkedin/>} bg={ colorModeButton } isRound /></Link>
        {/* <IconButton icon={<EmailIcon/>} bg={ colorModeButton } color={ colorModeText } isRound /> */}
      </Stack>
    </HStack>
  )
}