import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import ProfileForm from './profile_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileForm));
