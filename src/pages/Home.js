import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';
const Home = () => {
    return (
        <div>
            <>
            <Hero>
                <Banner title="luxurious rooms" subtitle="delux room starting at $299">
                   <Link to="/rooms" className="btn-primary">
                       our rooms
                   </Link>
                </Banner>
            </Hero>
            <Services></Services>
            <FeaturedRoom></FeaturedRoom>
            </>
        </div>
    );
};

export default Home;