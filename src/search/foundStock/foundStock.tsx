import React, { useState, useEffect, useMemo } from "react";

interface FoundStockProps {
  item: StockData;
  displayType: DisplayType;
  onAdded: () => void;
}

export const FoundStock: React.FC = () => {
  return (
    <>
      <span className="foundCompanyName">
        {item.symbol + " " + item.companyName}
      </span>
      <button className="addStockButton" onClick={() => {}}>
        +
      </button>
    </>
  );
};
