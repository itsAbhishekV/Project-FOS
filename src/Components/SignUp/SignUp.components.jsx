import React from 'react'
import FormInput from '../FormInput/FormInput.components';
import CustomButton from '../CustomButton/CustomButton.components';
import './SignUp.styles.css'

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='SignUp'>
                <h2>I do not have a account</h2>
                <span className='title'>Sign up with your email and password</span>
                <form className='sign-up-form'>
                    <FormInput
                        type='text'
                        name='fullName'
                        value={this.state.fullName}
                        onChange={this.handleChange}
                        label= 'Full Name'
                        required
                    />
                    <FormInput
                        type='text'
                        name='userName'
                        value={this.state.userName}
                        onChange={this.handleChange}
                        label='Username'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='Password (min 6 digit)'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton style = {{ width : '100%' }} type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;