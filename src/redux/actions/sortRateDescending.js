const sortRateDescending = (list) => ({ type: "SORT_RATE_DES", payload: list.sort((curr, next) => next.vote_average - curr.vote_average) });
export default sortRateDescending;
