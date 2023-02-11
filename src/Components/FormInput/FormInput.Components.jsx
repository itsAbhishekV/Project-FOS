import React from 'react';
import './FormInput.styles.css'

const FormInput = ({label, ...otherInputProps}) => (
    <div className='group'>
        <input className='form-input' {...otherInputProps} />
    </div>
)

export default FormInput;