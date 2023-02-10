import React from 'react';
import './HomepageTweets.styles.css'
import TestData from '../../Json Data/Homepage.data';
import Verified from '../../Assets/FOS logo.svg'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

const HomepageTweets = () => {
    return (
        <div className='HomeTweetComponent'>
            {
                TestData.map((data, index) => (
                    <div className='tweetDiv' key={index}>
                        <div className='imgClass'>
                            <img  style = {{ height: '48px', width: '48px' }} src = {data.profilePicture} alt = ''/>
                        </div>
                        <div className='tweetMain'>
                            <div className='tweetHeader'>
                                <span className='userName'>{data.userName}</span>
                                {
                                    data.verified ? <span className='verified'>
                                        <img src={Verified} style = {{ height: '16px', width: '16px', 'margin-left': '8px'}}alt = ''/>
                                    </span> : null
                                }
                                <span className='userId'>@{data.userID}</span>
                            </div>
                            <div className='tweetData'>
                                <span>{data.tweet['data']}</span>
                            </div>
                            <div className='tweetAnalytics'>
                                <div className='tweetAnal like'><FavoriteBorderOutlinedIcon className={"like"} sx = {{ color: '#71767B', height: '16px', width: '16px'}} />{data.tweet['likes']}</div>
                                <div className='tweetAnal comment'><ModeCommentOutlinedIcon className={"comment"} sx = {{ color: '#71767B', height: '15px', width: '16px'}} />{data.tweet['comments']}</div>
                                <div className='tweetAnal follow'><PersonAddOutlinedIcon className={"follow"} sx = {{ color: '#71767B', height: '18px', width: '18px'}} /></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HomepageTweets;