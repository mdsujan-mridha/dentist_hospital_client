import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../../optional/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: appointment, isLoading, refetch } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            //  'content-type':'application/json'
        },
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-2xl font-bold text-center" > Pay for <span className='text-secondary'> {appointment.treatment} </span> </h2>
                                <p className='text-lg text-justify'> We will see you on <span className='text-secondary'> {appointment?.selected
                                } at <span className='text-primary font-bold'> {appointment?.getBookingTime} </span> </span> </p>
                                <p className='text-center font-bold text-2xl'> Please Pay {appointment?.price} </p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;