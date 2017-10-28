import React from 'react';
import { _dateAndTime } from '../../util/format_util';
import { Link } from 'react-router-dom';

const CheckinShowHeader = ({checkin}) => (
  <header>
    <section>
      <img src={checkin.userImage}/>
      <h2>
        <Link to={`/users/${checkin.usernameId}`}>{checkin.username}</Link>
      </h2>
    </section>
    <section>
      <p>{_dateAndTime(checkin.updated_at)}</p>
    </section>
  </header>
);


export default CheckinShowHeader;
