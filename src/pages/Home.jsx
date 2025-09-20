import React, { useEffect } from "react";
import Banner from "../components/Banner/Banner";
import Rewards from "../components/Rewards/Rewards";
import Deal from "../components/Deal/Deal";
import OfferList from "../components/Offer/OfferList";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner />
      <Rewards />
      <Deal />
      <OfferList />
    </div>
  );
};

export default Home;
