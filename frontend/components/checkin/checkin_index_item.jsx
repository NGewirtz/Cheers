import React from 'react';
import { Link } from 'react-router-dom';
import { _dateAndTime, _aOrAn } from '../../util/format_util';
import Rating from '../rating';

const CheckinIndexItem = ({checkin, profile}) => {
  return (
    <li className="checkin-index-item">
      <img src={checkin.userImage}/>
      <div>
        <h2 className="checkin-text"><Link className="checkin-link" to={`/users/${checkin.usernameId}`}>{checkin.username}
        </Link> is drinking {_aOrAn(checkin.beer)} <Link className="checkin-link" to={`/beers/${checkin.beerId}`}>{checkin.beer}
          </Link> from <Link className="checkin-link" to={`/brewery/${checkin.breweryId}`}>{checkin.brewery}</Link>
        </h2>
        <div className="rating-border-div">
          <Rating rating={checkin.rating} />
        </div>
        <p className="small">{ _dateAndTime(checkin.updated_at)}
          <Link className="checkin-link small" to={`/checkins/${checkin.id}`}>View Detailed Checkin Here</Link>
          {profile && <Link className="checkin-link small" to={`/checkins/${checkin.id}/edit`}>Edit</Link>}
        </p>
      </div>
      <img src={checkin.beerImage}/>
    </li>
  );
};



export default CheckinIndexItem;
