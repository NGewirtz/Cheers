import React from 'react';
import { Link } from 'react-router-dom';

const BeerIndexItem = ({beer}) => (
  <li className="beer-index-item">
    <img />
    <div className="beer-index-item-text">
      <h3>{beer.name}</h3>
      <h4>{beer.breweryName}</h4>
      <p>{beer.description}</p>
    </div>
    <button className="add-button" title="Add To Wish List">+</button>
    <ul>
      <li>Abv: {beer.abv || "N/A"}</li>
      <li>Ibu: {beer.ibu || "N/A"}</li>
      <li>***** (#)</li>
      <li>Ratings: </li>
      <li>Added: {beer.created_at.slice(0, 10)}</li>
    </ul>
  </li>
);

export default BeerIndexItem;
