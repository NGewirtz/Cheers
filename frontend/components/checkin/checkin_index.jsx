import React from 'react';
import Sidebar from '../sidebar/sidebar_container';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {

  constructor(props){
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      offset: 0
    };
  }

  componentDidMount() {
    window.scroll(0,0);
    this.props.fetchCheckins({'offset': 0});
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)) {
      const newDisplay = this.state.offset + 10;
      this.props.fetchCheckins({'offset': newDisplay});
      this.setState({'offset': newDisplay});
    }
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
          <Sidebar customHeader="Recently Added Beers" filter="bar"/>
        </main>
      </div>
    );
  }
}

export default CheckinIndex;
