import React from 'react';
import { Link } from 'react-router-dom';
import BeerInfoList from './beer_info_list';

const BeerShowItem = ({beer, className, action, symbol, title}) => {
  if(!beer){
    return <div></div>;
  }else{
    return(
      <li className="beer-index-item beer-show-item">
        <img src={beer.image}/>
        <div className="beer-index-item-text">
          <Link to={`/beers/${beer.id}/edit`} title={`Edit ${beer.name} here`}>
            <h3>{beer.name}</h3>
          </Link>
          <h4>{beer.breweryName}</h4>
          <h5>{beer.beer_type}</h5>
        </div>
        <BeerInfoList beer={beer} />
        <p>{beer.description}</p>
        <nav>
          <Link to={`/beers/${beer.id}/checkin`}>
            <button className="add-button"
              title="Checkin Beer">&#10004;
            </button>
          </Link>
          <button onClick={() => action(beer.id)}
            className={className}
            title={title}>
            {symbol}
          </button>
        </nav>
      </li>
    );
  }
};

export default BeerShowItem;
