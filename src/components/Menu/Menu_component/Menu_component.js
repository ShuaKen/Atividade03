import './Menu_component.css';

const MenuComponent = ({ menuComponent }) => {
    const id = menuComponent.replace(/\s+/g, '-').toLowerCase();
    
    return (
        <li className='menu-component'>
            <a href={`#${id}`} className='menu-link'>
                {menuComponent}
            </a>
        </li>
    );
};

export default MenuComponent;
