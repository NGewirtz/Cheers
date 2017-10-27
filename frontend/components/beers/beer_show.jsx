import React from 'react';
import BeerShowItem from './beers_show_item';
import Sidebar from '../sidebar/sidebar_container';

class BeerShow extends React.Component {

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.location !== newProps.location) {
      this.props.fetchBeer(newProps.match.params.beerId);
    }
  }

  render() {
    if (!this.props.beer) {
      return <div></div>;
    }else {
      return (
        <main>
          <BeerShowItem beer={this.props.beer}/>
          <Sidebar />
        </main>
      );
    }
  }
}

export default BeerShow;
