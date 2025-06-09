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

    const getCampaigns = async () => {
        try {
            console.log("Fetching campaigns...");
            const res = await axios.get("http://localhost:3000/campaign/getall");
            console.log("Response:", res.data);  // Check the response from backend
            if (Array.isArray(res.data.campaigns)) {
                dispatch(dataActions.setCampaigns({ campaigns: res.data.campaigns }));  // ✅ Ensure correct payload
            } else {
                console.error("Invalid response format", res.data);
                toast.error("Invalid data format from server");
                dispatch(dataActions.setCampaigns({ campaigns: [] }));  // ✅ Prevents errors
            }
              // ✅ Remove extra object wrapper

        } catch (err) {
            console.error("Error fetching campaigns:", err.response?.data || err);
            toast.error("Failed to fetch campaigns");
        }
    };
    

    useEffect(() => {
        if (!campaigns || campaigns.length === 0) {  // ✅ Now checks for an empty array
            toast.info("Fetching campaigns...");
            getCampaigns();
        }
    }, [campaigns]);  // ✅ Depend on campaigns
    
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