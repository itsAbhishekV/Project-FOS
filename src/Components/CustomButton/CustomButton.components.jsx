import React from "react";
import './CustomButton.styles.css';

const CustomButton = ({children, inverted, isGoogleSignIn, ...otherButtonProps}) => (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} \`} custom-button `}  {...otherButtonProps} >
            {children}
        </button>
)
export default CustomButton;