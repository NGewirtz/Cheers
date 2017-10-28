import React from 'react';
import Rating from '../rating';
import { _date, _decimalNum } from '../../util/format_util';

const BeerInfoList = ({ beer }) => (
  <ul>
    <li>Ibu: {beer.ibu || "N/A"}</li>
    <li>Abv: {beer.abv || "N/A"}</li>
    <li id="star-li"><Rating rating={_decimalNum(beer.rating)} /></li>
    <li id="star-li-label">({_decimalNum(beer.rating)})</li>
    <li>Ratings: {beer.ratings}</li>
    <li>Added: {_date(beer.created_at)}</li>
  </ul>
);

export default BeerInfoList;
