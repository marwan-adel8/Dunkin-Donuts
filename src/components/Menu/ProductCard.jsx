import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../redux/appSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isWishlisted = useSelector((state) =>
    state.app.wishlist.some((item) => item.id === product.id)
  );

  const handleAddToCart = () => {
    // Fix: Pass an object that includes the product data and a quantity
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.name} was added to cart`);
  };

  const handleToggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist({ id: product.id }));
      toast.error(`${product.name} was removed from wishlist`);
    } else {
      dispatch(addToWishlist(product));
      toast.success(`${product.name} was added to wishlist`);
    }
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const heartClass = isWishlisted
    ? "text-[#9F135A]"
    : "text-gray-400 hover:text-[#9F135A]";

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
      <div className="relative flex justify-between items-center mb-4">
        {product.category && (
          <span
            className="bg-[#9F135A] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
            style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
          >
            {product.category[0]}
          </span>
        )}
        <button
          className={`transition-colors ${heartClass}`}
          onClick={handleToggleWishlist}
        >
          <FaHeart size={20} />
        </button>
      </div>

      <motion.div
        className="w-full flex items-center justify-center mb-4 h-40 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        onClick={handleProductClick}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </motion.div>

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
          <FaStar size={14} />
          <span className="text-sm ml-1 text-gray-600">{product.rating}</span>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mt-auto">
        <span className="text-xl font-extrabold text-[#9F135A] mb-4">
          ${product.price.toFixed(2)}
        </span>
        <motion.button
          className="bg-[#C81D6A] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-[#a81a59] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </motion.button>
      </div>
    </div>
  );
};

export default ProductCard;
