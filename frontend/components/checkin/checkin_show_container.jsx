import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CheckinShow from './checkin_show.jsx';
import { fetchCheckin } from '../../actions/checkin_actions';
import { fetchComments, createComment } from '../../actions/comment_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    checkin: state.entities.checkins[ownProps.match.params.checkinId],
    comments: Object.values(state.entities.comments)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCheckin: id => dispatch(fetchCheckin(id)),
    fetchComments: id => dispatch(fetchComments(id)),
    createComment: comment => dispatch(createComment(comment)),
    clearErrors: () => dispatch(clearErrors)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckinShow));
