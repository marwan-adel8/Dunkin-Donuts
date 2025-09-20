import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { addToCart, removeFromWishlist } from "../redux/appSlice";

import emptyCartImage from "../assets/imgs/empty-cart.svg";

const Wishlist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.app.wishlist);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));

    toast.success(`${product.name} was added to cart`);
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist({ id }));
    toast.error(`Item was removed from wishlist`);
  };

  const handleContinueShopping = () => {
    navigate("/menu");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
        >
          SAVED FOR LATER ({wishlistItems.length} ITEMS)
        </h2>

        {wishlistItems.length === 0 ? (
          // Empty wishlist state
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-md"
          >
            <div className="w-48 h-48 mb-6">
              <img
                src={emptyCartImage}
                alt="Empty Wishlist"
                className="w-full h-full object-contain"
              />
            </div>
            <h3
              className="text-2xl font-semibold text-gray-800 mb-2"
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              Your wishlist is empty!
            </h3>
            <p className="text-gray-500 max-w-md">
              Save your favorite items here to easily find them later.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContinueShopping}
              className="mt-6 bg-[#C81D6A] text-white font-bold py-3 px-6 rounded-full transition-colors hover:bg-[#a81a59]"
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              Continue Shopping
            </motion.button>
          </motion.div>
        ) : (
          // Wishlist with products
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistItems.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full"
              >
                {/* Category and Heart Icon */}
                <div className="relative flex justify-between items-center mb-4">
                  {/* Category Label */}
                  {product.category && (
                    <span
                      className="bg-[#9F135A] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                      style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
                    >
                      {product.category[0]}
                    </span>
                  )}
                  {/* Heart Icon (Remove from Wishlist) */}
                  <button
                    className="text-[#9F135A] hover:text-[#C81D6A] transition-colors"
                    onClick={() => handleRemoveFromWishlist(product.id)}
                  >
                    <FaHeart size={20} />
                  </button>
                </div>

                {/* Product Image */}
                <div className="w-full flex items-center justify-center mb-4 h-40">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col items-center text-center">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 truncate max-w-[200px]">
                    {product.description}
                  </p>
                  <div className="flex items-center text-yellow-400 mb-2">
                    <FaHeart size={14} />{" "}
                    <span className="text-sm ml-1 text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                </div>

                {/* Price and Add to Cart Button */}
                <div className="flex flex-col items-center w-full mt-auto">
                  <span className="text-xl font-extrabold text-[#9F135A] mb-4">
                    ${product.price.toFixed(2)}
                  </span>
                  <motion.button
                    className="bg-[#C81D6A] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-[#a81a59] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
