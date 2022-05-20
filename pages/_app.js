import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Navbar'
import Footer from '../components/Footer'
import { theme } from '../constants/theme'

function MyApp({ Component, pageProps }) {
  return ( 
    <ChakraProvider /* theme={ theme } needs to be fixed, not working ATM*/>
      <Header/> 
      <Component {...pageProps} /> 
      <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
