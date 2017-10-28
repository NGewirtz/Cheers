import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchBeers, addBeerToWishlist } from '../../actions/beer_actions';
import BeersIndex from './beers_index';
import { beersSelector } from '../../util/selectors';

const mapStateToProps = (state) => {
  return {
    beers: beersSelector(state.entities.beers, state.orderedIds)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    addBeerToWishlist: id => dispatch(addBeerToWishlist(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeersIndex);
