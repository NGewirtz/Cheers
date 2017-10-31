import React from 'react';
import { connect } from 'react-redux';
import { searchBeers } from '../actions/beer_actions';
import SidebarItem from './sidebar/sidebar_item';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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
        <input onChange={this.handleChange} type="text" placeholder="Search for a beer"/>
        <ul className="search-results">
          {searchResults}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    search: Object.values(state.search)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchBeers: search => dispatch(searchBeers(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
