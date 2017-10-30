import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchBeers, addBeerToWishlist, removeBeerFromWishlist } from '../../actions/beer_actions';
import BeersIndex from './beers_index';
import { entitiesSelector } from '../../util/selectors';

const mapStateToProps = (state) => {
  return {
    beers: entitiesSelector(state.entities.beers, state.orderedIds)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    addBeerToWishlist: id => dispatch(addBeerToWishlist(id)),
    removeBeerFromWishlist: id => dispatch(removeBeerFromWishlist(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeersIndex);
