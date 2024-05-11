import React, { useState } from 'react';

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center text-white">
          <span className="text-xl font-bold">Navbar</span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-white hover:bg-gray-700 px-3 py-2 rounded-md">
              {!isLogin ? (
                <button onClick={handleLogin} className="  text-white font-bold rounded">
                  Log-In
                </button>
              ) : (
                <img
                  src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
              )}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
