// import { Flex, VStack, Text, Button } from '@chakra-ui/react';
// import { AvatarGroup, Avatar } from '@chakra-ui/avatar';
// import ReactPlayer from 'react-player/youtube';

// const Camping = () => {
//     const props = {
//         title : "Wedding Food Collection for Orphanages",
//         description : "loremipsum11000",
//         image : "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
//         requirements : [
//             {
//                 type : "Money",
//                 amount : 5000,
//             },
//             {
//                 type : "Volunteer",
//                 amount : 5
//             },
//         ],
//         type : "Food Security",
//         video : "",
//         brochure : "",
//         startDate : "",
//         userId : {
//             _id : "",
//             name : "Shirish Roy",
//             email : "gmail@gmail.com"
//         },
//         location : "Bangalore",
//         donors : [],
//         volunteer : []
//     }

// //   return (
// //     <Flex
// //       py={10}
// //       direction="column"
// //       alignItems="flex-start"
// //       justify="space-between"
// //       minHeight="100vh" 
// //       padding={{ base: 4, sm: 10 }}
// //     >
// //       <Flex
// //         direction="column"
// //         alignItems="flex-end"
// //         mb={{ base: 4, sm: 0 }}
// //       >
// //         <AvatarGroup size="2xl">
// //           <Avatar
// //             name='As a programmer'
// //             src='/profilepic.png'
// //             alt='As a programmer'
// //           />
// //         </AvatarGroup>
// //       </Flex>

      
// //       <VStack py={10} alignItems="start" spacing={4} width="100%" maxWidth="600px">
// //         <Flex direction={{ base: "column", sm: "row" }} justify="space-between" alignItems="center" width="100%">
// //           <Text fontSize={{ base: "sm", md: "lg" }}>Title</Text>
          
// //         </Flex>
        
// //         <Flex direction={{ base: "column", sm: "row" }} justify="space-between" alignItems="center" width="100%">
// //           <Text fontSize={{ base: "sm", md: "lg" }}>Description</Text>
          
// //         </Flex>

// //         <Flex gap={4} alignItems="center" justifyContent="center" width="100%">
// //           <Button
// //             bg="white"
// //             color="black"
// //             _hover={{ bg: "whiteAlpha.800" }}
// //             size={{ base: "xs", md: "sm" }}
// //           >
// //             Chat
// //           </Button>
// //           <Button
// //             bg="white"
// //             color="black"
// //             _hover={{ bg: "whiteAlpha.800" }}
// //             size={{ base: "xs", md: "sm" }}
// //           >
// //             Donate
// //           </Button>
// //           <Button
// //             bg="white"
// //             color="black"
// //             _hover={{ bg: "whiteAlpha.800" }}
// //             size={{ base: "xs", md: "sm" }}
// //           >
// //             Volunteer
// //           </Button>
// //         </Flex>
// //       </VStack>

      
// //       <Flex width="100%" justifyContent="center" marginBottom={4}>
// //         <ReactPlayer
// //           light={true}
// //           controls={true}
// //           url="https://youtu.be/5mO-T2o9zuk?si=OEn2Ix5KOxv90sVl"
// //           height="500px"
// //           width="100%" 
// //           maxWidth="750px" 
// //         />
// //       </Flex>
// //     </Flex>
// //   );
//     // return <div>
//     //     <div className='flex justify-around  p-5'>
//     //         <div className='flex gap-[5rem] items-center'>
//     //             <div>
//     //                 <img src={props.image} className='w-[25rem] h-[25rem] '/>
//     //             </div>
//     //             <div>
//     //                 <div className='text-4xl'>{props.title}</div>
//     //                 <div className='text-md'>
//     //                 </div>
//     //                 <div>
//     //                     {props.requirements.map((requirement)=>{
//     //                         return <div className='flex gap-[20px]'>
//     //                             <div className="">{requirement.type}</div>
//     //                             <div>{requirement.amount}</div>
//     //                         </div>
//     //                     })}
//     //                 </div>
//     //                 <div>
//     //                     <button>Chat</button>
//     //                     <button>Donate</button>
//     //                     <button>Volunteer</button>
//     //                 </div>
//     //             </div>
//     //         </div>
//     //     </div>
//     //     <div>
//     //         <div>
//     //             <video src="" />
//     //         </div>
//     //         <div>
//     //             //Brochure
//     //         </div>
//     //     </div>
//     // </div>

    

// };

// export default Camping;

import Navbar from '../Navbar/Navbar';

const Camping = () => {
    const props = {
        title : "Wedding Food Collection for Orphanages",
        description : "loremipsum11000",
        image : "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        requirements : [
            {
                type : "Money",
                amount : 5000,
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

    return (<>
        <Navbar />
        <div className="bg-green-50 min-h-screen py-10">
            
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-around p-5">
                    <div className="flex items-center gap-10">
                        <div>
                            <img src={props.image} className="w-80 h-80 rounded-md shadow-lg" alt="Campaign Image" />
                        </div>
                        <div>
                            <div className="text-4xl font-semibold text-green-900 mb-4">{props.title}</div>
                            <div className="text-lg text-green-800 mb-4">
                                <ul>
                                    <div>
                                        Requirements - 
                                    </div>
                                    {props.requirements.map((requirement, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="text-green-700">{requirement.type}</div>
                                            <div>{requirement.amount}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-x-4">
                                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                                    Chat
                                </button>
                                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                                    Donate
                                </button>
                                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                                    Volunteer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around p-5 mt-8 bg-white rounded-lg shadow-lg">
                    <div className="max-w-md">
                        <video src={props.videoSrc} className="w-full" controls />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-2xl font-semibold text-green-900 mb-4">Brochure</div>
                        <a
                            href={props.brochureUrl}
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
