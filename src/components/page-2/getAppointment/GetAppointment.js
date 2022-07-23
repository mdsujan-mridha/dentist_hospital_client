import React, { useEffect, useState } from 'react';
import Footer from "../../Footer/Footer";
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const GetAppointment = () => {
    const [selected, setSelected] = useState(new Date());

    //  console.log(appointmentTime);
    return (
        <section>
            <AppointmentBanner selected={selected} setSelected={setSelected}></AppointmentBanner>
            <AvailableAppointment selected={selected}></AvailableAppointment>
             
          <Footer></Footer>
        </section>
        

    );
};

export default GetAppointment;