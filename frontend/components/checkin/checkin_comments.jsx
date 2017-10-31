import React from 'react';
import { Link } from 'react-router-dom';

const CheckinComments = ({comments, userId, deleteComment}) => {
  const commentItems = comments.map((comment, idx) => {
    if (comment) {
      return (
        <li key={idx}>
          <img className="user-header-img" src={comment.image}/>
          <span>
            <Link to={`/users/${comment.userId}`}>
              {comment.username}
            </Link> said {comment.body}
          </span>
          {(userId === comment.userId) && <p className="comment-delete" onClick={() => deleteComment(comment.id)}>Delete</p>}
        </li>
      );
    }
  });
  if(commentItems.length === 0) {
    commentItems.push(<li key='999'>Be The First To Leave A Comment Below</li>);
  }
  return (
    <section className="comments">
      <ul>
        {commentItems}
      </ul>
    </section>
  );
};


export default CheckinComments;
