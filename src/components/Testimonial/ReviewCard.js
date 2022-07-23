import React from 'react';

const ReviewCard = ({r}) => {
    const {content,name,city,img} = r;
    return (
        <div class="card w-96 bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
                
                <p className='text-justify text-lg'>{content}</p>
                <div class="card-actions  flex justify-center items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img}  alt=''/>
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h4 className='text-xl font-bold'> {name} </h4>
                        <p className='text-lg'> {city} </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;