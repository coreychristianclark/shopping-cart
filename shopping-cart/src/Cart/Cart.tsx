import CartItem from "../CartItem/CartItem";
// Styles
import { Wrapper } from "./Cart.styles";
// Types
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items: CartItemType[]) =>
            items.reduce((acc: number, item) => acc + item.amount * item.price, 0) // Starting amount is $0.


    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>Your Cart Is Empty</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id} // Always need a key when mapping through an array.
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                /> // Called an 'implicit' return.
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart;