import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './DayPickerStyle.module.css';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());

    return (
        <section className='container mx-auto lg:px-10'>
            <div className="hero lg:min-h-screen 2xl:min-h-[838px] w-full lg:bg-hero-bg">
                <div className="hero-content flex-col lg:flex-row-reverse g-10">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='chair-pic'/>
                    <div className='lg:mr-28'>
                        <DayPicker
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;