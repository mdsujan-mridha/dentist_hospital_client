import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyAppointMent = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}
                        {
                            appointments?.map((appointment,index ) =>
                                <tr>
                                    <th>{index+1}</th>
                                    <td> {appointment?.patientName} </td>
                                    <td>{appointment?.selected}</td>
                                    <td>{appointment?.getBookingTime}</td>
                                    <td>{appointment?.treatment}</td>
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