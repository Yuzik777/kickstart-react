import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './header';
import {Filters} from './filters';
import {FilterOptions, StockData, mocks} from './mocks';
import {Stocks} from './stocks'
import {displayGrowthContext} from './contexts/displayGrowth';
 
const filterStocks = (stocks: StockData[], fo: FilterOptions): StockData[] => {
  console.log(fo);
  return stocks;
}

const App = () => {
  const handleFilterChange = (fo:FilterOptions) => {
    return filterStocks(mocks, fo);
  };
  return (
    <>
    <Header></Header>
    <Filters name="" sortByGain="none" rangeFrom="" rangeTo="" onFiltersApplied={handleFilterChange}/>
    <displayGrowthContext.Provider value='relative'> 
      <Stocks items={mocks} />
    </displayGrowthContext.Provider >
    </>
  );
}

export default App;
