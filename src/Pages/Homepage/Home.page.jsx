import React from 'react';
import HomepageTweets from '../../Components/HomeTweets/HomepageTweets.component';
import SideNavBar from '../../Components/Navbar/SideNavBar.Component';
import './Home.styles.css';

const HomePage = () => {
    return (
        <div className = 'HomePage' >
            <SideNavBar />
            <HomepageTweets /> 
        </div>
    )
}

export default HomePage;