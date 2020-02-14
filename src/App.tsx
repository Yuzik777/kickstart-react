import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './header';
import {Filters} from './filters';
import {FilterOptions, StockData, mocks} from './mocks';
import {Stocks} from './stocks'

const filterStocks = (stocks: StockData[], fo: FilterOptions): StockData[] => {
  console.log(fo);
  return stocks;
}

const App = () => {
  const handleFilterChange = (fo:FilterOptions) => {
    filterStocks
  };
  return (
    <>
    <Header></Header>
    <Filters name="" sortByGain="none" rangeFrom="" rangeTo="" onFiltersApplied={handleFilterChange}/>
    <Stocks items={mocks} />
    </>
  );
}

export default App;
