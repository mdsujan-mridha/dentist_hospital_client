import React from 'react';
import { toast } from 'react-toastify';

const ConfirmModal = ({ deleteDoctor, refetch,setDeleteDoctor }) => {
    // console.log(deleteDoctor);

    const { name, img, email } = deleteDoctor;
    // handle delete doctor 
    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('data form mng doctor', data);
                if (data.deletedCount) {
                    toast(`Delete Doctor ${name} successful`);
                    setDeleteDoctor(null)
                    refetch();
                    
                }

            })
    }

    return (
        <div>

            <label for="delete-confirm-modal" className="btn modal-button">open modal</label>


            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-center text-warning">Are you sure?You want to delete?</h3>
                    <div className='flex justify-center items-center flex-col'>
                        <div className="w-20 rounded-full flex justify-center items-center">
                            <img src={img} />
                            
                        </div>
                        <p className="py-4 text-3xl"> {name} </p>
                        <p className="py-4 text-2xl"> {email} </p>
                    </div>

                    <div className="modal-action flex justify-center items-center">
                        <label for="delete-confirm-modal" className="btn">Cancel</label>
                        <button onClick={handleDelete} className="btn btn-sm btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ConfirmModal;