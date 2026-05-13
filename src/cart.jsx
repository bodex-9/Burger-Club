
import { useSelector } from 'react-redux'
import { deleteCart } from './RTK/Slices/cartSlice';
import { Clear } from './RTK/Slices/cartSlice';
import { increment} from './RTK/Slices/cartSlice';
import { decrement } from './RTK/Slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Cart = ({isopen, setisopen}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartIt = useSelector(state => state.Cart)


const handlecheckout = ()=>
{
setisopen(false);
navigate('/check')
}
  


 const totalPrice = cartIt.reduce((acc,item) =>
  {
        acc+= item.price * item.quantity;
        return acc;
  },0)
  return (
    <div>
        <div className={`fixed inset-0 bg-black/80 opacity-50 z-40 transition-opacity duration-300 ${
          isopen? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} 
        onClick={() => setisopen(false) }/>

        <div className={`fixed top-0 right-0 h-full lg:w-90 xl:w-90 md:w-60 sm:w-20  bg-[#e5ebe3] shadow-2xl z-50 transition-transform duration-300 ease in out 
          ${
            isopen? 'translate-x-0' : 'translate-x-full'

          }
        `}>
          <div className="p-5 flex flex-col h-full">
            <div className='flex justify-between items-center border-b pb-4 '>
              <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button onClick={() => setisopen(false)} className="text-gray-800 hover:text-black">
              ✕
            </button>

            </div>
            <div className="flex-1 py-4 overflow-y-auto">
              <div className="flex justify-center  p-3">
            <button onClick={()=> dispatch(Clear())} className='px-3   font-semibold py-2 hover:bg-red-700 bg-red-600 text-white rounded-xl'>Clear All</button>

          </div>
            {cartIt.map((item) => 
            (
              <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-100">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover"/>
                </div>
                <div className="flex flex-1 flex-col">
    <div className="flex justify-between text-base font-medium text-gray-900">
      <h3 className="line-clamp-1">{item.name}</h3>
      <p className="ml-4">${item.price}</p>
    </div>
    <p className="mt-1 text-sm text-gray-500">{item.category}</p>

    
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center border rounded-lg">
        <button onClick={ () => dispatch(decrement(item))} className="px-2 py-1 hover:scale-105">-</button>
        <span className="px-2 text-sm">{item.quantity}</span>
        <button onClick={ () => dispatch(increment(item))} className="px-2 py-1 hover:scale-105">+</button>
      </div>
      <button onClick={()=> dispatch(deleteCart(item))} className="text-red-500 text-sm hover:underline">Delete</button>
    </div>
  </div>


              </div>
            ))}
            

          </div>
          <div className="flex justify-start p-3">
            <h3 className='text-lg font-semibold text-black/70'>Total Price: <span className='text-'>{totalPrice}$</span></h3>

          </div>
        
          <div className="border-t pt-4">
            <button onClick={() => handlecheckout()} className="w-full hover:cursor-pointer bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
              Checkout
            </button>
          </div>

        </div>
        </div>
     
    </div>
  )
}

export default Cart;
