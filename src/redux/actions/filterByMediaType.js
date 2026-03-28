const filterByMediaType = (list, type) => {
  if (!type) return { type: "FILTER_BY_MEDIA_TYPE", payload: [] };
  return { type: "FILTER_BY_MEDIA_TYPE", payload: list.filter((el) => el.media_type === type) };
};
export default filterByMediaType;
