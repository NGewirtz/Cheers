import { connect } from 'react-redux';
import { fetchBeers } from '../../actions/beer_actions';
import Sidebar from './sidebar.jsx';
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
