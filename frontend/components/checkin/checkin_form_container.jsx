import { connect } from 'react-redux';
import CheckinForm from './checkin_form.jsx';
import { fetchBeer } from '../../actions/beer_actions';
import { createCheckin, fetchCheckin, updateCheckin } from '../../actions/checkin_actions';
import { clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  let form, beer;
  if (ownProps.match.path !== "/checkins/:checkinId/edit") {
    form = {
      body: '',
      rating: 5,
      beerId: ownProps.match.params.beerId
    };
    return {
      beer: state.entities.beers[ownProps.match.params.beerId],
      errors: state.errors,
      form,
      formType: "Add Checkin"
    };
  }else {
    form = state.entities.checkins[ownProps.match.params.checkinId]; //form is entire checkin
    beer = state.entities.beers[form.beerId];
    return {
      form,
      beer,
      errors: state.errors,
      formType: "Edit Checkin"
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.match.path === "/checkins/:checkinId/edit") {
    action = checkin => dispatch(updateCheckin(checkin));
  }else {
    action = checkin => dispatch(createCheckin(checkin));
  }
  return {
    fetchBeer: id => dispatch(fetchBeer(id)),
    action,
    clearErrors: () => dispatch(clearErrors()),
    fetchCheckin: id => dispatch(fetchCheckin(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckinForm));
