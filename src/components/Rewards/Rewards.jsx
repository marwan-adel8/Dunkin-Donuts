import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import points from "../../assets/imgs/Earn_Points_tab.png";
import rewards from "../../assets/imgs/Get_rewards_tab.png";
import status from "../../assets/imgs/Boosted_status_tab.png";

const Rewards = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/about");
  };

  const cardsData = [
    {
      title: "EARN POINTS ANY WAY YOU PAY",
      description:
        "Order ahead in the app or scan your Dunkin' Rewards ID in-store to earn 10 points per $1 spent.",
      image: points,
    },
    {
      title: "GET REWARDS AND OFFERS",
      description:
        "Enjoy exclusive offers and redeem rewards starting at just 150 points — only $15 spent!",
      image: rewards,
    },
    {
      title: "UNLOCK MORE WITH BOOSTED STATUS",
      description:
        "Earn faster when you visit 12 times in a calendar month and start receiving 12 points per $1 spent!",
      image: status,
    },
  ];

  const mainColor = "#C63663";

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div
        className="container mx-auto px-4 text-center"
        style={{ maxWidth: "1400px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.img
                src={card.image}
                alt={card.title}
                className="w-32 h-32 md:w-48 md:h-48 mb-4"
                whileHover={{ scale: 1.1 }}
              />

              <h3
                className="text-xl md:text-2xl font-extrabold text-gray-800 mb-2 leading-tight"
                style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
              >
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 max-w-xs">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.button
          onClick={handleLearnMoreClick}
          className="text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-80 transition-colors mt-8 md:mt-12"
          style={{
            backgroundColor: mainColor,
            fontFamily: "Dunkin Sans Bold, sans-serif",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LEARN MORE
        </motion.button>
      </div>
    </section>
  );
};

export default Rewards;
