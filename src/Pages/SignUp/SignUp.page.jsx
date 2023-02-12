import React from 'react';
import './SignUp.styles.css'

class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName: "",
            userId: "",
            Email: "",
            City: "",
            Country: "",
            DOB: "",
            Bio: "",
            Password: "",
            confirmPassword: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        fetch('', {
            method: 'POST',
            body: JSON.stringify(this.state)
        }).then((response) => {
            return response.json();
        })
        event.preventDefault();
    }


    render(){
        return (
            <div className='signuppage'>
            <form onSubmit={this.handleSubmit} className="form">
                <table>
                    <tr>
                        <td></td>
                        <td>
                            <h1>Sign Up</h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="username">
                                UserName: 
                            </label>
                        </td>
                        <td></td>
                        <td>
                            <input type='text' value={this.state.value} className='suinput' id='username' name='username' onChange={this.handleChange} placeholder='Eg: John Doe' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="userid">
                                UserId: 
                            </label>
                        </td>
                        <td></td>
                        <td>
                            <input type='text' value={this.state.value} className='suinput' id='userid' name='userid' onChange={this.handleChange} placeholder='Eg: Doe_John' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="email">
                                Email: 
                            </label>
                        </td>
                        <td></td>
                        <td>
                            <input type='email' value={this.state.value} className='suinput' id='email' name='email' onChange={this.handleChange} placeholder='Eg: Doe_John@hotmail.com' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="City">
                                City: 
                            </label>
                        </td>
                        <td></td>
                        <td>
                            <input type='text' value={this.state.value} className='suinput' id='city' name='city' onChange={this.handleChange} placeholder='Eg: New Delhi' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="Country">
                                Country: 
                            </label>
                        </td>
                        <td></td>
                        <td>
                            <input type='text' value={this.state.value} className='suinput' id='country' name='country' onChange={this.handleChange} placeholder='Eg: India' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="DOB">
                                Date Of Birth: 
                            </label>
                        </td>
                        <td></td>
                        <td>
                            <input type='text' value={this.state.value} className='suinput' id='DOB' name='DOB' onChange={this.handleChange} placeholder='Eg: 03-01-2003' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="bio">
                                Bio: 
                            </label>
                        </td>
                        <td></td>
                        <td>
                            <input type='text' value={this.state.value} className='suinput' id='bio' name='bio' onChange={this.handleChange} placeholder='Enter Your Bio...' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="password">
                                Password: 
                            </label>
                        </td>
                        <td></td>
                        <td>
                            <input type='password' value={this.state.value} className='suinput' id='password' name='password' onChange={this.handleChange} placeholder='Enter Password' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="cpassword">
                                Confirm Password: 
                            </label>
                        </td>
                        <td></td>
                        <td>
                            <input type='password' value={this.state.value} className='suinput' id='cpassword' name='cpassword' onChange={this.handleChange} placeholder='Confirm Password' />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                        </td>
                        <td>
                            <input type='submit' value='Sign Up' className='submit' />
                        </td>
                    </tr>
                </table>
            </form>
            </div>
        )
    }
}

export default SignUp;