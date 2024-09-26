import './Logo_component.css';

const LogoComponent = ({ logo }) => {
    return (
        <li className='logo-component'>
            <a href="#top"> {}
                <img src={logo} alt="Logo" className='logo-image' />
            </a>
        </li>
    );
};

export default LogoComponent;
