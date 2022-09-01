import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle, useSignInWithGithub, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Loading from '../../../optional/Loading';

const Register = () => {
    // sign in with gmail 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //  sign in with github 
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    //    create accout with email 
    const [
        createUserWithEmailAndPassword,
        user2,
        loading2,
        error2,
    ] = useCreateUserWithEmailAndPassword(auth);
    // react form 
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email,data.password);
        console.log(data)

    }
    //  handle Loading 
    if (loading || loading1 || loading2) {
        return <Loading />
    }
    //   handle error 
    let errorElement;
    if (error || error1 || error2) {
        errorElement = <div class="alert alert-error shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error?.message || error1?.message || error2?.message } </span>
            </div>
        </div>
    }
    if(user2){
        console.log(user2);
    }
    return (
        <section className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-semibold">Sign up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name field  */}
                        <div class="form-control w-full max-w-xs">
                            <input

                                type="text"
                                placeholder="Enter Your name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600 ">{errors.name.message}</span>}

                            </label>
                        </div>
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
                           <p className='my-2'> {errorElement} </p> 
                        <input type="submit" value='Sign up' className='input input-bordered w-full max-w-xs btn btn-primary text-white text-lg font-semibold' />
                    </form>
                    <div className='flex justify-between'>

                        <button class="btn btn-link text-black capitalize"> <Link to='/login'> Already Have an Account? </Link> </button>
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

export default Register;