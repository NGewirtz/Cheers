import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CheckinShow from './checkin_show.jsx';
import { fetchCheckin } from '../../actions/checkin_actions';
import { createComment } from '../../actions/comment_actions';
import { clearErrors } from '../../actions/session_actions';
import { entitiesSelector } from '../../util/selectors';

const mapStateToProps = (state, ownProps) => {
  const checkin = state.entities.checkins[ownProps.match.params.checkinId];
  const comments = checkin ?
    entitiesSelector(state.entities.comments, checkin.commentIds) : [];
  return {
    checkin,
    comments
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCheckin: id => dispatch(fetchCheckin(id)),
    createComment: comment => dispatch(createComment(comment)),
    clearErrors: () => dispatch(clearErrors)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckinShow));
