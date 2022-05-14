import React from 'react';

const InfoCard = ({img, bgClass, cardTitle}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl mx-auto ${bgClass}`}>
            <figure className='lg:pl-5 pt-5'>
                <img src={img} alt="icon" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;