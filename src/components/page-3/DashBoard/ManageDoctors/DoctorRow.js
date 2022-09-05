import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch,setDeleteDoctor }) => {

    // handle doctor delete 
    const email = doctor?.email
   
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={doctor?.img} />
                    </div>
                </div>
            </td>
            <td>{doctor?.name}</td>

            <td>{doctor?.specialty}</td>
            <td>{doctor?.email}</td>
            <td>
            <label onClick={()=>setDeleteDoctor(doctor)} for="delete-confirm-modal" className="btn btn-sm btn-error">Delete</label>
                
            </td>
        </tr>
    );
};

export default DoctorRow;