import React from 'react';

const Review = ({review}) => {
    const {name, location, img} = review;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className='flex items-center mt-9'>
                    <div className="avatar">
                        <div className="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='patient-pic'/>
                        </div>
                    </div>
                    <div className='ml-[14px]'>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;