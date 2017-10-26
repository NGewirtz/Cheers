export const fetchCheckins = (filter) => {
  return $.ajax({
    method: 'get',
    url: `/api/checkins`,
    data: filter
  });
};

export const fetchCheckin = id => {
  return $.ajax({
    method: 'get',
    url: `/api/checkins/${id}`
  });
};

export const createCheckin = checkin => {
  return $.ajax({
    method: 'post',
    url: '/api/checkins',
    data: { checkin }
  });
};

export const updateCheckin = checkin => {
  return $.ajax({
    method: 'patch',
    url: `/api/checkins/${checkin.id}`,
    data: { checkin }
  });
};

export const deleteCheckin = id => {
  return $.ajax({
    method: 'delete',
    url: `/api/checkins/${id}`
  });
};
