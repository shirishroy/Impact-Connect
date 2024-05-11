import {Flex, Container} from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Camping from "../../components/Campaign/Camping"


export default function Campaign(){

    // const dispatch = useDispatch();
    // const loading = useSelector(state=>state.ui.loading);
    
    
    // const { id } = useParams();

    // async function fetchData(){
    //     const data = await axios.get(`${API_URL}/campaign/${id}`);dispatch(uiActions.setLoading({value : true}));
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    // return <Container maxW="container.lg" py={0}>
    // <Flex
    //   py={0}
    //   px={0}
    //   pl={{base:0, md:0}}
    //   w={"full"}
    //   mx={"auto"}
    //   flexDirection={"column"}
    //   >
    //     <Camping />
    //   </Flex>
    // </Container>

    return <>
        <Camping />
    </>
}