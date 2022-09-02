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
import RequireAuth from './components/Authntication/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './components/page-3/DashBoard/DashBoard';
import Footer from './components/Footer/Footer';
import MyAppointMent from './components/page-3/DashBoard/MyAppointMent';
import MyReview from './components/page-3/DashBoard/MyReview';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <GetAppointment></GetAppointment>
          </RequireAuth>
        }>  
        </Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <DashBoard/>
          </RequireAuth>
        }>
          <Route index element={<MyAppointMent/>}> </Route>  
          <Route path='myreview' element={<MyReview/>}> </Route>  
        </Route>
  
      </Routes>
      <ToastContainer />
     
    </div>
  );
}

export default App;
