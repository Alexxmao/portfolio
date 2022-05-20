import Link from 'next/link'
import { Text, Flex, Box, useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const MenuItem = ({ children, isLast, to='/' }) => {
    return (
        <Text
        mb={{ base: isLast ? 0:8, sm: 0}}
        mr={{ base: 0, sm: isLast ? 0:8 }}
        display="block">
            <Link href={to}>{children}</Link>
        </Text>
    )
}

const Header = (props) => {
    const [show, setShow] = useState(false)
    const toggleMenu = () => setShow(!show)
    const { toggleColorMode } = useColorMode()
    const colorModeButton = useColorModeValue(<SunIcon/>, <MoonIcon/>)

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
        <Text fontSize="lg" fontWeight="bold">
          ALEX MAO
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
            {/* remove home menu item */}
          <MenuItem to="/">HOME</MenuItem>
          <MenuItem to="/about">ABOUT</MenuItem>
          <MenuItem to="/projects">PROJECTS</MenuItem>
          <MenuItem to="/resume">RESUME</MenuItem>
          <MenuItem to="/contact">CONTACT</MenuItem>
          <MenuItem isLast><IconButton onClick={ toggleColorMode } icon={ colorModeButton }/></MenuItem>
        </Flex>
      </Box>
    </Flex>
    )
}

export default Header;