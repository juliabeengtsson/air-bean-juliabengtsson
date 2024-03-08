import './menu.scss';
import HeaderTop from '../../assets/header-top.png';
import HeaderBottom from '../../assets/header-bottom.png';
import NavButton from '../../assets/svg/nav.svg';

const Menu = () => {
    return(
        <main className="menu-container">
            <section>
                <img src={HeaderTop} alt="Header top flowers"/>
                
            </section>

            <img src={NavButton} alt="Nav button menu" />

            <img src={HeaderBottom} alt="Header bottom flowers"/>
        </main>
    )
}

export default Menu;