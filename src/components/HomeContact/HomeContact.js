import React from 'react';
import contactBG from "../assets/images/appointment.png"
const HomeContact = () => {
    return (
        <section style={{
            background:`url(${contactBG})`
        }} 
        className="my-10" >
           <div className='flex flex-col w-96 m-0 m-auto' style={{
           
           }}>
            <h3 className='pt-20 text-center text-primary text-xl'> Contact Us </h3>
            <h1 className='text-center text-white text-4xl mt-2'> Stay connected with us </h1>
             <form className='flex flex-col'>
             <input type="text" placeholder="Type here" class="input input-bordered input-md w-96 mt-5" />
             <input type="text" placeholder="Type here" class="input input-bordered input-md w-96 mt-5" />

             <input type="text" placeholder="Type here" class="input input-bordered input-lg w-96 mt-5" />
             <button class="btn btn-primary mt-5 mb-10">SUBMIT</button>
             </form>
           </div>
        </section>
    );
};

export default HomeContact;