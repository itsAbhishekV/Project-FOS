import React from 'react';
import './HomepageTweets.styles.css'
import TestData from '../../Json Data/Homepage.data';

const HomepageTweets = () => {
    return (
        <div className='HomeTweetsComponents'>
            {
                TestData.map((data, index) => 
                    (<div className='header' key={index} >
                        <img src = {data.profilePicture} alt = ''/>
                        <span className='userName' >{data.userName}</span>
                        <span className='userId'>{data.userID}</span>
                    </div>)
                )
            }
        </div>
    )
}

export default HomepageTweets;