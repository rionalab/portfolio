import { cartItemType } from "../types"

type Props = {
    product: cartItemType,
    handleAddToCart: (id: cartItemType) => void
}

const Product:React.FC<Props> = ({ product, handleAddToCart }) => {
    return (
        <div className="product-item">
            <div className="img">
                <img src={product.image} alt=""/>
            </div>
            <div className="bottom">
                <p className="title">{product.title}</p>
                <p className="desc">{product.description.substring(0, 50)}...</p>
                <p className="price">USD {product.price}</p>
                <button onClick={() => handleAddToCart(product)}>+ Add to Cart</button>
            </div>
        </div>
    )
}

export default Product