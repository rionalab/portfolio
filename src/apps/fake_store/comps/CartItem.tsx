import { cartItemType } from "../types"

type Props = {
    products: cartItemType[]
}

const CartItem:React.FC<Props> = ({ products }) => {


    return <div>
        im your cart item
    </div>
}


export default CartItem