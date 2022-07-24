import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ selected, treatment }) => {
    const { name,slots } = treatment;
    


     const handleBooking = e =>{
        e.preventDefault();
         const getBookingTime = e.target.slot.value;
         console.log(getBookingTime);
     }
    return (
        <div>
            <input type="checkbox" id="booking-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="booking-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-5 justify-items-center'>
                        <input type="text" disabled value={format(selected, 'PP')} class="input input-bordered w-full max-w-xs" />
                        
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                           {
                                   slots.map(slot => <option value={slot}> {slot} </option>)
                           }
                        </select>
                        <input type="text" placeholder="Full name" class="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Phone number" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />

                        <input className='input input-bordered w-full max-w-xs bg-secondary text-white text-center text-lg font-semibold' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;