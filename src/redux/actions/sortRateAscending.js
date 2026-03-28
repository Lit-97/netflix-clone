const sortRateAscending = (list) => ({ type: "SORT_RATE_AS", payload: list.sort((curr, next) => curr.vote_average - next.vote_average) });
export default sortRateAscending;
