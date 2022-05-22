import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvailableAppointments = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    // useEffect(() => {
    //     fetch(`https://enigmatic-scrubland-01488.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // },[formattedDate])

    const { isLoading, error, data: services, refetch } = useQuery(['available', formattedDate], () =>
            fetch(`https://enigmatic-scrubland-01488.herokuapp.com/available?date=${formattedDate}`)
                .then(res =>res.json())
        )

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-10'>
            <h3 className='text-xl text-secondary text-center'>Available Services on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            />}
        </div>
    );
};

export default AvailableAppointments;