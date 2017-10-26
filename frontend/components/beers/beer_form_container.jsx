import { connect } from 'react-redux';
import BeerForm from './beer_form.jsx';
import { fetchBeer, createBeer, updateBeer, fetchBreweries } from '../../actions/beer_actions';
import { clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  let beer;
  if (ownProps.location.pathname === "/beers/new" ) {
    beer = { name: '', description: '', brewery_id: '', abv: '', ibu: '', beer_type: ''};
  }else {
    beer = state.entities.beers[ownProps.match.params.beerId];
  }
  return {
    beer,
    breweries: Object.values(state.entities.breweries),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.location.pathname === "/beers/new" ) {
    action = beer => dispatch(createBeer(beer));
   }else {
    action = beer => dispatch(updateBeer(beer));
  }
  return {
    clearErrors: () => dispatch(clearErrors()),
    fetchBreweries: () => dispatch(fetchBreweries()),
    fetchBeer: id => dispatch(fetchBeer(id)),
    action
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BeerForm));
