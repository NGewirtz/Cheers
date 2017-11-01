import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import { clearErrors } from '../../actions/session_actions';
import ProfileForm from './profile_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: user => dispatch(updateUser(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileForm));
