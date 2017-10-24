import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let formType = "signup";
  if (ownProps.match.path === "/login") {
    formType = "login";
  }
  return {
    formType
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
    action
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
