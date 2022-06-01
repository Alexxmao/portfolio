import { Flex, useColorModeValue, Heading, Input, Button, FormControl, FormHelperText, FormLabel, Textarea } from "@chakra-ui/react";

export default function Contact(){
    const colorModeForm = useColorModeValue("brand.400", "brand.200")

    return(
    <Flex alignItems="left" justifyContent="center">
        <Flex direction="column" py="5vh" px="15vh" rounded="6">
            <Heading mb="6">Contact</Heading>
            <FormControl mb="3vh">
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input id='name' type='text' size="lg" borderColor={colorModeForm}/>
            </FormControl>
            <FormControl mb="3vh">
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input id='email' type='email' size="lg" borderColor={colorModeForm}/>
            </FormControl>
            <FormControl mb="3vh">
                <FormLabel htmlFor='email'>Message</FormLabel>
                <Textarea borderColor={colorModeForm}/>
            </FormControl>
            <Button bg="brand.300">Send Message</Button>
        </Flex>
    </Flex>
    )
}