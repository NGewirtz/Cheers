import React from 'react';

const Rating = ({rating}) => {
  const width = rating * 20 + "%";
  return (
    <div style={{width}} className="star-rating">
      &#9734; &#9734; &#9734; &#9734; &#9734; ({rating})
    </div>
  );
};

export default Rating;
