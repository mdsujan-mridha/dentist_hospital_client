import React from 'react';

const AppointmentCard = ({timeSlot}) => {
   const{name,slots} = timeSlot;

    return (
        <section>
            <div class="card w-96 text-primary-content shadow-2xl">
                <div class="card-body">
                    <h2 class="text-center mt-5 font-bold text-3xl text-secondary"> {name} </h2>
                    <p className='text-center font-bold'> {slots.length} spaces available </p>
                    <div class="card-actions mt-5">
                        <button className='h-11 text-white text-center font-bold w-72 border rounded-lg bg-secondary '>Book Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentCard;