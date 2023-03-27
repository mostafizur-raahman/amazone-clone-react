
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('products.json');
            const data = await res.json();
            setProducts(data);
        }
        loadData();
    }, [])

    const handelAddTocart = (product) => {
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='grid mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 gap-3' >
                {
                    products.map((product) => <Product
                        key={product.id}
                        product={product}
                        handelAddTocart={handelAddTocart}
                    ></Product>)
                }
            </div>
            <div>
                <h1>order</h1>
                <h1>order items : {cart.length}</h1>
            </div>
        </div>
    );
};

export default Shop;