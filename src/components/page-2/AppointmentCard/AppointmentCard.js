import React from 'react';

const AppointmentCard = ({timeSlot}) => {
   const{name,slots} = timeSlot;

    return (
        <section>
            <div class="card w-96 text-primary-content shadow-2xl">
                <div class="card-body">
                    <h2 class="text-center mt-5 font-bold text-3xl text-secondary"> {name} </h2>
                    <p className='text-center'>
                        {
                            slots.length >0
                            ?
                            <span>{slots[0]} </span>
                            :
                            <span className='text-red-500'> No slot available </span>
                        }
                    </p>
                    <p className='text-center font-bold'> {slots.length} {slots.length > 1 ? "spaces" : "space"}  available </p>
                    <div class="card-actions mt-5">
                        <button disabled={slots.length === 0} className='h-11 text-white text-center font-bold w-72 border rounded-lg bg-secondary'>Book Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentCard;