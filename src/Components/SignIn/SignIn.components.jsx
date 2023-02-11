import React from 'react';
import FormInput from '../FormInput/FormInput.components';
import './SignIn.styles.css'

const SignIn = () => {
    return(
        <div className='SignIn'>
                <h2>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>
                <form>
                    <label>Email
                        <input type = 'email' required/>
                    </label>
                    <label>Email
                        <input type = 'email' required/>
                    </label>
                </form>
            </div>
    )
}

export default SignIn;