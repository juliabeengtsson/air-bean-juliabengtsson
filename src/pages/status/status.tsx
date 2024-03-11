import React, { useEffect, useState } from 'react'
import './status.scss'
import Drone from '../../assets/svg/drone.svg';
import Button from '../../components/button/Button';

/* interface Order {
    name: string,
    price: string,
} */

const Status = () => {
    const [orderNumber, setOrderNumber] = useState([]);

    useEffect(() => {
        async function getOrderNumber() {
            const response = await fetch(`https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order/status/orderNr`);
            console.log(response, 'response')
            const data = await response.json();
            console.log(data, 'data')
            setOrderNumber(data.menu);
        }

        getOrderNumber();

    }, [])

    return(
        <main className="status-container">
            <p className="order-number">Ordernummer {orderNumber}</p>

            <img src={Drone} alt="Drone svg" className="drone"/>

            <h1>Din beställning är på väg!</h1>

            <p className="order-minutes">13 minuter</p>

            <Button title={'Ok, cool!'} filled={false} to='/profile'/>
        </main>
    )
}

export default Status;