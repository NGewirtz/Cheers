import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SessionForm from './session_form';
import { signup, login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let formType = "Signup";
  if (ownProps.match.path === "/login") {
    formType = "Login";
  }
  return {
    formType,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.match.path === "/login") {
    action = (user) => dispatch(login(user));
  }else {
    action = (user) => dispatch(signup(user));
  }
  return {
    action,
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
