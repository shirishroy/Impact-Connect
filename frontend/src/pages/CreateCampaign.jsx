import Navbar from '@/components/Navbar/Navbar';
import { useState } from 'react';

export default function CreateCampaign() {
  // State variables to store form data
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState([]);
  const [type, setType] = useState('');
  const [video, setVideo] = useState(null);
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here, e.g., send it to a server
    console.log({ title, description, image, type, video, location, startDate, endDate, contactPhone });
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: `url('https://vastphotos.com/files/uploads/photos/10994/peaceful-nature-photo-l.jpg?v=20220712073521')`}}>
    <Navbar />
    <div className="flex justify-center items-center h-full py-3">
      <div className="max-w-xl w-full bg-white p-6 rounded-md shadow-md ">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Campaign</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="title" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md p-2" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" rows="3" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md p-2" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">Image</label>
          <input type="file" id="images" accept="image/png, image/jpeg" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md p-2" 
            onChange={(e) => {
              setImage(e.target.files[0]);

            }}

          />
        </div>
        <div>
          <label htmlFor="video" className="block text-sm font-medium text-gray-700">Video</label>
          <input type="file" id="video" accept="video/mp4, video/webm" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md p-2" onChange={(e) => setVideo(e.target.files[0])} />
        </div>
      
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Domain</label>
          <select id="type" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md p-2" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select Domain</option>
            <option value="Food Security">Food Security</option>
            <option value="Child Education">Child Education</option>
            <option value="Women Empowerment">Women Empowerment</option>
            <option value="Sustainability">Sustainability</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" id="location" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md p-2" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
          <input type="date" id="startDate" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md p-2" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
          <input type="date" id="endDate" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md p-2" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">Contact Phone</label>
          <input type="tel" id="contactPhone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md p-2" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} />
        </div>
        <button type="submit" className="mt-4 bg-indigo-600 text-white rounded-md py-2 px-4 font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}
