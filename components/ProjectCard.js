import { Box, Badge, Image, IconButton, useColorModeValue } from "@chakra-ui/react"
import { FaGithub, FaLink } from "react-icons/fa"
import Link from "next/link"

function ProjectCard({imageUrl, imageAlt, title}) {
    const colorModeBorder = useColorModeValue("brand.400", "brand.200")
    const colorModeButton = useColorModeValue("brand.200", "brand.400")
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' borderColor={colorModeBorder}>
        <Image src={imageUrl} alt={imageAlt} fit="fill"/>
  
        <Box p='6'>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {title}
          </Box>
          <Box display='flex' mt='2' alignItems='center'>
            <Link href="https://github.com/alexxmao/todo-list-app" passHref={false}><IconButton mr="5vh" my="1vh" icon={<FaGithub/>} bg={ colorModeButton } isRound /></Link>
            <Link href="https://todo-list-app-kohl.vercel.app/" passHref={false}><IconButton icon={<FaLink/>} bg={ colorModeButton } isRound /></Link>
          </Box>
        </Box>
      </Box>
    )
  }


export default ProjectCard