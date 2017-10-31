import * as APIUtil from '../util/comment_api_util';
import { receiveSessionErrors } from './session_actions';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


export const receiveComments = comments => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments
  };
};

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const removeComment = id => {
  return {
    type: REMOVE_COMMENT,
    id
  };
};

export const fetchComments = commentId => dispatch => (
  APIUtil.fetchComments(commentId).then(comments => dispatch(receiveComments(comments)))
);

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(newComment => dispatch(receiveComment(newComment)),
  errors => dispatch(receiveSessionErrors(errors)))
);

export const deleteComment = id => dispatch => (
  APIUtil.deleteComment(id).then(comment => dispatch(removeComment(id)),
  errors => dispatch(receiveSessionErrors(errors)))
);
