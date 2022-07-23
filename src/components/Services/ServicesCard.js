import React from 'react';

const ServicesCard = ({service}) => {
    const {img, title, content} = service
    return (
        <div class="card w-3/4 bg-base-100 shadow-2xl">
            <figure>
                <img src={img} alt="Shoes" />
                </figure>
            <div class="card-body">
                <h2 class="text-center text-3xl font-bold my-5">{title}</h2>
                <p className='my-5'>If a dog chews shoes whose shoes does he choose?</p>
                
            </div>
        </div>
    );
};

export default ServicesCard;