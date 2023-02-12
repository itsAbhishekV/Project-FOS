import React from "react";
import './FormInput.styles.css';

const FormInput = ({handleChange, label, ...otherInputProps}) => {
    return(
    <div className='group'>
        <input className='form-input' autoComplete="off" onChange={handleChange} {...otherInputProps} />
        {
            label ?
                <label className={`${
                    otherInputProps.value.length ? 'shrink' : ''
                } form-input-label `}>
                    {label}
                </label>
                :
                null
        }
    </div>
)}

export default FormInput;