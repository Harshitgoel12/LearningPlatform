import React from 'react'
import {useSelector,useDispatch} from "react-redux";
const Cart = () => {
  const dispatch= useDispatch();
  const selector= useSelector((state)=>state.Cart.cartDetail)
console.log("details of course is here",selector)
let totalPrice=0;
selector?.map((ele)=>{
  totalPrice+=(+ele.Price);
})
  return (
    <div>
      <div>
        <h1 className='text-white text-4xl mt-16 ms-8 '>Cart</h1>
        <div className='mt-9'>
          <p className='text-gray-600 '>The Course in Cart</p>
          <hr  className='text-gray-600 text-lg w-11/12 mt-2'/>
        </div>
        <div className='flex gap-8'>
  
        <div className='w-2/3'>
        {selector.map((ele)=>{
    

return (<>
         <div className='flex justify-between w-full'>
         <div className='flex gap-6 mt-3'>
          <img src={ele?.Thumbnail} alt=""  className='h-32 w-48 mt-6 rounded-lg ms-3'/>
          <div>
            <h1 className='text-white text-2xl mt-8'>{ele?.Title}</h1>
            <p className='  text-gray-500 '>{ele?.Category}</p>
          </div>
          </div>

            <div>
              <h1 className='text-yellow-400 text-2xl mt-8 font-bold'>₹ {ele?.Price}</h1>
              <h1 className='px-2 py-1 bg-gray-600 text-white  mt-4'>Delete</h1>
            </div>
      
         </div>
         <hr className='w-full font-bold text-gray-600 mt-7'/>
         </>)
        })}
        </div>


        <div className='w-68 h-44 bg-[#161D29] rounded-xl border-1 border-gray-600'>
             <p className='text-gray-500  mt-6 ms-9'>Total</p>
             <h1 className='text-yellow-400 text-4xl ms-7'>₹{totalPrice}</h1>
             <button className='text-black text-lg font-semibold rounded-lg mt-5 ms-7 px-3 py-1 bg-yellow-400'>Buy Now </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
