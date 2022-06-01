import Link from 'next/link'
import { Text, Flex, Box, useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const MenuItem = ({ children, isLast, to='/' }) => {
    return (
        <Text
        mb={{ base: isLast ? 0:8, sm: 0}}
        mr={{ base: 0, sm: isLast ? 0:8 }}
        display="block"
        fontWeight="bold"
        /*fontFamily={"Abel" | "sans-serif"}*/>
            <Link href={to}>{children}</Link>
        </Text>
    )
}

const Header = (props) => {
    const [show, setShow] = useState(false)
    const toggleMenu = () => setShow(!show)
    const { toggleColorMode } = useColorMode()
    const colorModeButtonIcon = useColorModeValue(<MoonIcon/>, <SunIcon/>)
    
    return(
        <Flex
      mb={8}
      p={8}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
    >
        {/* change to button w/ logo */}
      <Box w="200px">
       <Text fontWeight="bold" display="block">
        <Link href="/">AM</Link>
       </Text>
      </Box>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/about">ABOUT</MenuItem>
          <MenuItem to="/projects">PROJECTS</MenuItem>
          <MenuItem to="/resume">WORK</MenuItem>
          <MenuItem to="/contact" isLast>CONTACT</MenuItem>
          {/* <MenuItem isLast></MenuItem> */}
          <IconButton onClick={ toggleColorMode } icon={ colorModeButtonIcon } bg="transparent" ml="5vh"/>
        </Flex>
      </Box>
    </Flex>
    )
}

export default Header;