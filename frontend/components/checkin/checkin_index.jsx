import React from 'react';
import Header from '../header';
import Sidebar from '../sidebar/sidebar_container';

class CheckinIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCheckins();
  }

  render() {
    const checkins = ['qqq','sdfg'];
    return (
      <div className='wrapper'>
        <Header />
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
