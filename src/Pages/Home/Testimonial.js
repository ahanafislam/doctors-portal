import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            review: '',
            location: 'California',
            img: people1
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people2
        },
        {
            _id:3,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people3
        },
    ];

    return (
        <section className='container mx-auto md:px-10 mt-20'>
            <div className='flex justify-between'>
                <div className='ml-[23px] md:ml-0'>
                    <h3 className='text-xl text-primary font-bold'>Testimonial</h3>
                    <h2 className='text-3xl'>What Our Patients Says</h2> 
                </div>
                <div>
                    <img src={quote} alt="quote-sign" className='w-20 md:w-[156px]' />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mx-auto">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </section>
    );
};

export default Testimonial;