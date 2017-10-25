import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchBeers } from '../../actions/beer_actions';
import BeersIndex from './beers_index';
import { beersSelector } from '../../util/selectors';

const mapStateToProps = (state) => {
  return {
    beers: beersSelector(state.entities.beers)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeersIndex);
