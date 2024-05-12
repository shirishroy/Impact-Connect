import { VStack, Box, Button, Input, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { dataActions } from "../../store/data-slice";
import { toast } from "react-toastify";

const API_URL = 'http://localhost:3000';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        location: "",
        type : "user"
    });
    const dispatch = useDispatch();

    const handleAuth = async () => {
        if (!inputs.email || !inputs.password || (!isLogin && !inputs.name)) {
            alert("Please fill all the fields");
            return;
        }
        try {
            let endpoint = '/api/createuser'; // Set the endpoint to create a new user
            if (isLogin) {
                endpoint = '/api/entryuser'; // If it's login, set the endpoint accordingly
            }

            const res = await axios.post(`${API_URL}${endpoint}`, {
                name: inputs.name,
                password: inputs.password,
                email: inputs.email,
                location: inputs.location,
                role : inputs.type
            });
            
            if (res.data.success) {
                localStorage.setItem('jwt',res.data.authToken);
                toast.success("Welcome to Impact Connect");
                dispatch(dataActions.setUser({ value : res.data.user }));
                navigate("/"); // Redirect the user to the desired page
            } else {
                toast("Authentication failed");
            }
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    {!isLogin && (
                        <Input 
                            padding={5}
                            width={296}
                            placeholder='Name' 
                            fontSize={14} 
                            value={inputs.name}
                            onChange={(e) => setInputs({...inputs,name: e.target.value})} />
                    )}
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
                    {!isLogin && (
                        <Input 
                            padding={5}
                            width={296}
                            placeholder='Confirm Password' 
                            fontSize={14} 
                            type='password' 
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})} />
                            
                    )}
                    
                    {!isLogin && <Input 
                        padding={5}
                        width={296}
                        placeholder='Location' 
                        fontSize={14} 
                        value={inputs.location}
                        onChange={(e) => setInputs({...inputs,location: e.target.value})} 
                        />}
                    
                    {!isLogin && <div className="flex justify-around gap-20">
                        <div onClick={()=>{
                            if(inputs.type !== 'user'){
                                setInputs({...inputs,type: 'user'})
                            }
                        }}>
                            { inputs.type === 'user' ? "✅ " : "❌ " } User
                        </div>    
                        <div onClick={()=>{
                            if(inputs.type !== 'organisation'){
                                setInputs({...inputs,type: 'organisation'})
                            }
                        }}>
                            { inputs.type === 'organisation' ? "✅ " : "❌ " } Organisation
                        </div>
                    </div>}
                    <Button w={"full"} colorScheme='green' size={"sm"} fontSize={14} onClick={handleAuth}>
                        {isLogin ? "Log-In" : "Sign Up"}
                    </Button>
                    {/* <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                        <Text mx={1} color={"white"}>OR</Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                    </Flex>
                    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                        <Text mx='2' color={"green.500"}>
                            Log in with Google
                        </Text>
                    </Flex> */}
                </VStack>
            </Box>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <Flex alignItems={"center"} justifyContent={"center"} >
                    <Box mx={2} fontSize={14}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={"green.500"} cursor={"pointer"}>
                        {isLogin ? "Sign-Up" : "Log In"}
                    </Box>
                </Flex>
            </Box>
        </>
    );
}

export default Auth;
