import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, getValues, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    // Style variable
    const formControl = 'py-4 px-5 rounded-lg border';

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate])

    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }

    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    const resetPassword = async () => {
        const email = getValues('email');
        await sendPasswordResetEmail(email);
        
        if(email) {
            alert("Please Check Your Email.");
        }

        else {
            alert("Please Provide email id");
        }
    }

    return (
        <section className='container mx-auto lg:px-10 h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="text-center text-xl">Login</div>
                    {signInError}
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className={formControl}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className={formControl}
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <button type='button' onClick={resetPassword} className='text-xs'>Forget Password?</button>
                        <button
                            className='btn btn-accent text-white'
                            type='submit'
                        >Login</button>
                        <p className='text-xs text-center'>New to Doctors Portal? <Link to='/registration' className='mx-1 text-secondary'>Create new account</Link></p>
                        <div className="divider">OR</div>
                        <button
                            className='btn border bg-white border-accent text-accent hover:text-white'
                            onClick={() => signInWithGoogle()}
                        >Continue with google</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;