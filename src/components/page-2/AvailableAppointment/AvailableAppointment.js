import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

const AvailableAppointment = ({selected}) => {
    const [appointmentTime ,setAppointmentTime] = useState([]);
    useEffect( ()=>{
       fetch('AvailableData.json')
         .then(res =>res.json())
          .then(data => setAppointmentTime(data))
    } ,[]);
    return (
        <div>
            <p className='text-center text-xl text-secondary mb-5 font-bold'> Available Appointments on : {format(selected, 'PP')} </p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10'>
                {
                   appointmentTime?.map(timeSlot=> <AppointmentCard
                   key={timeSlot.id}
                    timeSlot = {timeSlot}
                   ></AppointmentCard>) 
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;