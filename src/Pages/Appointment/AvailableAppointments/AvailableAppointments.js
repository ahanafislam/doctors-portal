import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])

    return (
        <div className='mt-10'>
            <h3 className='text-xl text-secondary text-center'>Available Services on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;