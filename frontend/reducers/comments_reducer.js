import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_CHECKIN } from '../actions/checkin_actions';

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHECKIN:
      return Object.assign({}, action.comments );
    case RECEIVE_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    default:
      return state;
  }
};

export default CommentReducer;
