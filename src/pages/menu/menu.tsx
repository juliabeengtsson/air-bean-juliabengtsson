import React from 'react'
import './menu.scss';
import HeaderTop from '../../assets/header-top.png';
import HeaderBottom from '../../assets/header-bottom.png';
import NavButton from '../../assets/svg/nav.svg';
import { useEffect, useState } from 'react';
import Add from '../../assets/svg/add.svg';

interface Menu {
    id: string,
    title: string,
    desc: string,
    price: number
}

const Menu = () => {
    const [menuItems, setMenuItems] = useState<Menu[]>([]);

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

            <h1>Meny</h1>

            <div>
                {menuItems.map(menuItem => (
                    <div key={menuItem.id} className="menu">
                        <div>
                            <img src={Add} alt="add button" className="add-button"/>
                        </div>
                        <div className="menu-title-desc">
                            <p className="title">{menuItem.title}</p>
                            <p className="desc">{menuItem.desc}</p>
                        </div>
                        <div className="menu-price">
                            <p>{menuItem.price}</p>
                        </div>
                    </div>
                ))}
            </div>
          

            {/* <img src={NavButton} alt="Nav button menu" /> */}

            <img src={HeaderBottom} alt="Header bottom flowers"/>
        </main>
    )

}

export default Menu;