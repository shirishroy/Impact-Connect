import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Landing from './pages/Landing/Landing';
import Auth from './pages/Auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chat from './pages/Chat';
import CreateCampaign from './pages/CreateCampaign';
import Camping from './components/Campaign/Camping';
import Campaigns from './pages/Campaigns';
import { useEffect } from 'react';
import { dataActions } from './store/data-slice';
import axios from 'axios';
import MyCampaigns from './pages/MyCampaigns';

function App() {
  // sample comment
  const dispatch = useDispatch();
  const chats = useSelector(state=>state.data.chats);
  const user = useSelector(state=>state.data.user);

  const fetchChats = async()=>{
    try{
      const res = await axios.post('https://impactconnect-i5gi.onrender.com/chat/getAll',{
        userId : user?._id
      });

      if(res.data.success){
        // console.log(res.data.chats);
        dispatch(dataActions.setChats({ chats : res.data.chats }));
        // toast.success("Chats fetched successfully");
      }
      else{
        throw new Error(res.error);
      }
    }
    catch(error){
      toast.error(error);
    }
  }

  const getCampaigns = async ()=>{
    try{
        const res = await axios.get('https://impactconnect-i5gi.onrender.com/campaign/getAll');
        dispatch(dataActions.setCampaigns({campaigns : res.data.campaigns}));
        // toast.success("Campaigns fetched successfully");
    }
    catch(err){
        console.log(err);
        toast.error("Failed to fetch campaigns");
    }
  }

  const getUser = async (token)=>{
    try{
      const res = await axios.post('https://impactconnect-i5gi.onrender.com/api/getUser',{
        token
      });
      if(res.data.success){
        dispatch(dataActions.setUser({ value : res.data.user[0] }));
        // toast.success("User fetched successfully");
      }
      else{
        throw new Error(res.error);
      }
    }
    catch(err){
      console.log(err);
      toast.error("Failed to fetch user");
      localStorage.clear();
    }
  }

  useEffect(()=>{
    if(!chats && user){
      fetchChats();
    }
  },[user]);

  useEffect(()=>{
    const token = localStorage.getItem('jwt');
    console.log(token);
    if(localStorage.getItem('jwt')){
      getUser(token);
    }
    getCampaigns();
  },[]);

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/chat" element={<Chat />} />
            <Route path='/create-campaign' element={<CreateCampaign />} />
            <Route path='/campaign/:id' element={<Camping />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/my-campaigns" element={<MyCampaigns />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer 
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          theme='light'
          rtl={false}
          // transition='bounce'
        />
      </>
  )
}

export default App;