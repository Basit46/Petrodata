import React from "react";
import Header from "../components/Header";
import Watchlist from "../components/widgets/Watchlist";
import Depot from "../components/widgets/Depot";
import Reports from "../components/widgets/Reports";
import News from "../components/widgets/News";
import Flights from "../components/widgets/Flights";

const page = () => {
  return (
    <div>
      <Header />
      <div className="py-[30px] flex flex-wrap gap-[20px]">
        <Watchlist />
        <Depot />
        <Reports />
        <News />
        <Flights />
      </div>
    </div>
  );
};

export default page;
