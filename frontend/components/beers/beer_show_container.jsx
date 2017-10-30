import { connect } from 'react-redux';
import BeerShow from './beer_show.jsx';
import { fetchBeer, addBeerToWishlist, removeBeerFromWishlist } from '../../actions/beer_actions';
import { withRouter } from 'react-router';
import { entitiesSelector } from '../../util/selectors';


const mapStateToProps = (state, ownProps) => {
  const beer = state.entities.beers[ownProps.match.params.beerId];
  const checkins = beer ?
    entitiesSelector(state.entities.checkins, beer.checkinIds) : [];
  const wishlistBeers = state.entities.users[state.session.id] ?
    state.entities.users[state.session.id].wishlistBeers : [];
  return {
    beer,
    checkins,
    wishlistBeers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeer: id => dispatch(fetchBeer(id)),
    removeBeerFromWishlist: id => dispatch(removeBeerFromWishlist(id)),
    addBeerToWishlist: id => dispatch(addBeerToWishlist(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BeerShow));
