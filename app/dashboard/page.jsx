import React from "react";
import Header from "../components/Header";
import Watchlist from "../components/widgets/Watchlist";
import Depot from "../components/widgets/Depot";
import Reports from "../components/widgets/Reports";
import News from "../components/widgets/News";
import Flights from "../components/widgets/Flights";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Header />
      <div className="py-[30px]">
        <div className="flex flex-wrap gap-[20px]">
          <Watchlist />
          <Depot />
          <Reports />
          <News />
          <Flights />
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

export default page;
