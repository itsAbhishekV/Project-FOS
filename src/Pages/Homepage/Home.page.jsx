import React from 'react';
import Trending from "../../Components/Trending/Trending.Components";
import HomepageTweets from '../../Components/HomeTweets/HomepageTweets.component';
import SideNavBar from '../../Components/Navbar/SideNavBar.Component';
import './Home.styles.css';

const HomePage = () => {
    return (
        <div className = 'HomePage' >
            <SideNavBar />
            <HomepageTweets /> 
            <Trending />
        </div>
    )
}

export default HomePage;