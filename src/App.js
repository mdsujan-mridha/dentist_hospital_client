import logo from './logo.svg';
import './App.css';
import { Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Authntication/Login/Login'; 
import "swiper/css/bundle";
import "./components/Banner/swipperStyle.css";
import GetAppointment from './components/page-2/getAppointment/GetAppointment';
import Register from './components/Authntication/Register/Register';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='appointment' element={<GetAppointment></GetAppointment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
