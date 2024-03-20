import './cart.scss';
import useStore from '../../store/store';
import Arrow from '../../assets/svg/Arrow.svg';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    
    const { cart, updateProductQuantity, removeFromCart, sendOrder } = useStore((state) => ({
        cart: state.cart,
        updateProductQuantity: state.updateProductQuantity,
        removeFromCart: state.removeFromCart,
        sendOrder: state.sendOrder
    }));

    const handleCheckout = () => {
        sendOrder();
        navigate('/status');
    }

    const increaseQuantity = (productId: number) => {
        const product = cart.find((product) => product.id === productId);

        updateProductQuantity(productId, product.quantity + 1);
    };

    const decreaseQuantity = (productId: number) => {
        const product = cart.find((product) => product.id === productId);

        if (product.quantity > 1) {
            updateProductQuantity(productId, product.quantity - 1);
        } else {
            removeFromCart(productId);
        }
    };

    const total = cart.reduce((total, menuItem) => total + (menuItem.price * menuItem.quantity), 0);

    console.log(cart)

    return(
        <main className="cart-overlay-container">
            <section className="cart-container">
                <h1>Din beställning</h1>

                {cart.map((menuItem) => (

                    <section key={menuItem.id}>
                        <div className="cart-content">
                            <div className="in-your-cart">
                                <h2>{menuItem.title}</h2>
                                <p>{menuItem.price}kr</p>
                            </div>
                            <div>
                                <img src={Arrow} alt="" onClick={() => increaseQuantity(menuItem.id)}/>
                                <p>{menuItem.quantity}</p>
                                <img src={Arrow} alt="" className="arrow-icon" onClick={() => decreaseQuantity(menuItem.id)}/>
                            </div>
                        </div>
                    </section>
                ))}

                <section className="total-button">
                    <div className="total">
                        <div>
                            <h2>Total</h2>
                            <span className="moms">inkl moms + drönarleverans</span>
                        </div>
                        <div className="price">
                            <span>{total} kr</span>
                        </div>
                    </div>

                    <section className="button-container" onClick={handleCheckout}>
                        <Button title={'Take my money!'} filled={true} />
                    </section>
                </section>
            </section>
        </main>
    )
}

export default Cart;