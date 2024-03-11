import React from 'react'
import './menu.scss';
import HeaderTop from '../../assets/header-top.png';
import HeaderBottom from '../../assets/header-bottom.png';
import NavButton from '../../assets/svg/nav.svg';
import { useEffect, useState } from 'react';

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
        }

        getData();

    }, [])


    return(

        <main className="menu-container">
            <section>
                <img src={HeaderTop} alt="Header top flowers"/>
            </section>

        
        {menuItems.map(menuItem => (
            <p key={menuItem.id}>{menuItem.title}</p>
        ))}
          

            {/* <img src={NavButton} alt="Nav button menu" /> */}

            <img src={HeaderBottom} alt="Header bottom flowers"/>
        </main>
    )

}

export default Menu;