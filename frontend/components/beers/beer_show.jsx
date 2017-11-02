import React from 'react';
import BeerShowItem from './beers_show_item';
import Sidebar from '../sidebar/sidebar_container';
import CheckinIndexItem from '../checkin/checkin_index_item';
import { _dynamicTitle } from '../../util/format_util';

class BeerShow extends React.Component {

  componentDidMount() {
    window.scroll(0,0);
    this.props.fetchBeer(this.props.match.params.beerId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.location !== newProps.location) {
      window.scroll(0,0);
      this.props.fetchBeer(newProps.match.params.beerId);
    }
  }

  render() {
    if (!this.props.beer) {
      return <div></div>;
    }else {
      const checkins = this.props.checkins.map(checkin => {
        if (checkin) {
          return <CheckinIndexItem checkin={checkin} key={checkin.id}/>;
        }
      });
      _dynamicTitle(this.props.beer.name);
      let className, action, title, symbol;
      if(this.props.wishlistBeers.includes(this.props.beer.id)){
        className = "add-button red";
        action = this.props.removeBeerFromWishlist;
        title = "Remove From Wishlist";
        symbol = "-";
      }else{
        className = "add-button green";
        action = this.props.addBeerToWishlist;
        title = "Add To Wishlist";
        symbol = "+";
      }
      return (
        <div className="beer-show-page top">
          <div>
            <BeerShowItem beer={this.props.beer}
              action={action}
              className={className}
              symbol={symbol}
              title={title} />
            <ul className="beer-show-checkins">
              {checkins}
              {this.props.beer.ratings === 0 && <li>Be The First To Checkin This Beer!</li>}
            </ul>
          </div>
          <Sidebar />
        </div>
      );
    }
  }
}

export default BeerShow;
