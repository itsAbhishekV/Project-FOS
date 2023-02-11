import React from 'react';
import './SideNavBar.styles.css';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import NewThotIcon from '../../Assets/2246837_new_tweet_write_icon.svg'
import FOSlogo from '../../Assets/FOS logo.svg'

const SideNavBar = () => {
    return (
        <div className='SideNavBar'>
            <Link to = '/' style={{ textDecoration: "none" }}>
                <span className='inlineNav mainTitle'>
                    <img src = {FOSlogo} alt = '' style={{height: '40px', width: '40px' }}/>
                    <li style={{ fontSize: '23px', fontWeight: '700', color: 'white'}}>FOS</li>
                </span>
            </Link>
            <span className='inlineNav navHover'>
                <HomeRoundedIcon fontSize='large' sx = {{ color: 'white' }}/>
                <li>Home</li>
            </span>
            <span className='inlineNav navHover'>
                <TagRoundedIcon fontSize='large' sx = {{ color: 'white' }}/>
                <li>Trending</li>
            </span>
            <span className='inlineNav navHover'>
                <Person2RoundedIcon fontSize='large' sx = {{ color: 'white' }}/>
                <li>Profile</li>
            </span>
            <span className='inlineNav navHover'>
                <img src = {NewThotIcon} alt = '' style={{ backgroundColor: 'aqua', height: '35px', width: '35px' }} />
                <li>New Thot</li>
            </span>
        </div>
    )
}

export default SideNavBar;