import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { dataActions } from "@/store/data-slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.data.user);
  const navigate = useNavigate();

  useEffect(()=>{
    //access token and make calls to get user data from db
  },[]);

  return (
    <nav className="bg-green-800 p-4 font-sans">
      <div className="max-w-6xl mx-auto flex justify-between items-center cursor-pointer">
        <div className="flex items-center text-white" onClick={()=>{
          navigate('/');
        }}>
          <span className="text-xl font-bold">Impact Connect</span>
        </div>
        <ul className="flex space-x-4 items-center">
          <li>
            <button className="text-white hover:bg-lime-950 px-3 py-2 rounded-md"
            onClick={()=>{
              navigate('/campaigns')
            }}
            >
              Campaigns
            </button>
          </li>
          <li>
            <button className="text-white hover:bg-lime-950 px-3 py-2 rounded-md"
              onClick={()=>{
                navigate('/chat')
              }}
              >
              Chat
            </button>
          </li>
          <li>
            <button className="text-white hover:bg-lime-950 px-3 py-2 rounded-md"
              onClick={()=>{
                navigate('/create-campaign')
              }}
            >
              Create Campaign
            </button>
          </li>
          <li>
            <div className="flex items-center text-white py-2 rounded-md">
              {user === null ? (
                <button 
                className="text-white font-bold rounded-md hover:bg-lime-950 px-3 py-2"
                onClick={()=>{
                  navigate('/auth');
                }}
                >
                  Log-In | Sign-Up
                </button>
              ) : (
                <div className="flex items-center">
                  <div className="flex items-center rounded-md hover:bg-lime-950 px-3 py-2 gap-[5px]" onClick={()=>{
                    navigate('/my-campaigns');
                  }}>
                    <img
                      src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>{user?.name}</div>
                  </div>
                  <div className="text-white hover:bg-lime-950 px-3 py-2 rounded-md rounded-md hover:bg-lime-950 px-3 py-2" onClick={()=>{
                    dispatch(dataActions.setUser({ value : null }));
                    localStorage.clear();
                    toast.success('Logged out successfully');
                  }}>
                    🪫 Logout
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
