import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ];

    return (
        <section className='container mx-auto md:px-10'>
            <div className='my-28 mx-auto'>
                <div className="text-center">
                    <h3 className='text-secondary text-xl font-bold uppercase'>Our Services</h3>
                    <h2 className='text-4xl mt-2'>Services We Provide</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mt-4'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;