import React from 'react';
const AppointmentCard = ({ timeSlot, setTreatment }) => {
    const { name, slots } = timeSlot;
    

    return (
        <section>
            <div class="card w-96 text-primary-content shadow-2xl">
                <div class="card-body">
                    <h2 class="text-center mt-5 font-bold text-3xl text-secondary"> {name} </h2>
                    <p className='text-center'>
                        {
                            slots.length > 0
                                ?
                                <span className='font-medium
                            '>{slots[0]} </span>
                                :
                                <span className='text-red-500 font-medium'> No slot available </span>
                        }
                    </p>
                    <p className='text-center font-bold'> {slots.length} {slots.length > 1 ? "spaces" : "space"}  available </p>
                    <div class="card-actions mt-5">
                        <label
                           
                            for="booking-modal-3" 
                            hidden = {slots.length===0}
                            onClick={() => setTreatment(timeSlot)}
                            class="h-12 text-white flex justify-center items-center font-bold w-72 border rounded-lg bg-secondary">Book Now</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentCard;