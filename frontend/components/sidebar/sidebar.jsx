import React from 'react';
import SidebarItem from './sidebar_item.jsx';

class Sidebar extends React.Component {

  componentDidMount() {
    this.props.fetchBeers();
  }
  render() {
    const sidebarItems = this.props.beers.map(beer => (
      <SidebarItem beer={beer} key={beer.id} />
    ));
    return (
      <aside>
        <h2>Trending Beers</h2>
        <hr />
        <ul>
          {sidebarItems}
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
