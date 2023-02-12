import React from 'react';
import SignIn from '../../Components/SignIn/SignIn.components'
// import SignUp from '../../Components/SignUp/SignUp.components'
import './Login.styles.css'

const LoginPage = () => {
    return(
        <div className='LoginPage'>
            <SignIn/>
        </div>
    )
}

export default LoginPage;