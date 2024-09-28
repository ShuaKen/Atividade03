import React, { useState } from 'react'; // Importa React e o hook useState
import ContactUsInput from '../Contact_us_input/Contact_us_input'; // Importa o componente de entrada personalizado
import './Contact_us.css'; // Importa o arquivo de estilo CSS

const ContactUs = () => {
    // Estado local para armazenar os valores dos campos do formulário
    const [name, setName] = useState(''); // Armazena o nome do usuário
    const [email, setEmail] = useState(''); // Armazena o email do usuário
    const [suggestion, setSuggestion] = useState(''); // Armazena a sugestão do usuário

    // Função chamada ao enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Previna o comportamento padrão do formulário (recarregar a página)
        // Imprime os dados do formulário no console
        console.log({ name, email, suggestion });
    };

    return (
        <form id="contate-nos" onSubmit={handleSubmit} className='form'>
            <h2>Contato</h2> {/* Título do formulário */}
            <ContactUsInput
                label="Nome" // Rótulo do campo
                placeholder="Digite seu nome" // Texto de exemplo no campo
                value={name} // Valor atual do campo
                onChange={(e) => setName(e.target.value)} // Atualiza o estado quando o valor muda
                required={true} // Campo obrigatório
            />
            <ContactUsInput
                label="Email" // Rótulo do campo
                type="email" // Define o tipo como email
                placeholder="Digite seu email" // Texto de exemplo no campo
                value={email} // Valor atual do campo
                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado quando o valor muda
                required={true} // Campo obrigatório
            />
            <ContactUsInput
                label="Sugestão" // Rótulo do campo
                placeholder="Digite sua sugestão" // Texto de exemplo no campo
                value={suggestion} // Valor atual do campo
                onChange={(e) => setSuggestion(e.target.value)} // Atualiza o estado quando o valor muda
                required={true} // Campo obrigatório
            />
            <button type="submit">Enviar</button> {/* Botão para enviar o formulário */}
        </form>
    );
};

export default ContactUs; 
