
import { create } from 'zustand';

const useStore = create((set: any) => ({ 
    cart: [],

    showCart: false,

    addToCart: (menuItem: any) => set((state: any) => {
        const existingProductIndex = state.cart.findIndex((p: any) => p.id === menuItem.id); 

        if (existingProductIndex !== -1) { // uppdaterar quantity om produkter redan finns i varukorgen
            let newCart = [...state.cart]; 
            newCart[existingProductIndex].quantity += 1; 
            return { cart: newCart };
        } else {
            // retunerar cart och lägger till +1 quantity
            return { cart: [...state.cart, { ...menuItem, quantity: 1 }] };
        }
    }),

    // Lägga till produkter i varukorgen med "antal-knappen" i carten.
    updateProductQuantity: (productId: any, quantity: number) => set((state) => ({
        cart: state.cart.map((menuItem: any) =>
        menuItem.id === productId ? { ...menuItem, quantity: quantity } : menuItem
        ),
    })),
    
    // funktion för att ta bort produkt från varukorgen
    removeFromCart: (productId: any) => set((state) => ({
        cart: state.cart.filter((product: any) => product.id !== productId),
    })),

    // funktion för att visa min cart
    setShowCart: (show: any) => set(() => ({ showCart: show })), 


    // ORDERS
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
