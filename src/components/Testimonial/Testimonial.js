import React from 'react';
import quote from "../assets/icons/quote.svg";
import reviewerImg1 from "../assets/images/people1.png"
import reviewerImg2 from "../assets/images/people2.png"
import reviewerImg3 from "../assets/images/people3.png"
import ReviewCard from './ReviewCard';

const Testimonial = () => {
    const review = [
        {
            "content": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "name": "Winson Herry",
            "city": "California",
            "img": reviewerImg1
        },
        {
            "content": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "name": "Winson Herry",
            "city": "California",
            "img": reviewerImg2
        },
        {
            "content": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "name": "Winson Herry",
            "city": "California",
            "img": reviewerImg3
        },
    ]
    return (
        <section className='my-28 mx-10'>

            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary text-xl font-bold'> Testimonials </h4>
                    <h2 className='text-4xl font-bold mt-2'> What Our Patients Says </h2>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 my-5'> 
              {
                review.map(r=> <ReviewCard
                key={r.index}
                r={r}
                ></ReviewCard>)
              }    
            </div>

        </section>
    );
};

export default Testimonial;