import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return Object.assign({}, action.comments );
    case RECEIVE_COMMENT:
      return Object.assign({}, { [action.comment.id]: action.comment });
    default:
      return state;
  }
};

export default CommentReducer;
