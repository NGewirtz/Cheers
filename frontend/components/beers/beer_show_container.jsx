import { connect } from 'react-redux';
import BeerShow from './beer_show.jsx';
import { fetchBeer } from '../../actions/beer_actions';
import { withRouter } from 'react-router';
import { entitiesSelector } from '../../util/selectors';


const mapStateToProps = (state, ownProps) => {
  const beer = state.entities.beers[ownProps.match.params.beerId];
  const checkins = beer ?
    entitiesSelector(state.entities.checkins, beer.checkinIds) : [];
  return {
    beer,
    checkins
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeer: id => dispatch(fetchBeer(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BeerShow));
