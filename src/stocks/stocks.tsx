import React, { useState } from "react";
import { Stock } from "./stock";
import { StockData, DisplayType } from "../mocks";

interface StocksProps {
  items: StockData[];
}

export const Stocks: React.FC<StocksProps> = props => {
  const [displayType, setDisplayType] = useState<DisplayType>("relative");

  const handleDisplayTypeChange = () =>
    setDisplayType(displayType === "relative" ? "absolute" : "relative");
  return (
    <ul className="companiesList">
      {props.items.map(stock => {
        return (
          <li key={stock.symbol} className="companyContainer">
            <Stock
              item={stock}
              displayType={displayType}
              onDisplayTypeChange={handleDisplayTypeChange}
            />
          </li>
        );
      })}
    </ul>
  );
};
