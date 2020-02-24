export const mocks = [
  {
    symbol: "WIX",
    companyName: "Wix.com Ltd.",
    price: 145.43,
    change: 1.11,
    changePercent: 0.7691
  },
  {
    symbol: "AAPL",
    companyName: "Apple Inc.",
    price: 323.39,
    change: 3.78,
    changePercent: 1.1827
  },
  {
    symbol: "TSLA",
    companyName: "Tesla Inc.",
    price: 777.385,
    change: 3.005,
    changePercent: 0.3881
  },
  {
    symbol: "MSFT",
    companyName: "Microsoft Corporation",
    price: 183.29,
    change: -1.15,
    changePercent: -0.6235
  },
  {
    symbol: "BMWYY",
    companyName: "Bayerische Motoren Werke Aktiengesellschaft",
    price: 23.39,
    change: 0.19,
    changePercent: 0.819
  }
];

export type ToolbarState = "none" | "search" | "filter" | "settings";

export type DisplayType = "relative" | "absolute";

export interface StockData {
  symbol: string;
  companyName: string;
  price: number;
  change: number;
  changePercent: number;
}

export type sortingOption = "none" | "asc" | "desc";

export interface FilterOptions {
  name: string;
  sortByGain: sortingOption;
  rangeFrom: string;
  rangeTo: string;
}

export interface FoundStock {
  symbol: string;
  companyName: string;
}
