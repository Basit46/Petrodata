"use client";

import React, { useState } from "react";
import Retail from "./components/Retail/Retail";
import RetailAndNews from "./components/RetailAndNews/RetailAndNews";
import Watchlist from "./components/Watchlist/Watchlist";
import WatchlistAndNews from "./components/WatchlistAndNews/WatchlistAndNews";

const Page = () => {
  return (
    <div className="flex flex-wrap gap-[20px]">
      <Retail />
      <RetailAndNews />
      <Watchlist />
      <WatchlistAndNews />
    </div>
  );
};

export default Page;
