import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/appSlice";
import emptyCartImage from "../assets/imgs/empty-cart.svg";

const getImageUrl = (path) => {
  return path;
};

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.app.cart);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxRate = 0.14;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncrease = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  const handleBackToMenu = () => {
    navigate("/menu");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-md"
          >
            <div className="w-48 h-48 mb-6">
              <img
                src={emptyCartImage}
                alt="Empty Cart"
                className="w-full h-full object-contain"
              />
            </div>
            <h3
              className="text-2xl font-semibold text-gray-800 mb-2"
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              Your cart is empty!
            </h3>
            <p className="text-gray-500 max-w-md">
              Looks like you haven't added anything to your cart yet. Explore
              our menu and add some delicious items.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackToMenu}
              className="mt-6 bg-[#C81D6A] text-white font-bold py-3 px-6 rounded-full transition-colors hover:bg-[#a81a59]"
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              Back to Menu
            </motion.button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-6">
                  {cartItems.map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center space-x-4 border-b pb-4 last:border-0 last:pb-0"
                    >
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.name}
                        className="w-20 h-20 object-contain rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4
                          className="text-lg font-bold text-gray-800"
                          style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
                        >
                          {item.name}
                        </h4>
                        <p className="text-gray-500">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleDecrease(item.id)}
                          className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleIncrease(item.id)}
                          className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="p-2 ml-4 text-[#9F135A] hover:text-[#C81D6A] transition-colors"
                      >
                        <FaTrash size={16} />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3
                  className="text-2xl font-bold text-gray-800 mb-4"
                  style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
                >
                  Order Summary
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (14%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>
                <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#C81D6A] text-white font-bold py-3 px-6 rounded-full mt-6 transition-colors hover:bg-[#a81a59]"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
