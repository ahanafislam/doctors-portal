import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            <Info/>
            <Services/>
        </div>
    );
};

export default Home;