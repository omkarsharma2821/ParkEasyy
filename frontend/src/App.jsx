import './App.css';
import { AppProvider } from './AppContext';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SlotList from './components/SlotList';
import BookSlot from './components/BookSlot';
import UserAuth from './UserAuth';


function App() {
  return (
    <div>
      <BrowserRouter>
        <AppProvider>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/slotlist" element={<UserAuth><SlotList /> </UserAuth>} />
            <Route path="/bookslot" element={<UserAuth><BookSlot /></UserAuth>} />
            <Route path="/about" element={<UserAuth><About /></UserAuth>} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;