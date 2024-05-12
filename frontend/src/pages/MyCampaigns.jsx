import Navbar from "@/components/Navbar/Navbar";
import { useSelector } from "react-redux";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function MyCampaigns(){
    const navigate = useNavigate();
    const campaigns = useSelector(state => state.data.campaigns);
    const user = useSelector(state => state.data.user);

    const [myCampaigns,setMyCampaigns] = useState([]);

    useEffect(()=>{
        // console.log(user);
        // console.log(campaigns);
        if(!user || !campaigns){
            navigate('/');
            toast.warn("Please Login to continue");
            return;
        }else{
            const newCampaigns = campaigns.filter(campaign=>campaign.userId === user._id);
            setMyCampaigns(newCampaigns);
        }
    },[]);

    useEffect(()=>{
        console.log(myCampaigns);
    },[myCampaigns])
  
    return(
        <>
            <Navbar />
            <div className="flex flex-wrap gap-4">
                {
                    myCampaigns.length>0 && myCampaigns.map((campaign,index)=>{
                        return <Card key={index} campaign={campaign} />
                    })
                }
            </div>
        </>
    )
}