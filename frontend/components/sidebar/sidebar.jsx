import React from 'react';
import SidebarItem from './sidebar_item.jsx';

class Sidebar extends React.Component {

  componentDidMount() {
    const filter = this.props.filter;
    this.props.fetchSidebarBeers({filter});
  }
  render() {
    const sidebarItems = this.props.beers.map(beer => {
      if(beer) {
        return <SidebarItem beer={beer} key={beer.id} />;
      }
    });
    return (
      <aside>
        <h2>{this.props.customHeader || this.props.header}</h2>
        <hr />
        <ul>
          {sidebarItems}
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
