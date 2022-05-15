import React from 'react';
import Article from './Article';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <>
            <Banner/>
            <Info/>
            <Services/>
            <Article/>
            <MakeAppointment/>
        </>
    );
};

export default Home;