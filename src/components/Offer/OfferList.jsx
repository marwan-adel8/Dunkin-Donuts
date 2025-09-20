import React from "react";
import { motion } from "framer-motion";
import OfferCard from "./OfferCard";
import offersData from "../../data/Offer.json";
import { Link } from "react-router-dom";

const OfferList = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-16 px-4 sm:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-2"
            style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
          >
            MEMBER EXCLUSIVE OFFERS
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items, crafted with love and the finest
            ingredients
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {offersData.map((offer) => (
            <OfferCard key={offer.id} product={offer} />
          ))}
        </div>
        <div className="flex justify-center mt-8 md:mt-12">
        <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Link
    to="/menu"
    className="bg-[#C81D6A] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#a81a59] transition-colors text-sm md:text-lg"
    style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
  >
    View All Menu
  </Link>
</motion.div>
        </div>
      </div>
    </div>
  );
};

export default OfferList;
