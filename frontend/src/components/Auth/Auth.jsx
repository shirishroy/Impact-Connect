import { VStack, Box, Button, Image, Input, Flex ,Text} from "@chakra-ui/react"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { dataActions } from "../../store/data-slice";

const API_URL = 'http://localhost:3000';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const handleAuth = async () =>{
        if (!inputs.email || !inputs.password ) {
            alert("Please fill all the fields");
            return;
        }
        try{
            const res = await axios.post(`${API_URL}/auth`, {
                name : inputs.name,
                password : inputs.password,
                email : inputs.email
            });
            console.log(res.data);
            dispatch(dataActions.setUser({ value : res.data }));
        }
        catch(err){
            console.log(err);
            return;
        }
        navigate("/");
    }
  return (
    <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Input 
                  padding={5}
                  width={296}
                  placeholder='Name' 
                  fontSize={14} 
                //   type='name'
                  value={inputs.name}
                  onChange={(e) => setInputs({...inputs,name: e.target.value})} />
                <Input 
                  padding={5}
                  width={296}
                  placeholder='Email' 
                  fontSize={14} 
                  type='email' 
                  value={inputs.email}
                  onChange={(e) => setInputs({...inputs,email: e.target.value})} />
                <Input 
                padding={5}
                  width={296}
                  placeholder='Password' 
                  fontSize={14}  
                  type='password' 
                  value={inputs.password}
                  onChange={(e) => setInputs({...inputs,password: e.target.value})} />
                { !isLogin ? <Input placeholder='Confirm Password' 
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})} 
                    fontSize={14} type='password' />: null  }
                <Button w={"full"} colorScheme='green' size={"sm"} fontSize={14} onClick={handleAuth}>
                    {isLogin ? "Log-In" : "Sign Up"}
                </Button>
                {/* or*/}
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"} >
                    <Box flex={2} h={"1px"} bg={"gray.400"} />
                    <Text mx={1} color={"white"}>OR</Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"} />
                </Flex>

                <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                    <Image src='/google.png' w={5} alt="google logo" />
                    <Text mx='2' color={"green.500"}>
                        Log in with Google
                    </Text>
                </Flex>
            </VStack>
        </Box>

            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <Flex alignItems={"center"} justifyContent={"center"} >
                    <Box mx={2} fontSize={14}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </Box>
                    <Box onClick={() =>  setIsLogin(!isLogin)} color={"green.500"} cursor={"pointer"}>
                    {isLogin ? "Sign-Up" : "Log In"}
                    </Box>
                </Flex>
            </Box>
    </>
  )
}

export default Auth