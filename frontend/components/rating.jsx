import React from 'react';
// -----https://codepen.io/Bluetidepro/pen/GkpEa A PEN BY Zach Reed---
//Copyright (c) 2017 by Zach Reed (https://codepen.io/Bluetidepro/pen/GkpEa)
const Rating = ({rating}) => {
  const width = rating * 20 + "%";
  return (
    <div class="star-ratings-css">
      <div class="star-ratings-css-top" style={{width}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div>
  );
};

export default Rating;
