const filterByGenre = (list, genres) => ({
  type: "FILTER_BY_GENRE",
  payload: list?.filter((el) => el?.genre_ids?.find((g) => genres?.includes(g))),
});
export default filterByGenre;
