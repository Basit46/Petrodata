import { LargeWidget, MediumWidget, SmallWidget } from "./components/widgets";

const Watchlist = ({ size }) => {
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

export default Watchlist;
