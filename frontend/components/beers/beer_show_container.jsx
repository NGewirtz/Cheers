import { connect } from 'react-redux';
import BeerShow from './beer_show.jsx';
import { fetchBeer } from '../../actions/beer_actions';
import { withRouter } from 'react-router';


const mapStateToProps = (state, ownProps) => {
  const beer = state.entities.beers[ownProps.match.params.beerId];
  return {
    beer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeer: id => dispatch(fetchBeer(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BeerShow));
