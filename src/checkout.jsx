import { useState } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Clear } from "./RTK/Slices/cartSlice";
const Checkout = () => {
const cartit = useSelector(state => state.Cart);
const dispatch = useDispatch()
const totalPrice = cartit.reduce((acc,item) =>
{
        acc += item.price * item.quantity;
        return acc;
},0)
const [formData,setformData] = useState({
    name:'',
    adress:'',
    number:'',
    pay:'',
    email:''
});


   const formsubmit = (e) =>
   {
    e.preventDefault();
    if (!formData.name || !formData.number || !formData.adress || !formData.pay) {
  Swal.fire({
    title: "Missing Data",
    text: "Order failed to submit. Please check your details and try again..",
    icon: "error",
  
    background: "#0f2f26",
    color: "#ffffff",
  
    confirmButtonColor: "#f97316",
  
    iconColor: "#f97316",
  
    customClass: {
      popup: "rounded-xl shadow-2xl border border-[#f97316]/20",
    }
  });
}
else{
Swal.fire({
  title: "Order Confirmed 🍔",
  text: "Your order has been placed successfully! You will receive a confirmation message soon with delivery details.",
  icon: "success",

  timer: 2000,
  showConfirmButton: false,

  background: "#12372A",
  color: "#FBFADA",

  iconColor: "#22c55e",

  customClass: {
    popup: "rounded-xl shadow-2xl border border-[#f97316]/30",
    title: "text-lg font-bold text-[#FBFADA]",
    htmlContainer: "text-[#FBFADA]/80",
  }
});
    setformData({
          name:'',
    adress:'',
    number:'',
    pay:'',
    email:''
        
    });
    dispatch(Clear());
}
 


   }
   const handleChange = (e) =>
   {
    setformData({...formData,[e.target.name]: e.target.value})
   }
  return (
    <div className="pt-30 flex flex-col items-center">
        <h2 className="text-center text-4xl text-[#FBFADA] ">Shipping Details</h2>
         <div className="bg-amber-600  mb-7 h-1 w-32 md:w-40 mt-3 mx-auto rounded-full"></div>
         <div className="w-90 sm:w-140">
        <form onSubmit={formsubmit} className= " bg-white/80 shadow-xl w-full text-black/85    py-5 px-3 rounded-md">
            
                  <div className="form-control mb-3 flex flex-col">
                <label className="mb-1 " htmlFor='name'>Full Name</label>
                <input onChange={handleChange} value={formData.name} name='name' className="outline-0 border placeholder:text-[14px] py-2 hover:scale-103 transition-all duration-300 px-3 rounded-md border-green-800" type="text" id="name" placeholder="Enter your full name" required/>
            </div>
            <div className="form-control mb-3 flex flex-col">
                <label className="mb-1 " htmlFor='phone'>Phone Number</label>
                <input onChange={handleChange} value={formData.number} name='number' className="border outline-0 placeholder:text-[14px] hover:scale-103 transition-all duration-300 py-2 px-3 rounded-md border-green-800" type="tel" id="phone" placeholder="01xxxxxxxxx" required/>
            </div>

            
            
                  <div className="form-control mb-3 flex flex-col">
                <label className="mb-1 " htmlFor='email'>Email (Optional)</label>
                <input onChange={handleChange} value={formData.email} name='email' className="outline-0 border placeholder:text-[14px] hover:scale-103 transition-all duration-300 py-2 px-3 rounded-md border-green-800" type="email" id="email" placeholder="Eexample@mail.com" />
            </div>
               <div className="form-control mb-3 flex flex-col">
                <label className="mb-1 " htmlFor='pay'>Payment Method</label>
                <select onChange={handleChange} name='pay'value={formData.pay} className="border hover:scale-103 transition-all duration-300 border-green-800 py-2 px-3 outline-0 rounded-md" required id='pay'>
                    <option className="text-[13px]" value="" disabled>Select payment method</option>
                    <option className="text-[13px]" value="cash">Cash on Delivery</option>
                    <option className="text-[13px]" value="card">Credit Card</option>
                        
                </select>
            
          

            </div>
              <div className="form-control mb-3 flex flex-col">
                <label className="mb-1 " htmlFor='adress'>Delivery Address</label>
              <textarea onChange={handleChange} value={formData.adress} maxLength={30} minLength={10} name='adress' className="border hover:scale-103 transition-all duration-300 placeholder:text-[13px] border-green-800 rounded-md outline-0 py-2 px-3" id='adress' rows='3' placeholder="Street name, Building name, Apartment Number..." required></textarea>
            </div>
               
         <div className="recap">
            <p>Total Price: <span className="text-lg">{totalPrice}$</span></p>

         </div>
          
            <div className="flex justify-center">
                <button type="submit" className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 py-2 px-3 w-full text-lg mt-2 font-medium rounded-lg text-white">Confirm Order</button>

            </div>
        </form>
        </div>
      
    </div>
  )
}

export default Checkout;
