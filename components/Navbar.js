import Link from 'next/link'
import { Text, Flex, Box, useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const MenuItem = ({ children, isLast, to='/' }) => {
    const colorModeMenuItem = useColorModeValue("brand.500", "brand.100")
    return (
        <Text
        mb={{ base: isLast ? 0:8, sm: 0}}
        mr={{ base: 0, sm: isLast ? 0:8 }}
        display="block"
        color={ colorModeMenuItem }
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
    const colorModeText = useColorModeValue("brand.500", "brand.100")


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
       <Text fontWeight="bold" display="block" color={ colorModeText }>
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
          <MenuItem to="/resume">RESUME</MenuItem>
          <MenuItem to="/contact">CONTACT</MenuItem>
          <MenuItem isLast><IconButton onClick={ toggleColorMode } icon={ colorModeButtonIcon } bg="transparent"/></MenuItem>
        </Flex>
      </Box>
    </Flex>
    )
}

export default Header;