import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({beer}) => (
  <li className="sidebar-item">
    <img src={beer.image}/>
    <div>
      <Link to={`/beers/${beer.id}`}><h3>{beer.name}</h3></Link>
      <Link to={`/breweries/${beer.brewery_id}`}>
        <h4>{beer.breweryName}</h4>
      </Link>
    </div>
  </li>
);


export default SidebarItem;
