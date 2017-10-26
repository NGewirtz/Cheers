import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import { date } from '../../util/date_util';

const BeerShowItem = ({beer}) => {
  if(!beer){
    return <Header />;
  }else{
    return(
      <li className="beer-index-item beer-show-item">
        <img />
        <div className="beer-index-item-text">
          <Link to={`/beers/${beer.id}/edit`}><h3>{beer.name}</h3></Link>
          <h4>{beer.breweryName}</h4>
          <h5>{beer.beer_type}</h5>
        </div>
        <ul>
          <li>Ibu: {beer.ibu || "N/A"}</li>
          <li>Abv: {beer.abv || "N/A"}</li>
          <li>***** (#)</li>
          <li>Ratings: </li>
          <li>Added: {date(beer.created_at)}</li>
        </ul>
        <p>{beer.description}</p>
        <nav>
          <button className="add-button" title="Checkin Beer">&#10004;</button>
          <button className="add-button" title="Add To Wish List">+</button>
        </nav>
      </li>
    );
  }
};

export default BeerShowItem;
