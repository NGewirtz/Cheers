import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';
import { entitiesSelector } from '../../util/selectors';

const mapStateToProps = (state, ownProps) => {
  let checkins;
  const user = state.entities.users[ownProps.match.params.userId] || {};
  checkins = user.checkinIds ?
    entitiesSelector(state.entities.checkins, user.checkinIds) : [];
  return {
    user,
    checkins
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
