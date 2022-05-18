import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Contact = () => {
    // Style variable
    const formControl = 'py-4 px-5 rounded-lg';

    return (
        <div className="bg-appointment-bg h-[604px] mt-36 flex items-center justify-center">
            <div>
                <div className="text-center mb-10">
                        <h3 className='text-secondary text-xl font-bold uppercase'>Contact Us</h3>
                        <h2 className='text-4xl mt-2 text-white'>Stay connected with us</h2>
                </div>
                <form className='flex flex-col gap-5'>
                    <input type="email" placeholder='Email Address' className={formControl}/>
                    <input type="text" placeholder='Subject' className={formControl}/>
                    <textarea placeholder='Your message' className={formControl}></textarea>
                    <div className='text-center'>
                        <PrimaryBtn>Submit</PrimaryBtn>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;