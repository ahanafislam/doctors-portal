import React from 'react';

const Service = ({service}) => {
    const {name, slots} = service;

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
                <div className="card-actions justify-center">
                <button disabled={slots.length === 0} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;