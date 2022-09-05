import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate,useLocation } from "react-router-dom";
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../../optional/Loading';

const RequireAmin = ({children}) => {
    // get user from firebase
    const[user,loading,error] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user);
    // get location
    const location = useLocation();
    // handle loading 
    if(loading || adminLoading){
        return <Loading/>
    }
    // handle error 
    if(error){
        console.log(error);
    }
    if(!user || !admin){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    
    return children;
};

export default RequireAmin;