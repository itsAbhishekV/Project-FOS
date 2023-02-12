import React from 'react';
import NavBar from '../../Components/Navbar/SideNavBar.Component';
import Profile from "../../Components/Profile/Profile.component";
import Trending from '../../Components/Trending/Trending.Components';
import './Profile.styles.css'

const ProfilePage = () => {
    return (
        <div className='ProfilePage'>
            <NavBar />
            <Profile />
            <Trending />
        </div>
    )
}

export default ProfilePage;