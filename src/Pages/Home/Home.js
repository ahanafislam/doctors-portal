import React from 'react';
import Article from './Article';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <Article/>
            <MakeAppointment/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;