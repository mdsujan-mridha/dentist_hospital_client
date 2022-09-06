import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../optional/Loading';
import {toast } from 'react-toastify';

const BookingModal = ({selected, treatment,setTreatment,refetch }) => {
    const { _id,name,slots,price } = treatment;
    const[user,loading,error] = useAuthState(auth);
    const formattedDate = format(selected,'PP');
    // note 
    // here date = selected
    if(loading){
        return <Loading/>
    }
    if(error){
        console.log(error);
    }
    
     const handleBooking = e =>{
        e.preventDefault();
         const getBookingTime = e.target.slot.value;

        const booking = {
            treatmentId:_id,
            treatment:name,
            selected:formattedDate,
            getBookingTime,
            price,
            patientEmail:user?.email,
            patientName:user?.displayName,
            phoneNumber:e.target.value,

         }

         fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
         })
          .then(res =>res.json())
           .then(data => {
            console.log(data)
             if(data.success){
                toast(`Appointment is set ,${formattedDate} at${getBookingTime}`)
             }
             else{
                toast(` You already have and Appointment is ,${formattedDate} at${getBookingTime}`)
             }
             refetch();
            setTreatment(null);
           })
         
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
                        <input type="text" disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Phone number" class="input input-bordered w-full max-w-xs" />
                        

                        <input className='input input-bordered w-full max-w-xs bg-secondary text-white text-center text-lg font-semibold' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;