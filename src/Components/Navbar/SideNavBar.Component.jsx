import React, { useState } from 'react';
import './SideNavBar.styles.css';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import NewThotIcon from '../../Assets/2246837_new_tweet_write_icon.svg'
import newLogo from '../../Assets/newLogo.png'
import EmailIcon from '@mui/icons-material/Email'
import { auth } from '../../Firebase/firebase.util';
import UserSignOut from '../../Functions/SignOut';
import Modal from 'react-overlays/Modal';
import styled from '@emotion/styled';
import maleavatar from '../../Assets/Male Avatar.svg';
import CloseIcon from '@mui/icons-material/Close';

const SideNavBar = () => {

    const [show, setShow] = useState(false);

    const Backdrop = styled("div")`
        position: fixed;
        z-index: 1040;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #000;
        opacity: 0.5;
    `;


    const RandomlyPositionedModal = styled(Modal)`
        position: fixed;
        height: 100vh;
        width: 100vw;
        z-index: 1040;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(8px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    `;
    
    const renderBackdrop = ()=><Backdrop />

    return (
        <>
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
            <span className='inlineNav navHover' onClick={()=>{setShow(true)}}>
                <img src = {NewThotIcon} alt = '' style={{ backgroundColor: 'aqua', height: '35px', width: '35px' }} />
                <li>New Thot</li>
            </span>

            <span className='inlineNav navHover'>
                <button onClick={UserSignOut}> SIGN OUT OF @{auth.currentUser.displayName} </button>
            </span>
        </div>
        <RandomlyPositionedModal show={show} onHide={()=>setShow(false)} renderBackdrop={renderBackdrop} autoFocus={show}> 
            <div className='modal-container'>
                <button className='close-modal' onClick={()=>setShow(false)}><CloseIcon /></button>
                <form action='/post' method='post'>
                <div className='modal-header'>
                    <div style={{width: '50px', height: "200px"}}>
                        <img src={maleavatar} alt="" className='modal-avatar' />
                    </div>
                    <textarea type='text' placeholder="What's Happening?" className='modal-input' maxLength="280" />
                </div>
                <div className='modal-thot'>
                    <button className='newthot' type='submit'>Thot</button>
                </div>
                </form>
            </div>
        </RandomlyPositionedModal>
        </>
    )
}

export default SideNavBar;