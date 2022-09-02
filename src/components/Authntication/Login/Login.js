import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle, useSignInWithGithub, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Loading from '../../../optional/Loading';

const Login = () => {
    // sign in with gmail 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //  sign in with github 
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    // react form 
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.form?.pathname || "/";

    // sign in with email and password 
    const [
        signInWithEmailAndPassword,
        user2,
        loading2,
        error2,
    ] = useSignInWithEmailAndPassword(auth);
    //   handle submit 
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email,data.password);
        console.log(data)
        
    }
    // handle loading 
    if (loading || loading1 || loading2) {
        return <Loading />
    }
    // replace after get login 
     if(user || user1 || user2){
         navigate(from,{replace: true});
     }
    // handle error 
   let errorElement;
    if (error || error1 || error2) {
        errorElement = <div class="alert alert-error shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error?.message || error1?.message || error2?.message} </span>
            </div>
        </div>
    }
    return (
        <section className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-semibold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* email field  */}
                        <div class="form-control w-full max-w-xs">
                            <input
                                type="email"
                                placeholder="Enter Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600 ">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600 ">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* password field  */}
                        <div class="form-control w-full max-w-xs">
                            <input

                                type="password"
                                placeholder="Enter password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    pattern: {
                                        value: /^[A-Z]*$/,
                                        message: 'Provide a valid password'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600 ">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-600 ">{errors.password.message}</span>}
                            </label>
                        </div>
                       <p className='my-2'>{errorElement}</p>
                        <input type="submit" value='Login' className='input input-bordered w-full max-w-xs btn btn-primary text-white text-lg font-semibold' />
                    </form>
                    <div className='flex justify-between'>
                        <button class="btn btn-link text-black capitalize">Forgot password?</button>
                        <button class="btn btn-link text-black capitalize"> <Link to='/register'> Have no account? </Link> </button>
                    </div>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline flex gap-2'> <FcGoogle className='text-4xl font-semibold' /> Login with google </button>
                    <button
                        onClick={() => signInWithGithub()}
                        className='btn btn-outline flex gap-2'>
                        <BsGithub className='text-4xl font-semibold' /> Login with github </button>
                </div>

            </div>
        </section>
    );
};

export default Login;