import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';
import HomeServices from '../HomeServices/HomeServices';
import Latest from '../Latest/Latest';


// home all component added
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HomeServices></HomeServices>
            <Explore></Explore>
            <Latest></Latest>
        </div>
    );
};




export default Home;