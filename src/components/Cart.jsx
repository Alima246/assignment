import { useContext } from 'react'
import { CartContext } from '../context/Cart'
import { useNavigate  } from 'react-router-dom'; 



export const Cart = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    const navigate = useNavigate();

    
  return (
    <>
    <div className='flex justify-between items-center px-20 py-5'>
    <button className='text-2xl uppercase font-bold mt-10 text-center mb-10 font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700' onClick={()=>navigate("/")}>Shop</button>
    </div>
    <div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm">
    
  <h1 className="text-2xl font-bold">Cart</h1>
  <div className="flex flex-col gap-4">
    {cartItems.map((item) => (
      <div className="flex justify-between items-center" key={item.id}>
        <div className="flex gap-4">
          <img src={item.imageUrl} alt={item.name} className="rounded-md h-24" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{item.name}</h1>
            <p className="text-gray-600">{item.discountAmount}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              addToCart(item)
            }}
          >
            +
          </button>
          <p>{item.quantity}</p>
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              removeFromCart(item)
            }}
          >
            -
          </button>
        </div>
      </div>
    ))}
  </div>
  {
    cartItems.length > 0 ? (
      <div className="flex flex-col justify-between items-center">
    <h1 className="text-lg font-bold">Total: Rs{getCartTotal()}</h1>
    <button
      className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
      onClick={() => {
        clearCart()
      }}
    >
      Clear cart
    </button>
  </div>
    ) : (
      <h1 className="text-lg font-bold">Your cart is empty</h1>
    )
  }
</div>
    </>
  )
}

