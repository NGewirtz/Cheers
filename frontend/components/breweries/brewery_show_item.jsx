import React from 'react';

const BreweryShowItem = ({brewery}) => {
  return (
    <section className="brewery-show-item">
      <img src={brewery.image}/>
      <div>
        <h3>{brewery.name}</h3>
        <h4>{brewery.location}</h4>
      </div>
    </section>
  )
}

export default BreweryShowItem;







// <BeerInfoList beer={beer} />
