import React from 'react';
import Appointment from '../MakeAppointment/MakeAppointment';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Footer from '../Footer/Footer';
import HomeContact from '../HomeContact/HomeContact';
import Info from '../infoCard/Info';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import MakeAppointment from "../MakeAppointment/MakeAppointment";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <HomeContact></HomeContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;