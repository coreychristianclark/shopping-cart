// Types
import Button from "@mui/material/Button";
import { CartItemType } from "../App";
// Styles
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>{" "}
        {/* .toFixed(2) gives us two decimal places. */}
      </div>

      <div className="buttons">
        <Button
          size="small"
          disableElevation // Prevents any sort of drop shadow.
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>

        <p>{item.amount}</p>

        <Button
          size="small"
          disableElevation // Prevents any sort of drop shadow.
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>

    <img src={item.image} alt={item.title} />
  </Wrapper>
);
export default CartItem;
