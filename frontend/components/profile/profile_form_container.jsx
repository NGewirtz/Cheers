import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import ProfileForm from './profile_form';

const mapStateToProps = (state) => {
  return {
    user: state.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
