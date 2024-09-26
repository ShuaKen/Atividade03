import MenuComponent from '../Menu_component/Menu_component.js';
import LogoComponent from '../Logo_component/Logo_component.js';
import './Menu.css';

const Menu = () => {
    const listItems = ['Melhores Filmes', 'Músicas Mais Escutadas','Contate-nos'];
    const logoUrl = 'https://bester.energy/wp-content/uploads/2019/01/bester-prensa.png';
    
    return (
        <nav className='menu'>
            <ul className='list-menu'>
                <LogoComponent id = 'logo'logo={logoUrl} />
                {listItems.map((item, index) => (
                    <MenuComponent key={index} menuComponent={item} />
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
