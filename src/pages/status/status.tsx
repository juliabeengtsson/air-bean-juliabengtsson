import './status.scss'
import Drone from '../../assets/svg/drone.svg';
import Button from '../../components/button/Button';
import useStore from '../../store/store';

const Status = () => {

    const orderDetails = useStore(state => state.orderDetails);
    const ETA = useStore(state => state.eta);

    return(
        <main className="status-container">
            <p className="order-number">Ordernummer #{orderDetails}</p>

            <img src={Drone} alt="Drone svg" className="drone"/>

            <h1>Din beställning är på väg!</h1>

            <p className="order-minutes">{ETA} minuter</p>

            <Button title={'Ok, cool!'} filled={false} to='/menu'/>
        </main>
    )
}

export default Status;