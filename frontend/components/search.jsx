import React from 'react';
import { connect } from 'react-redux';
import { searchBeers } from '../actions/beer_actions';
import SidebarItem from './sidebar/sidebar_item';
import { withRouter, Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname !== this.props.location.pathname) {
      const search = document.getElementById('search');
      search.value = "";
      this.props.searchBeers({ query: "" });
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.props.searchBeers({ query: e.target.value });
  }

  render() {
    const searchResults = this.props.search.map(beer => (
      <SidebarItem beer={beer} key={beer.id} />
    ));
    return (
      <div className="search-div">
        <input id="search" onChange={this.handleChange} type="text" placeholder="Find a beer...               &#x1F50D;"/>
        <ul className="search-results">
          {searchResults}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    search: Object.values(state.search)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchBeers: search => dispatch(searchBeers(search))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
