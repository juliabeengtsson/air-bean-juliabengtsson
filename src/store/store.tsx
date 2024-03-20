
import { create } from 'zustand';

// create definierar både det initiala tillståndet och en uppsättning åtgärder (som addToCart) 
const useStore = create((set: any) => ({ 
    cart: [],

    showCart: false,

    addToCart: (menuItem: any) => set((state: any) => {

        const existingProductIndex = state.cart.findIndex((p: any) => p.id === menuItem.id); // state.cart är ju den tomma arrayen vi skapade ovan. 

        if (existingProductIndex !== -1) { // Produkt finns redan, uppdatera quantity. Om existingProductIndex har någon annan siffra än -1, dvs. om den inte har -1
        let newCart = [...state.cart]; // så skapar vi en newCart, som vi ger värdet state.cart. Detta är vår carts dåvarande tillstånd. 
        newCart[existingProductIndex].quantity += 1; // Antag att varje produktobjekt nu har en 'quantity'-property
        return { cart: newCart };
        } else {
        // Produkt finns inte, lägg till med quantity = 1
        return { cart: [...state.cart, { ...menuItem, quantity: 1 }] };
        }

    }),

  
    updateProductQuantity: (productId, quantity) => set((state) => ({
        cart: state.cart.map((menuItem: any) =>
        menuItem.id === productId ? { ...menuItem, quantity: quantity } : menuItem
        ),
    })),
    

    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((product) => product.id !== productId),
    })),


    setShowCart: (show: any) => set(() => ({ showCart: show })), 

    orders: [],
    orderDetails: null,


    sendOrder: () => set(() => {
    const ordernumber = Math.floor(Math.random() * 1000);
    const eta = Math.floor(Math.random() * 20) + 10;

    return {
        cart: [],
        orderDetails: ordernumber,
        eta: eta
    };

    }),

}));

export default useStore;
