import React from 'react';
import Sidebar from '../sidebar/sidebar_container';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCheckins();
  }

  render() {
    const checkins = this.props.checkins.map(checkin => (
      <CheckinIndexItem checkin={checkin} key={checkin.id}/>
    ));
    return (
      <div className="top">
        <h1 className="bar-header">Bar Talk</h1>
        <main>
          <ul className='checkin-index-ul'>
            {checkins}
          </ul>
          <Sidebar />
        </main>
      </div>
    );
  }
}

export default CheckinIndex;
