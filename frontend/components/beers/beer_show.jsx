import React from 'react';
import Header from '../header';
import BeerShowItem from './beers_show_item';
import Sidebar from '../sidebar/sidebar_container';

class BeerShow extends React.Component {

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId);
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <main>
          <BeerShowItem beer={this.props.beer}/>
          <Sidebar />
        </main>
      </div>
    );
  }
}

export default BeerShow;
