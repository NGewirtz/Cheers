import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CheckinShow from './checkin_show.jsx';
import { fetchCheckin, cheersCheckin, deleteCheersCheckin } from '../../actions/checkin_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { clearErrors } from '../../actions/session_actions';
import { entitiesSelector } from '../../util/selectors';


const mapStateToProps = (state, ownProps) => {
  let cheered, users;
  const userId = state.session.id
  const checkin = state.entities.checkins[ownProps.match.params.checkinId];
  const comments = checkin ?
    entitiesSelector(state.entities.comments, checkin.commentIds) : [];
  if (checkin && checkin.cheerUserIds) {
    cheered = checkin.cheerUserIds.includes(state.session.id) ? true : false;
    users = state.entities.users;
  }
  return {
    checkin,
    comments,
    cheered,
    users,
    userId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCheckin: id => dispatch(fetchCheckin(id)),
    createComment: comment => dispatch(createComment(comment)),
    clearErrors: () => dispatch(clearErrors),
    cheersCheckin: id => dispatch(cheersCheckin(id)),
    deleteCheersCheckin: id => dispatch(deleteCheersCheckin(id)),
    deleteComment: id => dispatch(deleteComment(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckinShow));
