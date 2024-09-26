// Contact_us.js
import React, { useState } from 'react';
import ContactUsInput from '../Contact_us_input/Contact_us_input'; 
import './Contact_us.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [suggestion, setSuggestion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, suggestion });
    };

    return (
        <form id="contate-nos" onSubmit={handleSubmit} className='form'>
            <h2>Contato</h2>
            <ContactUsInput
                label="Nome"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
            />
            <ContactUsInput
                label="Email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
            />
            <ContactUsInput
                label="Sugestão"
                placeholder="Digite sua sugestão"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                required={true}
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactUs;
