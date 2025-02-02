import { LargeWidget, MediumWidget, SmallWidget } from "./components/widgets";

const Watchlist = ({ size }) => {
  switch (size) {
    case "S":
      return <SmallWidget />;
    case "M":
      return (
        <>
          <div className="block md:hidden">
            <SmallWidget />
          </div>
          <div className="hidden md:!block">
            <MediumWidget />
          </div>
        </>
      );
    case "L":
      return (
        <>
          <div className="block md:hidden">
            <SmallWidget />
          </div>
          <div className="hidden md:!block">
            <LargeWidget />
          </div>
        </>
      );
    default:
      return null;
  }
  bg;
};

export default Watchlist;
