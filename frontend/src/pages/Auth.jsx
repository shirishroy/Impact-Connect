import {Container, Flex, VStack, Box, Image} from '@chakra-ui/react'
import Auth from '../components/Auth/Auth';
import Navbar from '@/components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'


const AuthPage = () => {
  const data = useSelector((state) => state.data);

  useEffect(()=>{
    console.log("user",data?.user);
  },[data?.user])

  const styles={
    global: (props) => ({
      body : {
        // bg:mode("gray.100", "#000"  )(props),
        // color: mode("gray.800","whiteAlpha.900")(props),
      },
    }),
  };

  const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
  }
  
  const theme = extendTheme({ config, styles })

  return <ChakraProvider theme={theme}>
    <Navbar />
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={14}>
                {/*left*/}
                <Box display={{base:"none", md:"block"}}>
                  <Image src='public/IMG_20240511_112024.jpg' alt='home img' />
                </Box>
                {/*right*/}
                <VStack spacing={4} align={"stretch"}>
                   <Auth />
                </VStack>
            </Flex>
        </Container>
    </Flex>
  </ChakraProvider>
};

export default AuthPage;