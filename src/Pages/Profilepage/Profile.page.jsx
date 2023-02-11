import React from 'react';
import TestData from '../../Json Data/Homepage.data';
import './Profile.styles.css'

const ProfilePage = () => {
    return (
        <div className='ProfilePage'>
            {
                TestData.map((data, index) => (
                    <div className='bio' key={index}>
                       {data.profileData['bio']}
                    </div>
                ))
            }
        </div>
    )
}

export default ProfilePage;