import { connect } from 'react-redux';
import { fetchSidebarBeers } from '../../actions/beer_actions';
import Sidebar from './sidebar.jsx';
import { entitiesSelector } from '../../util/selectors';

const mapStateToProps = (state) => {
  return {
    beers: entitiesSelector(state.sidebarItems.beers, state.sidebarItems.orderedIds)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSidebarBeers: (filter) => dispatch(fetchSidebarBeers(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
