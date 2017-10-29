import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
