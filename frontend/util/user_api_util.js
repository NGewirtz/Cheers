export const fetchUser = id => {
  return $.ajax({
    method: 'get',
    url: `/api/users/${id}`
  });
};

export const updateUser = user => {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${user.get("user[id]")}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: user
  });
};
