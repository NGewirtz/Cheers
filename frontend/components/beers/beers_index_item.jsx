import React from 'react';
import { Link } from 'react-router-dom';
import { date, formatNum } from '../../util/date_util';

const BeerIndexItem = ({beer}) => {
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
      <button className="add-button" title="Add To Wish List">+</button>
      <ul>
        <li>Ibu: {beer.ibu || "N/A"}</li>
        <li>Abv: {beer.abv || "N/A"}</li>
        <li>({formatNum(beer.rating)})<div style={{width}} className="star-rating"></div>&#9734; &#9734; &#9734; &#9734; &#9734;</li>
        <li>Ratings: {beer.ratings}</li>
        <li>Added: {date(beer.created_at)}</li>
      </ul>
    </li>
  )
};

export default BeerIndexItem;
