import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart, FaStar, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../redux/appSlice";
import menuData from "../../data/Menu.json";
import offersData from "../../data/Offer.json";

const getImageUrl = (path) => {
  if (!path.startsWith("/")) {
    return `/${path}`;
  }
  return path;
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.app.wishlist);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product =
    menuData.find((item) => item.id.toString() === id) ||
    offersData.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold text-gray-500">
        Product not found!
      </div>
    );
  }

  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    const productPrice = product.newPrice || product.price;
    dispatch(addToCart({ ...product, price: productPrice, quantity }));
    toast.success(`${quantity} ${product.name} added to cart`);
  };

  const handleToggleWishlist = () => {
    const productForWishlist = {
      ...product,
      price: product.newPrice || product.price,
    };
    if (isWishlisted) {
      dispatch(removeFromWishlist({ id: product.id }));
      toast.error(`${product.name} was removed from wishlist`);
    } else {
      dispatch(addToWishlist(productForWishlist));
      toast.success(`${product.name} was added to wishlist`);
    }
  };

  const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const heartClass = isWishlisted
    ? "text-[#9F135A]"
    : "text-gray-400 hover:text-[#9F135A]";

  const isOfferProduct = offersData.some((item) => item.id.toString() === id);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-[#C81D6A] transition-colors mb-8"
        >
          <FaChevronLeft size={16} className="mr-2" />
          <span className="font-semibold">Back to Menu</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`flex justify-center items-center p-4 rounded-lg relative ${
              isOfferProduct ? "bg-transparent" : "bg-gray-100"
            }`}
          >
            {isOfferProduct && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gray-100 z-0"></div>
            )}
            <img
              src={getImageUrl(product.image)}
              alt={product.name}
              className={`w-full h-auto object-contain max-h-96 ${
                isOfferProduct
                  ? "z-10 h-[280px] w-auto object-contain transform scale-[1.2]"
                  : ""
              }`}
            />
          </motion.div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h1
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
              >
                {product.name}
              </h1>
              <button
                className={`transition-colors ${heartClass}`}
                onClick={handleToggleWishlist}
              >
                <FaHeart size={24} />
              </button>
            </div>

            <p className="text-lg text-gray-800 mb-2 font-semibold">
              {product.title}
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              {product.description}
            </p>

            {product.rating && (
              <div className="flex items-center text-yellow-400 mb-4">
                <FaStar size={18} />
                <span className="text-base font-semibold ml-2 text-gray-600">
                  {product.rating} Rating
                </span>
              </div>
            )}

            {product.category && (
              <div className="flex items-center flex-wrap gap-2 mb-6">
                <span className="text-sm font-bold text-gray-800">
                  Category:
                </span>
                {product.category.map((cat, index) => (
                  <span
                    key={index}
                    className="bg-[#9F135A] text-white text-xs font-bold px-3 py-1 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                {product.newPrice ? (
                  <div className="flex items-baseline space-x-2">
                    <span className="text-gray-400 line-through text-xl">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                    <span className="text-3xl font-extrabold text-[#9F135A]">
                      ${(product.newPrice * quantity).toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-extrabold text-[#9F135A]">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                )}

                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={handleDecrease}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex justify-center items-center font-bold"
                  >
                    -
                  </motion.button>
                  <span className="text-xl font-bold w-6 text-center">
                    {quantity}
                  </span>
                  <motion.button
                    onClick={handleIncrease}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex justify-center items-center font-bold"
                  >
                    +
                  </motion.button>
                </div>

                <motion.button
                  className="bg-[#C81D6A] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#a81a59] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
