import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded"; // Types
import { CartItemType } from "../App";
// Styles
import { Wrapper } from "./CartItem.styles";
import { Check } from "@mui/icons-material";

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
        <CheckBoxOutlineBlankRoundedIcon
          size="small"
          disableElevation // Prevents any sort of drop shadow.
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </CheckBoxOutlineBlankRoundedIcon>

        <p>{item.amount}</p>

        <CheckBoxOutlineBlankRoundedIcon
          size="small"
          disableElevation // Prevents any sort of drop shadow.
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </CheckBoxOutlineBlankRoundedIcon>
      </div>
    </div>

    <img src={item.image} alt={item.title} />
  </Wrapper>
);
export default CartItem;
