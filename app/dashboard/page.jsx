"use client";

import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { useGlobalContext } from "@/app/context/GlobalContext";
import Depot from "../components/widgets/depot/Depot";
import Flight from "../components/widgets/flight/flight";
import News from "../components/widgets/news/news";
import Report from "../components/widgets/report/report";
import Exchange from "../components/widgets/exchange/exchange";
import Retail from "../components/widgets/retail/retail";
import RetailAndNews from "../components/widgets/retailandnews/retailandnews";
import Watchlist from "../components/widgets/watchlist/watchlist";
import WatchlistAndNews from "../components/widgets/watchlistandnews/watchlistandnews";

const Page = () => {
  const { selectedWidgets } = useGlobalContext();

  const widgets = {
    1: Retail,
    2: RetailAndNews,
    3: Watchlist,
    4: WatchlistAndNews,
    5: Flight,
    6: Depot,
    7: News,
    8: Report,
    9: Exchange,
  };

  return (
    <div>
      <Header />

      <div className="py-[30px]">
        <div className="flex flex-wrap gap-4 justify-center vsm:justify-start">
          {selectedWidgets.map(({ id, size }) => {
            const WidgetComponent = widgets[id];
            return WidgetComponent ? (
              <WidgetComponent key={id} size={size} />
            ) : null;
          })}
        </div>

        <Link
          href="/widgets"
          className="mx-auto mt-[30px] w-[104px] h-[36px] rounded-[36px] border border-[#737373] bg-[#737373] grid place-items-center text-[14px] font-[500]"
        >
          Edit Widget
        </Link>
      </div>
    </div>
  );
};

export default Page;
