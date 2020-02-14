import React, { useState } from 'react';
import {Stock} from './stock'
import {StockData} from '../mocks'

interface StocksProps {
  items: StockData[]
}

export const Stocks: React.FC<StocksProps> = (props) => {

  return (
    <ul className="companiesList">{
      props.items.map( stock => 
      {
        return (
        <li key={stock.symbol} className = "companyContainer">
          <Stock item={stock} />
        </li>
        );
      }
    )
  }
    </ul>);
};