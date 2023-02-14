import React from 'react';
import './WhatsHappening.styles.css'

const WhatsHappening = () => {
    return (
        <div>
            <div className='WHcontainer'>
                <div className='WHfeilds Home'>Home</div>
                <div className='WHfeilds forYou'>For You</div>
            </div>
            <div className='WHinput'>
                <div className='pfp'>
                    <img className='pfp' src='https://i.ibb.co/99xYxXw/Unknown-Profile-Picture.jpg' />
                </div>
                <form action='' method='post' className='form'>
                    <textarea type='text' className='WH' name="whatsHappening" placeholder="What's happening?" maxLength="280" />
                    <br /><br />
                    <input type='submit' value="Thot" className="newThot" />
                </form>
            </div>
        </div>
    )
}

export default WhatsHappening;