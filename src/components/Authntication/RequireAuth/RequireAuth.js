import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate,useLocation } from "react-router-dom";
import auth from '../../../firebase.init';
import Loading from '../../../optional/Loading';

const RequireAuth = ({children}) => {
    // get user from firebase
    const[user,loading,error] = useAuthState(auth);
    // get location
    const location = useLocation();
    // handle loading 
    if(loading){
        return <Loading/>
    }
    // handle error 
    if(error){
        console.log(error);
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;