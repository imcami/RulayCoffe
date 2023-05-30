import { useContext } from "react";

const CartContext = React.createContext([])


const CartProvider = ({children}) => {
 const [cart, setcart]  = () => useContext(CartContext)
 
const addItem = (item, quantity) => {
        const index = cart.findIndex(i => i.item.id === item.id)
        if(index > -1){
            const oldQy = cart[index].quantity
            cart.splice(index, 1)
            setcart([...cart, {item, quantity: quantity + oldQy}])
        }else{
            setcart([...cart, {item, quantity}])
        }
    }

        const removeItem = (itemId) => {
            const newCart = cart.filter(i => i.item.id !== itemId)
            setcart(newCart)
        }

    const clear = () => {
        setcart([])
    }

    const isInCart = (id) => {
        return cart.find(i => i.item.id === id)
    }

    const getTotal = () => {
        return cart.reduce((acum, valor) => acum + valor.item.price * valor.quantity, 0)
    }

    const getQuantity = () => {
        return cart.reduce((acum, valor) => acum + valor.quantity, 0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, getTotal, getQuantity}}>
            {children}
        </CartContext.Provider>
    )


}

export default CartProvider