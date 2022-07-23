import React from 'react';
import doctor from "../assets/images/doctor.png";
import appointmentBackground from "../assets/images/appointment.png";

const Appointment = () => {
    return (
        <section 
         style={{ background: `url(${appointmentBackground})` }}
        className='flex justify-center items-center'>
            <div className="img flex-1 hidden lg:block">
                <img className='mt-[-200px]' src={doctor} alt="" />
            </div>
            <div className="content w-2/4 flex-1 mr-20">
                <h2 className='text-xl text-primary my-5'> Appointment </h2>
                <h1 className='text-4xl mb-5 text-white'> Make an appointment Today </h1>
                <p className='text-justify text-lg pb-5 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary">GET STARTED</button>
            </div>
        </section>
    );
};

export default Appointment;