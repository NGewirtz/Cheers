import React from 'react';
import { cheersSelector } from '../../util/selectors';

const CheckinCheers = ({cheersCheckin, deleteCheersCheckin, cheerUserIds, checkinId, cheered, users}) => {
  const cheersImgs = cheerUserIds.map(id => (
    <img className="user-header-img" src={users[id].image} title={users[id].username} key={id}/>
  ));
  let className = cheered ? 'cheers-button red' : 'cheers-button green';
  let title = cheered ? 'unCHEERS!' : 'CHEERS!';
  let action = cheered ? deleteCheersCheckin : cheersCheckin;
  return (
    <section className="cheers-section">
      <button onClick={() => action(checkinId)} title={title} className={className}>&#x1f37a;</button>
      <span>{cheersImgs.length}</span>
      <div>
        {cheersSelector(cheersImgs)}
      </div>
    </section>
  );
};


export default CheckinCheers;
