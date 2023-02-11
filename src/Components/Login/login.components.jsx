import React from 'react';
import { Link } from 'react-router-dom'
import './login.styles.css'

const LoginComponent = () => {
    return (
        <Link className='link' to = "/">
            <h2> Login Now </h2>
        </Link>
    )
}

export default LoginComponent;