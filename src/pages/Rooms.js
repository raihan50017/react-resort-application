import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
               <Banner title="our rooms">
                   <Link to="/" className="btn-primary">
                       return to home
                   </Link>
               </Banner>
            </Hero>
            <RoomContainer></RoomContainer>
        </>
    );
};

export default Rooms;