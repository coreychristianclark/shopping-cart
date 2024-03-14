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
        </Wrapper>
    )
}

export default Cart;