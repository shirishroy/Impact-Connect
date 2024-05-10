import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Landing from './pages/Landing';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/Home" element={<Home />} />
          <Route path="/campaign/:id" element={<Campaign />} />
          <Route path="/auth" element={<Auth />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;