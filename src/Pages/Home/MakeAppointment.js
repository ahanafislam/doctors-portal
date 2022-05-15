import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const MakeAppointment = () => {
    return (
        <section className="mt-16 md:mt-40">
            <div className="md:flex justify-center items-center bg-appointment-bg h-[533px]">
                <div className='mt-[-120px] hidden md:block'>
                    <img src={doctor} alt="doctor-pic" />
                </div>
                <div className='md:w-[533px] flex-row px-7 py-16'>
                    <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                    <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                    <p className='text-white mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>Get started</PrimaryBtn>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;