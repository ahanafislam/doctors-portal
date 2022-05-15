import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Banner = () => {
    return (
        <section className='container mx-auto lg:px-10'>
            <div className="hero lg:min-h-screen w-full lg:bg-hero-bg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='chair-pic'/>
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       <PrimaryBtn>Get started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;