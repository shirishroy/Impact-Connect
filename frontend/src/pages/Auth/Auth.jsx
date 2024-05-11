import {Container, Flex, VStack, Box, Image} from '@chakra-ui/react'
import Auth from '../../components/Auth/Auth';

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={14}>
                {/*left*/}
                <Box display={{base:"none", md:"block"}}>
                  <Image src='/img' h={650} alt='home img' />
                </Box>
                {/*right*/}
                <VStack spacing={4} align={"stretch"}>
                   <Auth />
                </VStack>
            </Flex>
        </Container>
    </Flex>
  );
};

export default AuthPage;