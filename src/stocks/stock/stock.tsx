import React from 'react';
import { StockData } from '../../mocks';

interface StockProps {
  item: StockData;
}
export const Stock: React.FC<StockProps> = ({item}) => {
  const growthButtonClasses = "stockGain" + (item.changePercent < 0 ? ' negative' : '');
  const growthSign = item.changePercent >= 0 ? '+' : '';
  const absoluteChange = growthSign + item.change.toFixed(2);
  const relativeChange = growthSign + item.changePercent.toFixed(2) + '%';
  return (
    <>
    <span className="companyName">
      {item.symbol + ' ' + item.companyName}
    </span>
    <div className="companyInfoContainer">
      <span className="stockPrice">{item.price.toFixed(2)}</span>
      <button className={growthButtonClasses} data-change={absoluteChange} 
      data-change-relative={relativeChange} data-display-relative="true">{relativeChange}</button>
    </div>
    </>
  );
}