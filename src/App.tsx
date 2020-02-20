import React, { useState, useEffect, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./header";
import { Filters } from "./filters";
import { FilterOptions, StockData, mocks, ToolbarState } from "./mocks";
import { Stocks } from "./stocks";
import { filterStocks } from "./lib/stockFilter";
import { displayGrowthContext } from "./contexts/displayGrowth";

const getFilteredStocks = (
  stocks: StockData[],
  fo: FilterOptions
): StockData[] => {
  console.log(fo);
  return filterStocks(stocks, fo);
};

const loadStocks = async (symbols: string[]): Promise<StockData[]> => {
  return new Promise(resolve => setTimeout(() => resolve(mocks), 2000));
};

const filterValidStocks = async (stocks: StockData[]): Promise<StockData[]> => {
  return stocks.filter(item => item && item.change !== undefined);
};

const App = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [toolbarState, setToolbarState] = useState<ToolbarState>("none");

  useEffect(() => {
    const stockSymbols = [
      "WIX",
      "BMW",
      "AMZN",
      "TSLA",
      "AAPL",
      "FACEBOOK",
      "GOOGL",
      "MSFT",
      "asdfqw"
    ];

    loadStocks(stockSymbols)
      .then(filterValidStocks)
      .then(stocks => setStocks(stocks));
  }, []);

  const [filters, setFilters] = useState<FilterOptions>({
    name: "",
    sortByGain: "asc",
    rangeFrom: "",
    rangeTo: ""
  });

  const filteredStocks = useMemo(() => getFilteredStocks(stocks, filters), [
    stocks,
    filters
  ]);

  const handleRefreshStocks = () => {
    const stockSymbols = stocks.map(item => item.symbol);
    loadStocks(stockSymbols)
      .then(filterValidStocks)
      .then(stocks => setStocks(stocks));
  };

  return (
    <>
      <Header
        {...{ toolbarState, setToolbarState }}
        onRefreshStocks={handleRefreshStocks}
      ></Header>
      <div
        className={
          "filtersWrapper" + (toolbarState === "filter" ? "" : " hidden")
        }
      >
        <Filters {...filters} onFiltersApplied={setFilters} />
      </div>
      <Stocks items={filteredStocks} />
    </>
  );
};

export default App;
