import Button from '@mui/material/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}


const Item: React.FC<Props> = ({ item, handleAddToCart }) => ( // React Function Component
    <Wrapper>
        <img src={item.image} alt={item.title} /> {/* These will be from the data we retrieve. */}
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button> {/* We must use an inline function here. If we did not, the event would trigger right away. */}
    </Wrapper>
) 

export default Item;




