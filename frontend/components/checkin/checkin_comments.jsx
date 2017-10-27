import React from 'react';

const CheckinComments = ({comments}) => {
  const commentItems = comments.map((comment, idx) => (
    <li key={idx}>{comment.username} said {comment.body}</li>
  ));
  return (
    <section className="comments">
      <img />
      <ul>
        {commentItems}
      </ul>
    </section>
  );
};


export default CheckinComments;
