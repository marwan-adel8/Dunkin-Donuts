import React, { useEffect } from "react";
import { motion } from "framer-motion";

import aboutBackground from "../assets/imgs/About-img.png";

import pointsIcon from "../assets/imgs/Earn_10Points.png";
import boostedIcon from "../assets/imgs/Unlock_12_points.png";
import perksIcon from "../assets/imgs/Special_perks.png";
import badgesIcon from "../assets/imgs/Badging_image.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="bg-gray-50 min-h-screen py-16"
      style={{
        backgroundImage: `url(${aboutBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          {/* About Us Section */}
          <h1
            className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-[#C81D6A]"
            style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
          >
            About Us
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            Dunkin' has been serving delicious coffee and donuts to millions of
            happy customers for over 70 years. Our mission is to provide
            high-quality products and a delightful experience to every person
            who walks through our doors.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            We are passionate about creating memorable moments, one cup of
            coffee and one donut at a time. Our team is dedicated to using the
            finest ingredients to craft every item on our menu, from our classic
            coffee to our seasonal specialties.
          </p>

          <h2
            className="text-3xl font-bold text-center mt-12 mb-4 text-[#FF8200]"
            style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
          >
            Our Story
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 mt-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-100 p-6 rounded-lg text-center shadow-inner max-w-md"
            >
              <h3
                className="text-2xl font-bold text-[#9F135A] mb-2"
                style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
              >
                Our Coffee
              </h3>
              <p className="text-gray-600">
                We're serious about our coffee. We only use high-quality beans
                to brew our signature blends, ensuring a smooth and flavorful
                cup every time. Whether it's hot or iced, we've got your
                favorite.
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-100 p-6 rounded-lg text-center shadow-inner max-w-md"
            >
              <h3
                className="text-2xl font-bold text-[#9F135A] mb-2"
                style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
              >
                Our Donuts
              </h3>
              <p className="text-gray-600">
                Freshly made every day, our donuts are a perfect treat. With a
                wide variety of flavors and toppings, there’s a donut for
                everyone.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Dunkin' Rewards Section */}
      <div className="container mx-auto px-4 sm:px-8 mt-16 max-w-5xl">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#9F135A]"
          style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
        >
          DUNKIN' REWARDS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Earn Points */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 p-6 bg-white rounded-lg shadow-lg"
          >
            <div className="relative w-32 h-32 flex-shrink-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-orange-100"></div>
              <img
                src={pointsIcon}
                alt="Earn Points"
                className="absolute z-10 w-full h-full object-contain"
              />
            </div>
            <div>
              <h3
                className="text-2xl font-bold mb-2 text-gray-800"
                style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
              >
                EARN POINTS ANY WAY YOU PAY
              </h3>
              <p className="text-gray-600 text-sm">
                As a member, you'll earn 10 POINTS PER $1 SPENT on qualifying
                purchases in-store and in the Dunkin' App.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Unlock Boosted Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 p-6 bg-white rounded-lg shadow-lg"
          >
            <div className="relative w-32 h-32 flex-shrink-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-red-100"></div>
              <img
                src={boostedIcon}
                alt="Boosted Status"
                className="absolute z-10 w-full h-full object-contain"
              />
            </div>
            <div>
              <h3
                className="text-2xl font-bold mb-2 text-gray-800"
                style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
              >
                UNLOCK MORE WITH BOOSTED STATUS
              </h3>
              <p className="text-gray-600 text-sm">
                Visit 12 times in a calendar month to unlock Boosted Status and
                start earning 12 POINTS PER $1 SPENT for 3 months.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Enjoy Perks */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 p-6 bg-white rounded-lg shadow-lg"
          >
            <div className="relative w-32 h-32 flex-shrink-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-green-100"></div>
              <img
                src={perksIcon}
                alt="Special Perks"
                className="absolute z-10 w-full h-full object-contain"
              />
            </div>
            <div>
              <h3
                className="text-2xl font-bold mb-2 text-gray-800"
                style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
              >
                ENJOY TONS OF SPECIAL PERKS
              </h3>
              <p className="text-gray-600 text-sm">
                Exclusive offers, discounts and surprises – including an annual
                3X POINTS BONUS for your birthday – are waiting for you!
              </p>
            </div>
          </motion.div>

          {/* Card 4: Collect Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 p-6 bg-white rounded-lg shadow-lg"
          >
            <div className="relative w-32 h-32 flex-shrink-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-purple-100"></div>
              <img
                src={badgesIcon}
                alt="Collect Badges"
                className="absolute z-10 w-full h-full object-contain"
              />
            </div>
            <div>
              <h3
                className="text-2xl font-bold mb-2 text-gray-800"
                style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
              >
                COLLECT BADGES IN THE APP
              </h3>
              <p className="text-gray-600 text-sm">
                Start earning exclusive Dunkin' Rewards badges, and check out
                your collection any time in the Dunkin' App.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
