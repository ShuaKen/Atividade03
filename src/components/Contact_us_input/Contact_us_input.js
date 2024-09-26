import React from 'react';
import './Contact_us_input.css';

const ContactUsInput = ({ label, type = 'text', placeholder, value, onChange, required = false }) => {
    return (
        <div className='contact-input'>
            <label>
                {label}
                {required && <span className='required'> *</span>}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className='input-field'
            />
        </div>
    );
};

export default ContactUsInput;
