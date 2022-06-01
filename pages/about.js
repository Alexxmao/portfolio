import { Stack, HStack, Text, Heading, VStack, Image} from "@chakra-ui/react";

export default function About(){
    return (
    <VStack>
       <HStack px="25vh" py="5vh">
           <Stack direction="column" pr="10vh">
               <Heading>Hello!</Heading>
               <Text>My name is Alexander Mao, or Alex for short.</Text>
               <Text>My life as a Software Developer began with my discovery of Khan Academy`s JavaScript lessons during my family`s set mandatory study hours</Text>
               <Text>Today, I am still learning more and more everyday with Full Stack development, and beginning to branch into DevOps and the Web3 world.</Text>
               <Text>Outside coding, I have interests lying in volleyball, gaming, and music.</Text>
               <Text>Technologies I currently work with:</Text>
               <Text>•JavaScript</Text>
               <Text>•ReactJS</Text>
               <Text>•NodeJS</Text>
               <Text>•Solidity</Text>
               <Text>•AWS</Text>

           </Stack>
           <Image alt="profile picture" src="/images/pfp.jpg" boxSize="300px" fit="cover" borderRadius="full" ></Image>
       </HStack>
    </VStack>
    )
}