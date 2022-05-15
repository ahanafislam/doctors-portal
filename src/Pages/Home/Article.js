import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Article = () => {
    return (
        <section className='container mx-auto md:px-10'>
            <article className="hero md:w-4/5 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg" alt='treatment-pic' />
                    <div className='md:ml-20'>
                        <h1 className="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">Get Started</button>
                    </div>
                </div>
            </article>
        </section>
    ); 
};

export default Article;