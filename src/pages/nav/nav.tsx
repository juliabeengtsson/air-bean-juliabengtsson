import "./nav.scss";
import Close from "../../assets/svg/close.svg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate()

    return(
        <main className="nav-container">
            <div className="close-img-button">
                <img src={Close} alt="Close nav button" onClick={() => navigate('/menu')}/>
            </div>

            <section className="menu-items">
                <a href="#">Meny</a>
                <hr />
                <a href="#">Vårt kaffe</a>
                <hr />
                <a href="#">Min profil</a>
                <hr />
                <a href="#">Orderstatus</a>
            </section>
        </main>
    )
}

export default Nav;