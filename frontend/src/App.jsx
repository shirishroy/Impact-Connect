import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Landing from './pages/Landing';
import store from './store';
import Auth from './pages/Auth/Auth'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;