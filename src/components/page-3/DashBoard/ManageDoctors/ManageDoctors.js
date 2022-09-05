import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../../optional/Loading';
import ConfirmModal from '../ConfirmDeleteModal/ConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1> Manage Doctors </h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors?.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                index={index}
                                doctor={doctor}
                                refetch={refetch}
                                setDeleteDoctor={setDeleteDoctor}
                            ></DoctorRow>)
                        }


                    </tbody>
                </table>

            </div>
            {
                deleteDoctor && <ConfirmModal
                    deleteDoctor={deleteDoctor}
                    refetch={refetch}
                    setDeleteDoctor={setDeleteDoctor}
                ></ConfirmModal>
            }
        </div>
    );
};

export default ManageDoctors;