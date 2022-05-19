import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    // Style variable
    const formControl = 'py-4 px-5 rounded-lg border';
    return (
        <section className='container mx-auto lg:px-10 h-screen flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className="text-center text-xl">Login</div>
                    <form className='flex flex-col gap-5'>
                        <input type="email" name='email' placeholder='Email' className={formControl}/>
                        <input type="password" name='password' placeholder='Enter Your Password' className={formControl}/>
                        <Link to="/" className='text-xs'>Forget Password?</Link>
                        <button className='btn btn-accent text-white'>Login</button>
                        <p className='text-xs text-center'>New to Doctors Portal? <Link to='/registration' className='mx-1 text-secondary'>Create new account</Link></p>
                        <div className="divider">OR</div>
                        <button className='btn border bg-white border-accent text-accent hover:text-white'>Continue with google</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;