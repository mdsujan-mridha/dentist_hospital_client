import React from 'react';
import ServicesCard from './ServicesCard';
import florida from "../assets/images/fluoride.png";
import cavity from "../assets/images/cavity.png";
import whitening from "../assets/images/whitening.png";

const Services = () => { 
    const servicesInfo = [
        {
            "_id": "1",
            "img":florida,
            "title":"Fluoride Treatment",
            "content": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            "_id": "2",
            "img": cavity,
            "title":"Cavity Filling",
            "content": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            "_id": "3",
            "img": whitening,
            "title":"Teeth Whitening",
            "content": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
         <section className='mt-14 pb-10'>
           <div className='pb-16 text-center'> 
              <h2 className='text-primary text-2xl'> OUR SERVICES </h2> 
              <h1 className='text-4xl my-5'> Services We Provide </h1>
           </div>
           <div className='place-items-center mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5'>
              {
                servicesInfo.map(service => <ServicesCard
                id ={ service._id}
                service = {service}
                ></ServicesCard>)
              }
           </div>
         </section>
    );
};

export default Services;