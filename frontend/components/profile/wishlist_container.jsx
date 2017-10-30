import { connect } from 'react-redux';
import { fetchBeers } from '../../actions/beer_actions';
import Sidebar from '../sidebar/sidebar.jsx';
import { entitiesSelector } from '../../util/selectors';

const mapStateToProps = (state) => {
  const wishlistBeers = state.entities.users[state.session.id] ?
    state.entities.users[state.session.id].wishlistBeers : [];
  return {
    beers: entitiesSelector(state.entities.beers, wishlistBeers),
    header: 'Wish List'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSidebarBeers: (filter) => dispatch(fetchBeers(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
