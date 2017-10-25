import React from 'react';

const SidebarItem = ({beer}) => (
  <li className="sidebar-item">
    <img />
    <div>
      <h3>{beer.name}</h3>
      <h4>{beer.breweryName}</h4>
    </div>
  </li>
);


export default SidebarItem;
