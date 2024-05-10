import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";


export default function Campaign(){

    const dispatch = useDispatch();
    const loading = useSelector(state=>state.ui.loading);
    
    
    const { id } = useParams();

    // async function fetchData(){
    //     const data = await axios.get(`${API_URL}/campaign/${id}`);dispatch(uiActions.setLoading({value : true}));
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    return <>
    </>

}