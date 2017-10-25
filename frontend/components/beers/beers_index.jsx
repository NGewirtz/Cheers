import React from 'react';
import Header from '../header';
import BeerIndexItem from './beers_index_item';
import { Link } from 'react-router-dom';

class BeerIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBeers();
  }


  render() {
    const beers = this.props.beers.map(beer => (
      <BeerIndexItem beer={beer} key={beer.id} />
    ));
    return (
      <div>
        <Header />
        <h1>Top Rated Beers</h1>
        <Link to="/beers/new"></Link>
        <ul className="beers-index-ul">
          {beers}
        </ul>
      </div>
    );
  }
}

export default BeerIndex;
