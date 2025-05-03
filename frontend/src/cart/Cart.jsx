import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const token=useSelector((state)=>state.auth.token);
  const navigate=useNavigate();
  const cartItems = useSelector((state) => state.Cart.cartDetail);
  const totalPrice = cartItems?.reduce((sum, item) => sum + (+item.Price), 0) || 0;

  const verifyPayment = async ({ razorpay_payment_id, razorpay_order_id, razorpay_signature }) => {
    try {
      console.log(token);
      const response = await axios.post('http://localhost:8080/api/v1/verifyPayment', {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
      courses:cartItems,
      token,
      });
console.log("verify se response aa gya ji",response)
      if (response.data.success) {
        alert("Payment verified successfully!");
        navigate("/dashboard/enrolled-course")
      } else {
        alert("Payment verification failed!");
      }
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/create-order', {
        cartItems,
        amount: totalPrice,
        currency: 'INR',
        token,
      });

      const { id: order_id, amount, currency } = response.data.order || response.data; // Handle nested or direct
      const options = {
        key: "rzp_test_jBgwu1BajyhSAs",
        amount,
        currency,
        name: "Learning Management",
        order_id,
        handler: async (response) => {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
          console.log("Handler response:", response);
          alert(`Payment Successful! Payment ID: ${razorpay_payment_id}`);
          verifyPayment({ razorpay_payment_id, razorpay_order_id, razorpay_signature, order_id });
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment initiation failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">Your Cart</h1>

        <div className="mb-8">
          <p className="text-gray-400 text-lg">
            {cartItems?.length || 0} {cartItems?.length === 1 ? 'Course' : 'Courses'} in Cart
          </p>
          <hr className="border-gray-700 my-4" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 space-y-6">
            {cartItems?.length > 0 ? (
              cartItems.map((course) => (
                <div
                  key={course._id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-[#1E293B] rounded-lg"
                >
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <img
                      src={course.Thumbnail}
                      alt={course.Title}
                      className="h-32 w-full sm:w-48 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h2 className="text-white text-xl font-semibold">{course.Title}</h2>
                      <p className="text-gray-400 text-sm mt-1">{course.Category}</p>
                      <p className="text-yellow-400 text-lg mt-2">₹{course.Price}</p>
                    </div>
                  </div>

                  <button
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-xl">Your cart is empty</p>
              </div>
            )}
          </div>

          {cartItems?.length > 0 && (
            <div className="w-full lg:w-1/3">
              <div className="bg-[#1E293B] p-6 rounded-lg border border-gray-700 sticky top-4">
                <h2 className="text-white text-xl font-bold mb-4">Order Summary</h2>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400">Subtotal:</span>
                  <span className="text-white font-medium">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400">Discount:</span>
                  <span className="text-green-400">-₹0</span>
                </div>
                <hr className="border-gray-700 my-4" />
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white font-bold">Total:</span>
                  <span className="text-yellow-400 text-2xl font-bold">₹{totalPrice}</span>
                </div>
                <button
                  className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors"
                  onClick={handlePayment}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
