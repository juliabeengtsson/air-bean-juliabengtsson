import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.scss';
import HeaderTop from '../../assets/header-top.png';
import HeaderBottom from '../../assets/header-bottom.png';
import NavButton from '../../assets/svg/nav.svg';
import Add from '../../assets/svg/add.svg';
import CartIcon from '../../assets/svg/cart.svg';
import useStore from '../../store/store';
import Cart from '../../components/cart/Cart';

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

    const { addToCart, showCart, setShowCart } = useStore((state) => ({ 

        addToCart: state.addToCart, // Här referar vi till addToCart som vi skapade i Zustand-store, och möjligheten att manipulera dess state. 
        showCart: state.showCart, // Showcart har ju false, vet vi ju. Detta deklarerade vi nästan först i Zustand-storen. 
        setShowCart: state.setShowCart, // setShowCart är uppdateringsfunktionen för vår cart.

    }));

    //console.log(addToCart(menuItems), 'hej')

 
    return(
        <main className="menu-container">
            <section>
                <img src={HeaderTop} alt="Header top flowers"/>
            </section>

            <section className="nav-button-menu">
                <img src={NavButton} alt="Nav button menu" onClick={handleClick}/>
            </section>
            <section onClick={() => setShowCart(!showCart)}>
                <img src={CartIcon} alt="cart button" className="cart-button" />
                <div className="quantity-cart" >{count}</div>
            </section>

            {showCart && (
                <Cart />
            )}

            <h1>Meny</h1>

            <div>
                {menuItems.map(menuItem => (
                    <div key={menuItem.id} className="menu">
                        <div>
                            <img src={Add} alt="add button" className="add-button" onClick={() => [addToCart(menuItem), setCount( count + 1 )]}
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