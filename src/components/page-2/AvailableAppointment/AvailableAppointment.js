import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import BookingModal from '../bookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../../optional/Loading';

const AvailableAppointment = ({ selected }) => {
    // const [appointmentTime ,setAppointmentTime] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(selected, 'PP');
    //  fetch data from server using react query 
    const { data: appointmentTime, isLoading,refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?selected=${formattedDate}`)
        .then(res => res.json()))

    //    handle loading 
    if (isLoading) {
        return <Loading />
    }

    // useEffect( ()=>{
    //    fetch(`http://localhost:5000/available?selected=${formattedDate}`)
    //      .then(res =>res.json())
    //       .then(data => setAppointmentTime(data))
    // } ,[formattedDate]);
    
    return (
        <div>
            <p className='text-center text-xl text-secondary mb-5 font-bold'> Available Appointments on : {format(selected, 'PP')} </p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10'>
                {
                    appointmentTime?.map(timeSlot => <AppointmentCard
                        key={timeSlot._id}
                        timeSlot={timeSlot}
                        setTreatment={setTreatment}
                    ></AppointmentCard>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
                selected={selected}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;