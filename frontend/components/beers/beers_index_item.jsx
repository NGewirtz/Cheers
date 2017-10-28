import React from 'react';
import { Link } from 'react-router-dom';
import BeerInfoList from './beer_info_list';

const BeerIndexItem = ({beer, addBeerToWishlist}) => {
  const width = beer.rating * 20 + "%";
  return (
    <li className="beer-index-item">
      <img />
      <div className="beer-index-item-text">
        <Link to={`/beers/${beer.id}`}><h3>{beer.name}</h3></Link>
        <h4>{beer.breweryName}</h4>
        <h5>{beer.beer_type}</h5>
        <p>{beer.description}</p>
      </div>
      <button onClick={() => addBeerToWishlist(beer.id)}
        className="add-button" title="Add To Wish List">+</button>
      <BeerInfoList beer={beer} />
    </li>
  );
};

export default BeerIndexItem;
