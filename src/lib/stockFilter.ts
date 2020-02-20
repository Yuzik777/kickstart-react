import {StockData, FilterOptions} from '../mocks';

export const filterStocks = (stocks: StockData[], filters: FilterOptions): StockData[] => {
  const name = filters.name.toLowerCase();
  const rangeFrom = parseFloat(filters.rangeFrom) || 0;
  const rangeTo = parseFloat(filters.rangeTo) || Infinity;

  const filterByName = (stocks: StockData[]): StockData[] => {
    return stocks.filter( (item) => 
      (item.companyName.toLowerCase().includes(name)) 
      || (item.symbol.toLowerCase().includes(name)) );
  };

  const filterByRangeFrom = (stocks: StockData[]): StockData[] => {
    return stocks.filter( (item) => 
      item.price >= rangeFrom );
  };

  const filterByRangeTo = (stocks: StockData[]): StockData[] => {
    return stocks.filter( (item) => 
      item.price <= rangeTo );
  };

  return [filterByName, filterByRangeFrom, filterByRangeTo].reduce((result, fn) => fn(result), stocks);
}
