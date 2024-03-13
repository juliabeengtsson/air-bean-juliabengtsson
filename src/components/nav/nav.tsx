import Nav from '../../assets/svg/nav.svg';
import './navButton.scss';

const NavButton = () => {
     
    return(
        <div className="nav-btn">
            <img src={Nav} alt="nav button"/>
        </div>
    )
}

export default NavButton;