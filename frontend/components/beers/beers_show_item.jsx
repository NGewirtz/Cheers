import React from 'react';
import { Link } from 'react-router-dom';
import { _date } from '../../util/format_util';

const BeerShowItem = ({beer}) => {
  if(!beer){
    return <div></div>;
  }else{
    return(
      <li className="beer-index-item beer-show-item">
        <img />
        <div className="beer-index-item-text">
          <Link to={`/beers/${beer.id}/edit`} title={`Edit ${beer.name} here`}><h3>{beer.name}</h3></Link>
          <h4>{beer.breweryName}</h4>
          <h5>{beer.beer_type}</h5>
        </div>
        <ul>
          <li>Ibu: {beer.ibu || "N/A"}</li>
          <li>Abv: {beer.abv || "N/A"}</li>
          <li>***** (#)</li>
          <li>Ratings: </li>
          <li>Added: {_date(beer.created_at)}</li>
        </ul>
        <p>{beer.description}</p>
        <nav>
          <Link to={`/beers/${beer.id}/checkin`}><button className="add-button" title="Checkin Beer">&#10004;</button></Link>
          <button className="add-button" title="Add To Wish List">+</button>
        </nav>
      </li>
    );
  }
};

export default BeerShowItem;
