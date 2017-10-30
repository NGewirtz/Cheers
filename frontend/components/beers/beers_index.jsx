import React from 'react';
import BeerIndexItem from './beers_index_item';
import { Link } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container';

class BeerIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    if(!this.props.wishlistBeers) {
      return <div></div>;
    }else{
      const beers = this.props.beers.map(beer => (
        <BeerIndexItem beer={beer}
          removeBeerFromWishlist={this.props.removeBeerFromWishlist}
          addBeerToWishlist={this.props.addBeerToWishlist}
          key={beer.id}
          wishlistBeers={this.props.wishlistBeers} />
      ));
      return (
        <div>
          <section className="beers-top">
            <Link to='/beers/new'><button className="add-button"
              title="Add A Beer">+</button></Link>
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
}

export default BeerIndex;
