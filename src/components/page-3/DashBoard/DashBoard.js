import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet,Link } from "react-router-dom";
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const DashBoard = () => {
    const[user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content px-12 my-5">
                {/* <!-- Page content here --> */}
                 <h1 className='text-3xl text-center text-primary font-semibold'> Welcome to your Dashboard </h1>
                <Outlet/>
                

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard"> My Appointment </Link></li>
                    <li><Link to="/dashboard/myreview"> My Review </Link></li>
                    <li><Link to="/dashboard/history"> My History </Link></li>
                    { admin && 
                       <>
                        <li> <Link to="/dashboard/users"> All users </Link> </li>
                        <li> <Link to="/dashboard/addDoctor"> Add new Doctor </Link> </li>
                        <li> <Link to="/dashboard/manageDoctors"> Manage Doctors </Link> </li>
                       </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;