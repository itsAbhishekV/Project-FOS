import React from 'react';
import FormInput from '../FormInput/FormInput.components';
import CustomButton from '../CustomButton/CustomButton.components';
import signInWithGoogle from '../../Firebase/firebase.util';
import './SignIn.styles.css';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='SignIn'>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>

                <form>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onclick = {signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;