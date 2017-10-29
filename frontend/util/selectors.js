export const entitiesSelector = (entity, ids) => {
  return ids.map(id => entity[id]);
};

export const cheersSelector = cheers => (
  cheers.reverse().slice(0,6)
);
