import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect( () => {
        const getProducts = async () => {
            const result = await axios.get('https://fakestoreapi.com/products');
            setProducts(result.data);
        }
        getProducts();
    }, [])

    const clickHandler = () => {
        // you need to increase count and send items to cart component
    }
  return (
    <div style={{marginTop: '15px'}}>
        <div className='productsWrapper'>
                {
                    products.map( (product) => {
                        return (
                            <div key={product.id} className='card'>
                                <img src={product.image}/>
                                <h6>{product.title}</h6>
                                <h5>{product.price}</h5>
                                <button className='btn' onClick={clickHandler}>Add to Cart</button>
                            </div>
                        )
                    })
                }
        </div>
    </div>
  )
}

export default Home