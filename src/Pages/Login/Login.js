import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleSignIn=(data)=>{
        signIn(data.email,data.password)
        .then(result=>{
            console.log(result)
            navigate('/')
        })
        .catch(err=>console.err(err))

    }
    return (
        <div className="hero-content flex-col lg:flex-row">

        <form onSubmit={handleSubmit(handleSignIn)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <div className="card-body">
                <h1 className="text-3xl font-bold text-center">Sign In!</h1>
                <img className=' h-15 w-1/2 rounded-full mx-auto' alt='' />
              
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" {...register("email", { required: 'Email is required' })} placeholder="Email" className="input input-bordered" />
                    {errors.email?.type === 'required' && <p className='text-red-600 mt-2'>Email is required</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password",
                        {
                            required: 'Password is required',
                            minLength: { value: 8, message: 'Password must be 8 character' }
                        })}
                        placeholder="password" className="input input-bordered" />
                    {errors.password && <p className='text-red-600 mt-2'>{errors.password?.message}</p>}

                    <label className="label">
                        <p>Already Login? <Link to='/login' className='text-cyan-700 font-bold'>Log in</Link></p>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <input className='btn-primary py-4 rounded-full w-full' value='Register' type="submit" />
                </div>
            </div>
        </form>
    </div>

    );
};

export default Login;