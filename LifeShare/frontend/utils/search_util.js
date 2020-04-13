export const searchUser = user => {
  return $.ajax({
    method: "GET",
    url: `api/search`,
    data: { search: user }
  })
};