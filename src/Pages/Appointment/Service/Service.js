import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots, price} = service;

    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-bold text-xl text-secondary text-center">{name}</h2>
                <p className='text-small'>{
                    slots.length
                    ? <span>{slots[0]}</span>
                    : <span className='text-red-500'>Try another day</span>
                }</p>
                <p className='text-small'>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                <p><small>${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;