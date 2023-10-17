import React from 'react'
import { useContext, useEffect, useState } from 'react'
import axios from "axios"
import {Cart} from './Cart.jsx'
import { CartContext } from '../context/Cart'
import { useNavigate  } from 'react-router-dom'; 



export const Products = () => {

    const [products, setProducts] = useState([])
    const { cartItems, addToCart } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)

    const navigate = useNavigate();

    const getProducts = async () => {
        
        try {

            axios.post("http://3.7.252.58:4001/product/getAllProduct",

                { limit: 100, page: 0, search: '' }, { headers: { 'Content-Type': 'application/json', 'Cookie': 'connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYxBXBV6hG8' } })
                .then((resp) => {
                    
                    setProducts(resp.data)
                });

        } catch (error) {
            console.log(error);

        }
    }
    const toggle = () => {
        setShowModal(!showModal)
        navigate("/cart")
      }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div className='flex flex-col justify-center bg-gray-100'>
            <div className='flex justify-between items-center px-20 py-5'>
                <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shop</h1>
                {!showModal && <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
  onClick={toggle}
>Cart ({cartItems.length})</button>}
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
                {
                    products.map(product => (
                        <div key={product._id} className='bg-white shadow-md rounded-lg px-10 py-10'>
                            <img src={product.imageUrl} alt={product.name} className='rounded-md h-48' />
                            <div className='mt-4'>
                                <h1 className='text-lg uppercase font-bold'>{product.name}</h1>
                                <p className='mt-2 text-gray-600 text-sm'>Discount Price:-{product.discountAmount}</p>
                                <p className='mt-2 text-gray-600'>Price:-{product.price}</p>
                                <p className='mt-2 text-gray-600'>{product.description}</p>
                            </div>
                            <div className='mt-6 flex justify-between items-center'>
                                <button onClick={() => addToCart(product)} className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}
