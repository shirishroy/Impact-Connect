import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="text-5xl font-bold text-green-900 mb-8 text-center py-20">
          How ImpactConnect Works
        </div>
      <div className="flex flex-col items-center justify-center h-screen ">
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
    </div>
    </div>
  );
};

export default Landing;
