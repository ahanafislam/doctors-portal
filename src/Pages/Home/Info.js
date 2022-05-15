import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    const bgGradient = 'bg-gradient-to-r from-secondary to-primary';

    return (
        <section className='container mx-auto md:px-10'>
            <div className='grid grid-col-1 md:grid-cols-3 gap-5 mt-5 mx-auto'>
                <InfoCard img={clock} bgClass={bgGradient} cardTitle="Opening Hours" />
                <InfoCard img={marker} bgClass='bg-accent' cardTitle="Visit our location" />
                <InfoCard img={phone} bgClass={bgGradient} cardTitle="Contact us now" />
            </div>
        </section>
    );
};

export default Info;