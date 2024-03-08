import "./landing.scss"
import HeaderLeft from "../../assets/header-left.png";
import HeaderRight from "../../assets/header-right.png";
import Logo from "../../assets/svg/logo.svg"
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate()

    return(
        <main className="airbean-container" onClick={() => navigate('/menu')}>
            <section className="header-left">
                <img src={HeaderLeft} alt="flowers to left"/>
            </section>
            <div className="main-text">
                <img src={Logo} alt="Logo with the letter A" width={64} height={64} />
                <h1>Air bean</h1>
                <p>Dronedelivered coffee</p>
            </div>
            <section className="header-right">
                <img src={HeaderRight} alt="flowers to right"/>
            </section>
        </main>
    )
}

export default Landing;