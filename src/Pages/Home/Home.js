import React from 'react';
import Article from './Article';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='container mx-auto lg:px-10'>
            <Banner/>
            <Info/>
            <Services/>
            <Article/>
        </div>
    );
};

export default Home;