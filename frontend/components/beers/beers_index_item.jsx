import React from 'react';
import { Link } from 'react-router-dom';

const BeerIndexItem = ({beer}) => (
  <li className="beer-index-item">
    <img />
    <div className="beer-index-item-text">
      <h3>{beer.name}</h3>
      <h4>{beer.breweryName}</h4>
      <p>When a pit viper meditates, a Christmas Ale about a Sierra Nevada Pale Ale returns home. Indeed, the hops negotiates a prenuptial agreement with a financial Pilsner. If the lager teaches a lager, then a Budweiser meditate</p>
    </div>
    <button className="add-button" title="Add To Wish List">+</button>
    <ul>
      <li>Abv: {beer.abv || "N/A"}</li>
      <li>Ibu: {beer.ibu || "N/A"}</li>
      <li>***** (#)</li>
      <li>Ratings</li>
      <li>Added: {beer.created_at.slice(0, 10)}</li>
    </ul>
  </li>
);

export default BeerIndexItem;
