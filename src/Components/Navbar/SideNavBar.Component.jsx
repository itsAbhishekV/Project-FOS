import React from 'react';
import './SideNavBar.styles.css';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import NewThotIcon from '../../Assets/2246837_new_tweet_write_icon.svg'
import newLogo from '../../Assets/newLogo.png'
import EmailIcon from '@mui/icons-material/Email';
import { auth } from '../../Firebase/firebase.util';
import UserSignOut from '../../Functions/SignOut';

const SideNavBar = () => {
    return (
        <div className='SideNavBar'>
            <Link to = '/' style={{ textDecoration: "none" }}>
                <span className='inlineNav mainTitle'>
                    <img src = {newLogo} alt = '' style={{height: '50px', width: '50px' }}/>
                    <li style={{ fontSize: '23px', fontWeight: '700', color: 'white'}}>FOS</li>
                </span>
            </Link>
            <Link to='/' style={{ textDecoration: "none", color: "white" }}>
            <span className='inlineNav navHover'>
                <HomeRoundedIcon fontSize='large' sx = {{ color: 'white' }}/>
                <li>Home</li>
            </span>
            </Link>
            <Link to="/trending" style={{ textDecoration: "none", color: "white" }}>
            <span className='inlineNav navHover'>
                <TagRoundedIcon fontSize='large' sx = {{ color: 'white' }}/>
                <li>Trending</li>
            </span>
            </Link>
            <Link to="/messages" style={{ textDecoration: "none", color: "white" }}>
            <span className='inlineNav navHover'>
                <EmailIcon fontSize='large' sx = {{ color: 'white', height: "30px", width: "30px", marginLeft: "2px" }}/>
                <li style={{marginLeft: "16px"}}>Messages</li>
            </span>
            </Link>
            <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>
            <span className='inlineNav navHover'>
                <Person2RoundedIcon fontSize='large' sx = {{ color: 'white' }}/>
                <li>Profile</li>
            </span>
            </Link>
            <span className='inlineNav navHover'>
                <img src = {NewThotIcon} alt = '' style={{ backgroundColor: 'aqua', height: '35px', width: '35px' }} />
                <li>New Thot</li>
            </span>

            <span className='inlineNav navHover'>
                <button onClick={UserSignOut}> SIGN OUT OF @{auth.currentUser.displayName} </button>
            </span>
        </div>
    )
}

export default SideNavBar;