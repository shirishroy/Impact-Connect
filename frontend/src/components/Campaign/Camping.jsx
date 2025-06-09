import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { dataActions } from '@/store/data-slice';

const Camping = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const campaigns = useSelector(state=>state.data.campaigns);
    const user = useSelector(state=>state.data.user);

    const [campaign,setCampaign] = useState(null);

    const getCampaign = async()=>{
        try{
            const res = await axios.get(`http://localhost:3000/campaign/getall`);
            setCampaign(res.data.campaign);
        }
        catch(err){
            console.log(err);
            toast.error("Failed to fetch campaign");
            toast.info("Redirecting to campaigns page");
            navigate('/campaigns');
        }
    }

    const createChat = async()=>{
        try{
            const res = await axios.post('http://localhost:3000/chat/create',{
                userIds : [ user._id,campaign?.userId?._id ]
            });
            if(res.data.success){
                if(!res.data.isExisting){
                    toast.success('Chat created');
                    dispatch(dataActions.addNewChat({ chat : res.data.chat }));
                }
                else{
                    toast.info('Chat already exists');
                }
            }
            else{
                throw new Error(res.error)
            }
        }
        catch(error){
            toast.error(error);
        }
    }

    useEffect(()=>{
        console.log(campaign);
        console.log(user);
    },[user,campaign]);

    useEffect(()=>{
        if(!campaigns){
            getCampaign();
        }
        else{
            const temp_Campaign = campaigns.find(campaign=>campaign._id === id);
            if(temp_Campaign){
                setCampaign(temp_Campaign);
            }
            else{
                getCampaign();
            }
        }
    },[])

    // const props = {
    //     title : "Wedding Food Collection for Orphanages",
    //     description : "loremipsum11000",
    //     image : "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    //     requirements : [
    //         {
    //             type : "Money",
    //             amount : 5000,
    //         },
    //         {
    //             type : "Volunteer",
    //             amount : 5
    //         },
    //     ],
    //     type : "Food Security",
    //     video : "",
    //     brochure : "",
    //     startDate : "",
    //     userId : {
    //         _id : "",
    //         name : "Shirish Roy",
    //         email : "gmail@gmail.com"
    //     },
    //     location : "Bangalore",
    //     donors : [],
    //     volunteer : []
    // }

    const addVolunteer = async()=>{
        try{
            toast.info("Volunteering...")
            const res = await axios.post('http://localhost:3000/campaign/volunteer',{
                campaignId : campaign._id,
                userId : user._id
            });
            if(res.data.success){
                setCampaign(res.data.campaign);
                dispatch(dataActions.updateCampaign({ campaign : res.data.campaign }));
                toast.success('Volunteered');
            }
            else{
                throw new Error(res.data.error);
            }
        }
        catch(err){
            console.log(err);
            toast.error('Something went Wrong');
        }
    }

    const addDonor = async()=>{
        try{
            toast.info("Donating...")
            toast.info('Payment Gateway Integration Pending');
            const res = await axios.post('http://localhost:3000/campaign/donate',{
                campaignId : campaign._id,
                userId : user._id
            });
            if(res.data.success){
                setCampaign(res.data.campaign);
                dispatch(dataActions.updateCampaign({ campaign : res.data.campaign }));
                toast.success('Donated - Virtually');
            }
            else{
                throw new Error(res.data.error);
            }
        }
        catch(err){
            console.log(err);
            toast.error('Something went Wrong');
        }
    }

    return (campaign && <>
        <Navbar />
        <div className="bg-green-50 min-h-screen py-10">

            <div className="mx-56">
                <div className="flex justify-around p-5">
                    <div className="flex items-center gap-[50px]">
                        <img src={campaign?.image} className="w-[700px] h-[700px] rounded-md shadow-lg" alt="Campaignnnn Image" />
                        <div>
                            <div className="text-4xl font-semibold text-green-900 mb-4">{campaign?.title}</div>
                            <div className='flex py-3 mb-2 justify-around'>
                                <div className='text-green-900'>
                                    {campaign?.type}
                                </div>
                                <div className='text-green-900'>
                                📍 {campaign?.location}
                                </div>
                                <div className='text-green-900'>
                                🏢 {campaign?.userId?.name}
                                </div>
                            </div>
                            <div className="text-lg text-green-800 mb-4">{campaign?.description}</div>
                            <div className="text-lg text-green-800 mb-4 flex gap-[50px]">
                                <ul>
                                    <div className='font-semibold'>
                                        Requirements
                                    </div>
                                    {campaign?.requirements.map((requirement, index) => (
                                        <li key={index} className="flex items-center gap-10">
                                            <div className="text-green-700">{requirement.type}</div>
                                            <div>{ requirement.type === 'Money' ? "₹" : ""}{requirement.required}</div>
                                        </li>
                                    ))}
                                </ul>
                                <ul>
                                    <div className='font-semibold'>
                                        Fulfilled
                                    </div>
                                    {campaign?.requirements.map((requirement, index) => (
                                        <li key={index} className="flex items-center gap-10">
                                            <div className="text-green-700">{requirement.type}</div>
                                            <div>{ requirement.type === 'Money' ? "₹" : ""}{requirement.fulfilled ? requirement.fulfilled : 0}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-x-4">
                                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 w-48 rounded"
                                onClick={async ()=>{
                                    if(user){
                                        await createChat();
                                        navigate('/chat');
                                    }
                                    else{
                                        toast.error('Login to Send a Message...')
                                        toast.info('Redirecting to Login...')
                                        navigate('/auth')
                                    }
                                }}
                                >
                                    Chat
                                </button>
                                <button 
                                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 w-48 rounded"
                                onClick={async ()=>{
                                    if(!user){
                                        toast.error('Login to Donate...')
                                        toast.info('Redirecting to Login...')
                                        navigate('/auth')
                                        return;
                                    }
                                    if(campaign.donors.find(donor=>donor.userId._id === user._id)){
                                        toast.error('Already Donated');
                                        return;
                                    }
                                    await addDonor();
                                }}
                                >
                                    Donate
                                </button>
                                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 w-48 rounded"
                                onClick={async ()=>{
                                    if(!user){
                                        toast.error('Login to Volunteer...')
                                        toast.info('Redirecting to Login...')
                                        navigate('/auth')
                                        return;
                                    }
                                    if(campaign.volunteers.find(volunteer=>volunteer.userId._id === user._id)){
                                        toast.error('Already Volunteered');
                                        return;
                                    }
                                    await addVolunteer();
                                }}
                                >
                                    Volunteer
                                </button>
                            </div>
                            <div className='flex text-green-800 gap-[100px] align-top'>
                                {campaign && campaign?.volunteers.length>0 && <div className='py-4'>
                                    <div className='text-lg font-semibold ' >Volunteers</div>
                                    {
                                        campaign?.volunteers.map((volunteer,index)=>{
                                            return <div key={index} className="flex items-center gap-4">
                                                <div>👤 {volunteer?.userId?.name}</div> 
                                                <div>{volunteer?.position}</div>
                                            </div>
                                        })
                                    }
                                </div>}
                                {campaign && campaign?.donors.length>0 && <div className='py-4'>
                                    <div className='text-lg font-semibold ' >Donors</div>
                                    {
                                        campaign?.donors.map((donor,index)=>{
                                            return <div key={index} className="flex items-center gap-4">
                                                <div>👤 {donor?.userId?.name}</div> 
                                                <div>₹500</div>
                                            </div>
                                        })
                                    }
                                </div>}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex justify-around p-5 mt-8 bg-white rounded-lg shadow-lg">
                    <div className="max-w-md">
                        <video src={campaign?.videoSrc} className="w-full" controls />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-2xl font-semibold text-green-900 mb-4">Brochure</div>
                        <a
                            href={campaign?.brochureUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                        >
                            Download Brochure
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Camping;
