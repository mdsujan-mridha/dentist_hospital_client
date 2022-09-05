import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../../optional/Loading';

const AddDoctors = () => {
    // react hooks form 
    const { register, formState: { errors }, handleSubmit , reset} = useForm();
    // load data from backden 
    const { data: services, isLoading } = useQuery('/services', () => fetch('http://localhost:5000/service').then(res => res.json()))
    // handle loading 
    if (isLoading) {
        return <Loading />
    }
    // image storage key 
    const imageStorageKey = 'b37cd1a19acb92fa6a0df20b5d58b874';
    // handle submit form 
    const onSubmit = async data => {
        console.log('data', data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageStorageKey}`
         fetch(url,{
            method:'POST',
           body:formData   
         })
         .then(res =>res.json())
          .then(result =>{
             if(result?.success){
                const img = result?.data?.url;
                const doctor ={
                    name:data?.name,
                    email:data?.email,
                    specialty:data?.specialty,
                    img:img,
                }
                // send on my database 
                fetch('http://localhost:5000/doctor',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body:JSON.stringify(doctor)
                })
                .then(res =>res.json())
                 .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success(`Doctor ${data.name} added successful`);
                        reset();
                    }
                    else{
                        toast.error(`Failed to add Doctor ${data?.name}`);
                    }
                 })
             }
            
          })
    }
    return (
        <section className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">

                <div class="card-body">
                    <h1> Add doctor </h1>
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
                        {/* specialty field  */}
                        <div class="form-control w-full max-w-xs">
                            <label className='label'> 
                            <span className='label-text'> Specialty </span>
                             </label>
                            <select {...register("specialty")} class="input input-bordered w-full max-w-xs mb-5">
                                {
                                    services?.map(service =>   <option
                                    key={service._id}
                                    value={service?.name}
                                    >{service?.name}</option>)
                                }
                                
                            </select>
                        </div>
                       {/* doctors pic field  */}
                         
                       <div class="form-control w-full max-w-xs">
                       <label className='label'> 
                            <span className='label-text'> Insert doctors photo </span>
                             </label>
                            <input

                                type="file"
                               
                                class="input input-bordered w-full max-w-xs p-2"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'image is Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600 ">{errors.name.message}</span>}

                            </label>
                        </div>

                        {/* input submit field  */}
                        <input type="submit" value='Add' className='input input-bordered w-full max-w-xs btn btn-primary text-white text-lg font-semibold' />
                    </form>
                </div>

            </div>
        </section>

    );
};

export default AddDoctors;