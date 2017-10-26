import { connect } from 'react-redux';
import CheckinForm from './checkin_form.jsx';
import { fetchBeer } from '../../actions/beer_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    beer: state.entities.beers[ownProps.match.params.beerId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeer: id => dispatch(fetchBeer(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckinForm));
