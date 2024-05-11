import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Landing = () => {

  const navigate = useNavigate();

  const data = [
    {
      title : "Getting started on ImpactConnect",
      description : "Join ImpactConnect to support social responsibility and sustainability projects. Easily browse and connect with project initiators to make a difference.",
      image : "",
      btnText : "Discover More",
      btnlink: '/campaigns'
    },
    {
      title : "ImpactConnect and social impact",
      description : "ImpactConnect is a hub for sustainable projects. Our platform fosters transparency, collaboration, and positive change through innovative solutions.",
      image : "",
      btnText : "Join Impact-Connect",
      btnlink: '/auth'
    },
    {
      title : "Empower the social responsibility movement",
      description : "ImpactConnect enables individuals and organizations to revolutionize social responsibility efforts, creating a positive impact on communities worldwide.",
      image : "",
      btnText : "Learn More",
      btnlink: '/campaigns'
    },
    {
      title : "Facilitating smarter and faster connections",
      description : "Discover how ImpactConnect's innovative technology streamlines connections and transactions, driving efficiency and impact in social responsibility projects.",
      image : "",
      btnText : "Explore",
      btnlink: '/campaigns'
    }
  ]

  return (
    <div className='font-sans'>
      <Navbar />
      <div className="text-5xl font-bold text-green-900 mb-8 text-center py-20">
          How Impact-Connect Works
      </div>
      {
        data.map((item,index)=>{
          return (
            index % 2 === 0 ? (
              <div key={index} className='flex justify-around items-center p-20 bg-lime-200'>
                <div>
                  <img src={item.image} alt="plant img" className="w-80 h-80 rounded-md shadow-lg" />
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='text-4xl font-bold'>
                    {item.title}
                  </div>
                  <div className='text-md'>
                    {item.description}
                  </div>  
                  <div>
                    <button className='p-5 px-10 border rounded-xl bg-lime-500'
                    onClick={()=>{
                      navigate(item.btnlink)
                    }}
                    >
                      {item.btnText}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className='flex justify-around items-center p-20 bg-lime-100'>
                <div className='flex flex-col gap-4'>
                  <div className='text-4xl font-bold'>
                    {item.title}
                  </div>
                  <div className='text-md'>
                    {item.description}
                  </div>  
                  <div>
                    <button className='p-5 px-10 border rounded-xl bg-green-400'
                    onClick={()=>{
                      navigate(item.btnlink)
                    }}
                    >
                      {item.btnText}
                    </button>
                  </div>
                </div>
                <div>
                  <img src={item.image} alt="plant img" className="w-80 h-80 rounded-md shadow-lg" />
                </div>
              </div>
            )
          )
        })
      }
      {/* <div className="flex flex-col items-center justify-center h-screen ">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="text-2xl font-semibold mb-4">
              Getting started on ImpactConnect
            </div>
            <div className="mb-4">
              Join ImpactConnect to support social responsibility and sustainability projects. Easily browse and connect with project initiators to make a difference.
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-md">
              Discover More
            </button>
          </div>
          <div className="md:w-1/2 px-4">
          <img
              src="https://images.pexels.com/photos/1141792/pexels-photo-1141792.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="plant img"
              className="w-80 h-80 rounded-md shadow-lg alt=Campaign Image"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto">
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="text-2xl font-semibold mb-4">
            Getting started on ImpactConnect
          </div>
          <div className="mb-4">
            Join ImpactConnect to support social responsibility and sustainability projects. Easily browse and connect with project initiators to make a difference.
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Discover More
          </button>
        </div>
        <div className="md:w-1/2 px-4">
          <img
            src="https://images.pexels.com/photos/1141792/pexels-photo-1141792.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="plant img"
            className="w-80 h-80 rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="text-2xl font-semibold mb-4">
              Getting started on ImpactConnect
            </div>
            <div className="mb-4">
              Join ImpactConnect to support social responsibility and sustainability projects. Easily browse and connect with project initiators to make a difference.
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-md">
              Discover More
            </button>
          </div>
          <div className="md:w-1/2 px-4">
          <img
              src="https://images.pexels.com/photos/1141792/pexels-photo-1141792.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="plant img"
              className="w-80 h-80 rounded-md shadow-lg alt=Campaign Image"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto">
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="text-2xl font-semibold mb-4">
            Getting started on ImpactConnect
          </div>
          <div className="mb-4">
            Join ImpactConnect to support social responsibility and sustainability projects. Easily browse and connect with project initiators to make a difference.
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Discover More
          </button>
        </div>
        <div className="md:w-1/2 px-4">
          <img
            src="https://images.pexels.com/photos/1141792/pexels-photo-1141792.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="plant img"
            className="w-80 h-80 rounded-md shadow-lg"
          />
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default Landing;
