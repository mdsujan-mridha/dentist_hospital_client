import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 412) {
                    toast.error('You are not admin in this site');
                    
                }
              return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin `);
                    
                }
            })
    }

    return (
        <tr>
            <th> {index + 1} </th>
            <td> {user.email}</td>
            <td>
                {
                    role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs bg-secondary border-0">Make Admin</button>
                        :
                        role === 'admin' && <button style={{backgroundColor:'#C45AEC'}} class="btn btn-xs border-0">  Admin </button>

                }
            </td>
            <td><button class="btn btn-xs btn-error border-0">Remove user</button></td>
            <td></td>
        </tr>
    );
};

export default UserRow;