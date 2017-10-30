import React from 'react';
import BreweryShowItem from './brewery_show_item';
import CheckinIndexItem from '../checkin/checkin_index_item';
import Rating from '../rating';
import { _date, _decimalNum } from '../../util/format_util';

class BreweryShow extends React.Component {

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.breweryId);
  }

  render() {
    if(!this.props.brewery) {
      return <div></div>;
    }else {
      const checkins = this.props.checkins.map(checkin => {
        if (checkin) {
          return <CheckinIndexItem checkin={checkin} key={checkin.id}/>;
        }
      });
      const brewery = this.props.brewery
      return (
        <div className="brewery-show-div">
          <BreweryShowItem brewery={brewery}/>
          <ul>
            <li id="star-li"><Rating rating={_decimalNum(brewery.rating)} /></li>
            <li id="star-li-label">({_decimalNum(brewery.rating)})</li>
            <li>Ratings: {brewery.ratings}</li>
            <li>Beers: {brewery.beer_count}</li>
            <li>Added: {_date(brewery.created_at)}</li>
          </ul>
          <p>{this.props.brewery.description}</p>
        </div>
      );
    }
  }
}

export default BreweryShow;
