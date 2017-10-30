import React from 'react';
import { Link } from 'react-router-dom';

const CheckinComments = ({comments}) => {
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
