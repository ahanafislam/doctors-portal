import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment/>
          </RequireAuth>
        }/>
        <Route path="/registration" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
