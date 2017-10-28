import React from 'react';
import BeerShowItem from './beers_show_item';
import Sidebar from '../sidebar/sidebar_container';
import CheckinIndexItem from '../checkin/checkin_index_item';

class BeerShow extends React.Component {

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.location !== newProps.location) {
      this.props.fetchBeer(newProps.match.params.beerId);
    }
  }

  render() {
    if (!this.props.beer) {
      return <div></div>;
    }else {
      const checkins = this.props.beer.checkinIds.map(checkinId => {
        if (this.props.beer.checkins) {
          return <CheckinIndexItem checkin={this.props.beer.checkins[checkinId]} key={checkinId}/>
        }
      });
      return (
        <main className="beer-show-page">
          <BeerShowItem beer={this.props.beer} />
          <Sidebar />
          <ul className="beer-show-checkins">
            {checkins}
          </ul>
        </main>
      );
    }
  }
}

export default BeerShow;
