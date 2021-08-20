import { cartItemType } from "../types"

type Props = {
    products: cartItemType[],
    handleClick: () => void,
}

const Cart:React.FC<Props> = ({products, handleClick}) => {

    return (
        <div>
            <button onClick={handleClick}>Cart ({products.length})</button>
        </div>
    )
}

export default Cart

