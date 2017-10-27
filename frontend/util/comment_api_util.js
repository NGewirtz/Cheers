export const fetchComments = (checkinId) => {
  return $.ajax({
    method: 'get',
    url: `/api/checkins/${checkinId}/comments`
  });
};

export const createComment = comment => {
  return $.ajax({
    method: 'post',
    url: `/api/checkins/${comment.checkinId}/comments`,
    data: { comment }
  });
};
