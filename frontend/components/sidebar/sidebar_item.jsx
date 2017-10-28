import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({beer}) => (
  <li className="sidebar-item">
    <img src={beer.image}/>
    <div>
      <Link to={`/beers/${beer.id}`}><h3>{beer.name}</h3></Link>
      <h4>{beer.breweryName}</h4>
    </div>
  </li>
);


export default SidebarItem;
