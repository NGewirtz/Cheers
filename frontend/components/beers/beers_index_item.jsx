import React from 'react';
import { Link } from 'react-router-dom';
import BeerInfoList from './beer_info_list';

const BeerIndexItem = ({beer, addBeerToWishlist, removeBeerFromWishlist, wishlistBeers}) => {
  const width = beer.rating * 20 + "%";
  let className, action, title, symbol;
  if (wishlistBeers.includes(beer.id)){
    className = "add-button red";
    action = removeBeerFromWishlist;
    title = "Remove From Wishlist";
    symbol = "-";
  }else {
    className = "add-button green";
    action = addBeerToWishlist;
    title = "Add To Wishlist";
    symbol = "+";
  }
  return (
    <li className="beer-index-item">
      <img src={beer.image}/>
      <div className="beer-index-item-text">
        <Link to={`/beers/${beer.id}`}><h3>{beer.name}</h3></Link>
        <Link to={`/breweries/${beer.brewery_id}`}><h4>{beer.breweryName}</h4></Link>
        <h5>{beer.beer_type}</h5>
        <p>{beer.description}</p>
      </div>
      <button onClick={() => action(beer.id)}
        className={className} title={title}>{symbol}</button>
      <BeerInfoList beer={beer} />
    </li>
  );
};

export default BeerIndexItem;
