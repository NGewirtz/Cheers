import React from 'react';
import { Link } from 'react-router-dom';

const BeerIndexItem = ({beer}) => (
  <li className="beer-index-item">
    <img />
    <div className="beer-index-item-text">
      <Link to={`/beers/${beer.id}`}><h3>{beer.name}</h3></Link>
      <h4>{beer.breweryName}</h4>
      <h5>{beer.beer_type}</h5>
      <p>{beer.description}</p>
    </div>
    <button className="add-button" title="Add To Wish List">+</button>
    <ul>
      <li>Ibu: {beer.ibu || "N/A"}</li>
      <li>Abv: {beer.abv || "N/A"}</li>
      <li>***** (#)</li>
      <li>Ratings: </li>
      <li>Added: {beer.created_at.slice(0, 10)}</li>
    </ul>
  </li>
);

export default BeerIndexItem;
