import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../redux/appSlice";
import { FaHeart, FaStar } from "react-icons/fa";

const getImageUrl = (path) => path;

const OfferCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isWishlisted = useSelector((state) =>
    state.app.wishlist.some((item) => item.id === product.id)
  );

  const handleAddToCart = () => {
    const productForCart = {
      ...product,
      price: product.newPrice,
      quantity: 1,
    };
    dispatch(addToCart(productForCart));
    toast.success(`${product.name} added to cart`);
  };

  const handleToggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist({ id: product.id }));
      toast.error(`${product.name} was removed from wishlist`);
    } else {
      const productForWishlist = {
        ...product,
        price: product.newPrice,
      };
      dispatch(addToWishlist(productForWishlist));
      toast.success(`${product.name} was added to wishlist`);
    }
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const heartClass = isWishlisted
    ? "text-[#9F135A]"
    : "text-gray-400 hover:text-gray-600";

  const categoryBadge =
    product.category && product.category.length > 0
      ? product.category[0].toUpperCase()
      : "PRODUCT";

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center relative overflow-hidden group h-full"
      style={{
        width: "100%",
        maxWidth: "280px",
        margin: "0 auto",
      }}
    >
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-3 z-10">
        {product.category && product.category.length > 0 && (
          <div
            className="bg-[#9F135A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase"
            style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
          >
            {categoryBadge}
          </div>
        )}
        <motion.button
          className={`transition-colors ml-auto ${heartClass}`}
          onClick={handleToggleWishlist}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaHeart size={20} />
        </motion.button>
      </div>

      <motion.div
        className="relative flex items-center justify-center mb-2 mt-8 cursor-pointer w-32 h-32 md:w-48 md:h-48"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        onClick={handleProductClick}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-40 md:h-40 rounded-full bg-gray-100 z-0"></div>
        <img
          src={getImageUrl(product.image)}
          alt={product.name}
          className="z-10 h-[120px] md:h-[200px] w-auto object-scale-down transform scale-[1.4] bg-transparent"
        />
      </motion.div>

      <h3
        className="text-xl md:text-2xl font-bold mb-1 text-black"
        style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
      >
        {product.name}
      </h3>

      <p className="text-sm text-gray-600 mb-2 truncate w-full px-2">
        {product.description}
      </p>

      {product.rating && (
        <div className="flex items-center text-yellow-400 mb-3">
          <FaStar size={14} />
          <span className="text-sm font-semibold ml-1 text-gray-700">
            {product.rating.toFixed(1)}
          </span>
        </div>
      )}

      <div className="flex items-center space-x-2 mb-4">
        {product.newPrice ? (
          <>
            <span className="text-gray-400 line-through text-xs md:text-md">
              ${product.oldPrice.toFixed(2)}
            </span>
            <span
              className="text-lg md:text-xl font-extrabold text-[#9F135A]"
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              ${product.newPrice.toFixed(2)}
            </span>
          </>
        ) : (
          <span
            className="text-lg md:text-xl font-extrabold text-[#9F135A]"
            style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
          >
            ${product.price.toFixed(2)}
          </span>
        )}
      </div>

      <div className="flex-grow"></div>

      <motion.button
        onClick={handleAddToCart}
        className="bg-[#C81D6A] text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg hover:bg-[#a81a59] transition-colors w-11/12 text-sm md:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
      >
        Add to Cart
      </motion.button>
    </div>
  );
};

export default OfferCard;
