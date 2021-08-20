import {useState} from 'react'
import { useQuery } from 'react-query'
import Cart from './comps/Cart'
import {default as CartItemComp} from './comps/CartItem'
import Drawer from './comps/Drawer'
import Products from './comps/Products'
import { cartItemType } from './types'

const url = 'https://fakestoreapi.com/products'
const getProducts = async ():Promise<cartItemType[]> => await (await fetch(url)).json()

const App = () => {

    const [cartItem, setCartItem] = useState<cartItemType[]>([])
    const { data, isLoading, error } = useQuery('products', getProducts)
    const [showDrawer, setShowDrawer] = useState<boolean>(false)

    if(isLoading) return <i>Loading ... </i>
    if(error) return <i>error ...</i>

     const handleAddToCart = (product: cartItemType) => {

        const isProductAlrAdded = cartItem.find(productOnCart => productOnCart.id === product.id)

        if(isProductAlrAdded) {
            setCartItem( prevState => {
                return cartItem.map( row => {
                    if(row.id === product.id)
                    row.amount = row.amount + 1;

                    return row;
                })
            })
        }else {
            setCartItem([...cartItem, product]);
        }

    }

    console.log(showDrawer);


    return (
        <>
            <Cart handleClick={()=>setShowDrawer(!showDrawer)} products={cartItem} />
            <Drawer show={showDrawer}>
                <CartItemComp products={cartItem} />
            </Drawer>
            <Products handleAddToCart={handleAddToCart} products={data} />
        </>
    )
}

export default App