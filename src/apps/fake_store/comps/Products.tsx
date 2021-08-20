import { cartItemType } from "../types"
import Product from "./Product"

type Props = {
    products: cartItemType[] | undefined,
    handleAddToCart: (id: cartItemType) => void
}

const Products:React.FC<Props> = ({ products, handleAddToCart }) => {



    return (
        <div className="products">

            <h3 className="text-center">List of Products</h3>
            <br/>

            <div className="product-list">
                {
                    products?.map( product => (
                        <Product
                            key={product.id}
                            handleAddToCart={handleAddToCart}
                            product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products