import React from 'react';
import CheckinIndexItem from '../checkin/checkin_index_item';
import Wishlist from './wishlist_container';

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
      const checkins = this.props.checkins.map(checkin => {
        if (checkin) {
          return <CheckinIndexItem profile={true} checkin={checkin} key={checkin.id}/>;
        }
      });
      const user = this.props.user;
      return (
        <div>
          <header className="profile-header">
            <img src={user.image}/>
            <div>
              <h2>{user.username}</h2>
              <ul>
                <li> {checkins.length} Checkins  |  </li>
                <li> {user.commentCount} Comments  |  </li>
                <li> {user.cheers} Cheers!  </li>
              </ul>
            </div>
          </header>
          <main>
            <ul className='checkin-index-ul profile-ul'>
              <h2>Your Recent Activity</h2>
              {checkins}
            </ul>
            <Wishlist />
          </main>
        </div>
      );
    }
  }
}

export default Profile;
