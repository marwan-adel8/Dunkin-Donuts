import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import hero from "../../assets/imgs/hero-img.png";

const Banner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-100 flex items-center justify-center p-4 sm:p-8">
      {/* Background Image */}
      <img
        src={hero}
        alt="Dunkin' Rewards"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 text-center text-gray-800 p-6 sm:p-10 rounded-lg max-w-4xl mx-auto backdrop-blur-sm bg-white/60">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-[#FF7F00] mb-2 drop-shadow-md"
            style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
          >
            DUNKIN' REWARDS
          </h1>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 leading-tight drop-shadow-sm"
            style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
          >
            MAKE THE MOST
            <br />
            OF YOUR DUNKIN' RUN!
          </h2>
          <p className="text-base sm:text-lg mb-6 leading-relaxed">
            Calling all Dunkin' fans! Join Dunkin' Rewards today to enjoy
            exclusive offers and start earning points toward{" "}
            <span className="font-bold">FREE food and drinks.</span> The more
            you visit, the more benefits you unlock!
          </p>
          <Link to="/signin">
            <motion.div
              className="bg-[#FF7F00] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#E06F00] transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              JOIN NOW
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
