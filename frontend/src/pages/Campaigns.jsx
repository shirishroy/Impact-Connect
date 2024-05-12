import Card from "@/components/Card";
import Navbar from "@/components/Navbar/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { dataActions } from "../store/data-slice";

export default function Campaigns(){
    const campaigns = useSelector(state=>state.data.campaigns);
    const dispatch = useDispatch();

    const getCampaigns = async ()=>{
        try{
            const res = await axios.get('http://localhost:3000/campaign/getAll');
            dispatch(dataActions.setCampaigns({campaigns : res.data.campaigns}));
            toast.success("Campaigns fetched successfully");
        }
        catch(err){
            console.log(err);
            toast.error("Failed to fetch campaigns");
        }
    }

    useEffect(()=>{
        if(!campaigns){
            toast.info("Fetching campaigns");
            getCampaigns();
        }
    },[]);

    return(
        // <Card />
        <>
            <Navbar />
            <div className="flex flex-wrap gap-4">
            {
                campaigns && campaigns.map((campaign,index)=>{
                    return <Card key={index} campaign={campaign} />
                })
            }
            </div>
        </>
    )
}