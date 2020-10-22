import React from 'react';
import PortfolioCard from './PortfolioCard';
import { portfolioItems } from '../static/data';

const Portfolio = () => {

  const serveCards = itemList => {
    return itemList.map(item => <li key={item.id}><PortfolioCard {...item} /></li>);
  }

  return (
    <div className="border-l border-gray-700 mt-40 pl-10" id="portfolio">
      <div className="flex items-center font-semibold text-gray-100">
        <span className="text-xl mr-2 text-gray-600">03. </span>
        <h1 className="text-3xl ">Apps I've Built</h1>
      </div>
      <div className="flex-col w-full flex justify-between">
        <ul>
          {serveCards(portfolioItems)}
        </ul>
      </div>
    </div>
  );
}


export default Portfolio;