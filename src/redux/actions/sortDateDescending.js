const sortDateDescending = (list) => ({
  type: "SORT_DATE_DES",
  payload: list.sort((curr, next) => Date.parse(next.release_date) - Date.parse(curr.release_date) || Date.parse(next.first_air_date) - Date.parse(curr.first_air_date)),
});
export default sortDateDescending;
