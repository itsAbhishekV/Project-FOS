import React from 'react';
import SignIN from '../../Components/SignIN/SignIN.component';
import SignUP from '../../Components/SignUP/SignUP.Components';
import './Login.styles.css'

const LoginPage = () => {
    return (
        <div>
            <SignIN/>
            <SignUP/>
        </div>
    )
}

export default LoginPage;