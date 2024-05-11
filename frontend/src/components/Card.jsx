import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Card(){

    const navigate = useNavigate();

    const props = {
        title : "Wedding Food Collection for Orphanages",
        description : "loremipsum11000",
        image : "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        requirements : [
            {
                type : "Money",
                amount : 8000,
            },
            {
                type : "Volunteer",
                amount : 5
            },
        ],
        type : "Food Security",
        video : "",
        brochure : "",
        startDate : "",
        userId : {
            _id : "",
            name : "Shirish Roy",
            email : "gmail@gmail.com"
        },
        location : "Bangalore",
        donors : [],
        volunteer : []
    }

    return (
        <div className="w-min justify-center font-sans m-4 p-4 cursor-pointer bg-lime-300" onClick={()=>{
            navigate(`/campaign/${props._id}`)
        }}>
            <div>
                <img src={props?.image} alt="Campaign-Image" className="rounded-md w-72 h-72"/>
            </div>
            <div className="text-2xl font-semibold py-2">
                {props?.title}
            </div>
            <div className="flex justify-between w-72 items-center">
                <div className="text-sm">
                    {props?.userId?.name}
                </div>
                <div>📍 {props.location}</div>
            </div>
            {/* <div>{props?.description?.length > 70 ? props.description.slice(0,70)+'...' : props.description }</div> */}
            <div className="justify-center">
                <button
                className="bg-green-500 text-white rounded-md p-4 px-8 my-2"
                onClick={()=>{
                    navigate(`/campaign/${props._id}`)
                }}
                >Contribute
                </button>
            </div>
        </div>
    )
}