import React from 'react';
import CheckinIndexItem from '../checkin/checkin_index_item';
import Sidebar from '../sidebar/sidebar_container';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.location !== newProps.location) {
      this.props.fetchUser(newProps.match.params.userId);
    }
  }

  render() {
    if(!this.props.user) {
      return <div></div>;
    }else {
      const checkins = this.props.user.checkinIds.map(checkinId => {
        if (this.props.user.checkins) {
          return <CheckinIndexItem checkin={this.props.user.checkins[checkinId]} key={checkinId}/>
        }
      });
      return (
        <div>
          <header>
            <img src={this.props.user.image}/>
            <h2>{this.props.user.username}</h2>
            <ul>
              <li>Checkins 5</li>
              <li>Comments 11</li>
              <li>Cheers 23</li>
            </ul>
          </header>
          <ul>
            {checkins}
          </ul>
          <Sidebar />
        </div>
      );
    }
  }
}

export default Profile;
