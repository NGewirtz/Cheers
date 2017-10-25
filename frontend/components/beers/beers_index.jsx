import React from 'react';
import Header from '../header';

class BeerIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBeers();
  }


  render() {
    const beers = this.props.beers.map(beer => (
      <li>{beer.name} | {beer.description}</li>
    ));
    return (
      <div>
        <Header />
        <ul>
          {beers}
        </ul>
      </div>
    );
  }
}

export default BeerIndex;
