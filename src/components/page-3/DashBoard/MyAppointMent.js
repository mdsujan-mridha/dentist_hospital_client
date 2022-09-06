import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyAppointMent = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    //  'content-type':'application/json'
                },
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401) {
                        toast('Token is not valid');
                        return navigate('/home');
                    }
                    else if (res.status === 403) {
                        toast('UnAuthorization access');
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        return navigate('/home');
                    }

                    return res.json()
                })
                .then(data => {
                    setAppointments(data)
                });
        }
    }, [user]);

    return (
        <div>
            <div class="overflow-x-auto my-5">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}
                        {
                            appointments?.map((appointment, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td> {appointment?.patientName} </td>
                                    <td>{appointment?.selected}</td>
                                    <td>{appointment?.getBookingTime}</td>
                                    <td>{appointment?.treatment}</td>
                                    <td>
                                        {
                                            (appointment?.price && !appointment?.paid) && <Link to={`/dashboard/payment/${appointment._id}`}>  <button className='btn btn-sm btn-secondary'>Pay {appointment.price} </button> </Link>
                                        }
                                        {
                                            (appointment?.price && appointment?.paid) &&  <button className='btn btn-sm btn-primary'> Paid  </button> 
                                        }
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointMent;