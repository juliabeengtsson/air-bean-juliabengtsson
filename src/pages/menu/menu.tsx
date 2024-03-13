import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.scss';
import HeaderTop from '../../assets/header-top.png';
import HeaderBottom from '../../assets/header-bottom.png';
import NavButton from '../../assets/svg/nav.svg';
import Add from '../../assets/svg/add.svg';
import Cart from '../../assets/svg/cart.svg';

interface Menu {
    id: string,
    title: string,
    desc: string,
    price: number
}

const Menu = () => {
    const [menuItems, setMenuItems] = useState<Menu[]>([]);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    function handleClick() {
        navigate('/nav')
    }

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/beans');
            const data = await response.json();
            setMenuItems(data.menu);
            console.log(data.menu)
        }

        getData();

    }, [])
 
    return(
        <main className="menu-container">
            <section>
                <img src={HeaderTop} alt="Header top flowers"/>
            </section>

            <section className="nav-button-menu">
                <img src={NavButton} alt="Nav button menu" onClick={handleClick}/>
            </section>
            <section>
                <img src={Cart} alt="cart button" className="cart-button" />
                <div className="quantity-cart">{count}</div>
            </section>

            <h1>Meny</h1>

            <div>
                {menuItems.map(menuItem => (
                    <div key={menuItem.id} className="menu">
                        <div>
                            <img src={Add} alt="add button" className="add-button"
                            onClick={() => setCount((count) => count + 1)}
                            />
                        </div>
                        <div className="menu-title-desc">
                            <p className="title">{menuItem.title}</p>
                            <p className="desc">{menuItem.desc}</p>
                        </div>
                        <div className="menu-price">
                            <p>{menuItem.price} kr</p>
                        </div>
                    </div>
                ))}
            </div>

            <img src={HeaderBottom} alt="Header bottom flowers"/>
        </main>
    )

}

export default Menu;