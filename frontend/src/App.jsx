import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Landing from './pages/Landing/Landing';
import store from './store';
import Auth from './pages/Auth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chat from './pages/Chat';

function App() {
  // sample comment
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/chat" element={<Chat />} />
          <Route path='/create-campaign' element={<CreateCampaign />} />
          <Route path='/campaign' element={<Campaign />} />
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
    </Provider>
  )
}

export default App;