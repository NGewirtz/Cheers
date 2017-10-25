import React from 'react';
import Header from '../header';
import BeerIndexItem from './beers_index_item';
import { Link } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container';

class BeerIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBeers();
  }


  render() {
    const beers = this.props.beers.map(beer => (
      <BeerIndexItem beer={beer} key={beer.id} />
    ));
    return (
      <div className="wrapper">
        <Header />
        <section className="beers-top">
          <button className="add-button" title="Add A Beer">+</button>
          <h1>Top Rated Beers</h1>
        </section>
        <main>
          <ul className="beers-index-ul">
            {beers}
          </ul>
          <SidebarContainer />
        </main>
      </div>
    );
  }
}

export default BeerIndex;
