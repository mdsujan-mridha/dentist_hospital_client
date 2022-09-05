import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../optional/Loading';
import UserRow from './UserRow';

const Allusers = () => {
     const{data:users, isLoading,refetch}  = useQuery('users', () => fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
     }).then(res =>res.json()))
      if(isLoading){
        return <Loading/>
      }
    return (
        <div>
            <h2 className='text-2xl text-center text-cyan-600 font-semibold'> All users </h2> 
            <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}
                        {      
                            users.map((user,index) => <UserRow
                            key={user._id}
                            index={index}
                            user={user}
                            refetch={refetch}
                            ></UserRow>)
                        }

                    </tbody>
                </table>
        </div>
    );
};

export default Allusers;