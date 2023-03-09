import React from 'react'
import FormInput from '../FormInput/FormInput.components';
import './SignUp.styles.css'
import Calendar from 'react-calendar';
import CustomButton from '../../Components/CustomButton/CustomButton.components'
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            selectedDate: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)

        const {password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

    //     let obj = this.state;
    //     fetch('/signup', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(obj)
    //     })
    //     .then(response=>response.json())
    //     .then(data=>console.log('success: ' + data))
    //     .catch(err=>console.log(err))
    // 
    }

    handleDateChange = (event) => {
        this.setState({selectedDate: event})
    }

    render() {
        const maxDate = new Date();
        return(
            <div className='SignUp'>
                <form onSubmit={this.handleSubmit} className='create-account'>
                    <div className='sign-up-form'>
                        <h2>Don't have an account?</h2>
                        <span className='text'>Sign up now!!</span>
                        <FormInput
                            type='text'
                            name='fullName'
                            value={this.state.fullName}
                            handleChange={this.handleChange}
                            label= 'Full Name'
                            required
                        />
                        <FormInput
                            type='text'
                            name='userName'
                            value={this.state.userName}
                            handleChange={this.handleChange}
                            label= 'Display Name'
                            required
                        />
                        <FormInput
                            type='email'
                            name='email'
                            value={this.state.email}
                            handleChange={this.handleChange}
                            label='Email'
                            required
                        />
                        <FormInput
                            type='password'
                            name='password'
                            value={this.state.password}
                            handleChange={this.handleChange}
                            label='Password (min 6 digit)'
                            required
                        />
                        <FormInput
                            type='password'
                            name='confirmPassword'
                            value={this.state.confirmPassword}
                            handleChange={this.handleChange}
                            label='Confirm Password'
                            required
                        />
                    </div>
                    <div className='account-details'>
                        <span className='text' >Please pick your date of birth</span>
                        <Calendar onChange={this.handleDateChange} maxDate = {maxDate} value = {this.state.selectedDate} />
                        <CustomButton type = 'submit' >SIGN UP</CustomButton>          
                        <span className='text' >Already Have an account? <Link to = '/login'>Login Now</Link></span>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;