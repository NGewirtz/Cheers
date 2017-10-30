import { connect } from 'react-redux';
import BreweryShow from './brewery_show';
import { fetchBrewery } from '../../actions/brewery_actions';
import { withRouter } from 'react-router';
import { entitiesSelector } from '../../util/selectors';

const mapStateToProps = (state, ownProps) => {
  const brewery = state.entities.breweries[ownProps.match.params.breweryId];
  let beers = brewery ? entitiesSelector(state.entities.beers, brewery.beerIds) : [];
  let checkins = brewery ? entitiesSelector(state.entities.checkins, brewery.checkinIds) : [];
  return {
    brewery,
    beers,
    checkins,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBrewery: id => dispatch(fetchBrewery(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BreweryShow));
