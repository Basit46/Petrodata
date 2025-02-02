"use client";

import { LargeWidget, MediumWidget, SmallWidget } from "./components/widgets";

const RetailAndNews = ({ size }) => {
  switch (size) {
    case "S":
      return <SmallWidget />;
    case "M":
      return <MediumWidget />;
    case "L":
      return <LargeWidget />;
    default:
      return null;
  }
};

export default RetailAndNews;
