import React from 'react';
import Header from '../header';
import SidebarItem from '../sidebar/sidebar_item';
import Rating from '../rating';

class CheckinShow extends React.Component {

  componentDidMount() {
    this.props.fetchCheckin(this.props.match.params.checkinId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.location !== newProps.location) {
      this.props.fetchCheckin(newProps.match.params.checkinId);
    }
  }

  render() {
    if (!this.props.checkin) {
      return <Header />;
    }else {
      const checkin = this.props.checkin
      const beer = { id: checkin.beerId, name: checkin.beer, breweryName: checkin.brewery };
      return (
        <div className="wrapper">
          <Header />
          <article className="checkin-show-body">
            <h1>{checkin.username}</h1>
            <SidebarItem beer={beer} />
            <div>
              <h3>{checkin.body}</h3>
            </div>
            <Rating rating={checkin.rating} />
          </article>
        </div>
      );
    }
  }
}


export default CheckinShow;
