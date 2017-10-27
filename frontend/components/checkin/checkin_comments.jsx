import React from 'react';
import { Link } from 'react-router-dom';

const CheckinComments = ({comments}) => {
  const commentItems = comments.map((comment, idx) => (
    <li key={idx}>
      <img className="user-header-img" src="http://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png"/>
      <span>
        <Link to={`/users/${comment.userId}`}>{comment.username}</Link> said {comment.body}
      </span>
    </li>
  ));
  return (
    <section className="comments">
      <ul>
        {commentItems}
      </ul>
    </section>
  );
};


export default CheckinComments;
