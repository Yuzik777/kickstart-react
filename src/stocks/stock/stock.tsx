import React, { MouseEventHandler } from "react";
import { StockData, DisplayType } from "../../mocks";

interface StockProps {
  item: StockData;
  displayType: DisplayType;
  onDisplayTypeChange: () => void;
}

export const Stock: React.FC<StockProps> = ({
  item,
  displayType,
  onDisplayTypeChange
}) => {
  const growthButtonClasses =
    "stockGain" + (item.changePercent < 0 ? " negative" : "");
  const growthSign = item.changePercent >= 0 ? "+" : "";
  const absoluteChange = growthSign + item.change.toFixed(2);
  const relativeChange = growthSign + item.changePercent.toFixed(2) + "%";
  const growthButtonContent =
    displayType === "relative" ? relativeChange : absoluteChange;

  return (
    <>
      <span className="companyName">
        {item.symbol + " " + item.companyName}
      </span>
      <div className="companyInfoContainer">
        <span className="stockPrice">{item.price.toFixed(2)}</span>
        <button className={growthButtonClasses} onClick={onDisplayTypeChange}>
          {growthButtonContent}
        </button>
      </div>
    </>
  );
};
