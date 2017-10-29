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
      const checkins = this.props.checkins.map(checkin => {
        if (checkin) {
          return <CheckinIndexItem checkin={checkin} key={checkin.id}/>;
        }
      });
      return (
        <div className="beer-show-page top">
          <div>
            <BeerShowItem beer={this.props.beer} />
            <ul className="beer-show-checkins">
              {checkins}
            </ul>
          </div>
          <Sidebar />
        </div>
      );
    }
  }
}

export default BeerShow;
