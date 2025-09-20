import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import menu from "../../assets/imgs/menu-img.png";

const Deal = () => {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleViewMenuClick = () => {
    navigate("/menu");
  };

  return (
    <div
      className="relative w-full overflow-hidden flex items-center justify-start py-8 sm:py-12 px-4 sm:px-8 md:justify-start"
      style={{
        // 3. Use the state variable to conditionally set the background image
        backgroundImage: windowWidth < 768 ? "none" : `url(${menu})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "400px",
      }}
    >
      <div className="container mx-auto flex items-center h-full max-w-7xl">
        <div className="relative z-10 p-4 sm:p-6 md:p-10 rounded-lg backdrop-blur-sm bg-white/30 text-center md:text-left mx-auto md:mx-0">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 md:justify-start">
            <h1
              className="text-7xl xs:text-8xl sm:text-9xl md:text-[150px] font-extrabold leading-none drop-shadow-md"
              style={{
                fontFamily: "Dunkin Sans Bold, sans-serif",
                color: "#C81D6A",
              }}
            >
              $6
            </h1>
            <h1
              className="text-4xl xs:text-5xl sm:text-6xl md:text-[80px] font-extrabold leading-none drop-shadow-md text-center sm:text-left"
              style={{
                fontFamily: "Dunkin Sans Bold, sans-serif",
                color: "#FF8200",
              }}
            >
              MEAL <br className="hidden sm:block" /> DEAL
            </h1>
          </div>
          <motion.button
            onClick={handleViewMenuClick}
            className="mt-6 md:mt-8 bg-[#C81D6A] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#a81a59] transition-colors text-sm sm:text-lg block w-fit mx-auto md:mx-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
          >
            VIEW MENU
          </motion.button>
          <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-700 max-w-xl pr-4 text-center sm:text-left mx-auto md:mx-0">
            <p>
              No substitutions. Participation may vary. Limited time offer.
              Cannot be combined with other offers. Exclusions and terms apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
