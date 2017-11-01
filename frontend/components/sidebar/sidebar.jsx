import React from 'react';
import SidebarItem from './sidebar_item.jsx';

class Sidebar extends React.Component {

  componentDidMount() {
    const wishlist = this.props.wishlist;
    this.props.fetchSidebarBeers({wishlist});
  }
  render() {
    const sidebarItems = this.props.beers.map(beer => {
      if(beer) {
        return <SidebarItem beer={beer} key={beer.id} />;
      }
    });
    return (
      <aside>
        <h2>{this.props.header}</h2>
        <hr />
        <ul>
          {sidebarItems}
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
