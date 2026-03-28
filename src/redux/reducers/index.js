import { combineReducers } from 'redux';

const User_Login = (state = false, action) => {
  if (action.type === 'CHANGE_LOG_STATE') return !state;
  return state;
};

const TMDB_Trendings = (results = [], action) => {
  if (action.type === 'GET_TMDB_TRENDINGS') return action.payload;
  return results;
};

const Populars = (results = [], action) => {
  if (action.type === 'GET_POPULAR_TMDB_MOVIES') return [...action.payload];
  if (action.type === 'GET_POPULAR_TMDB_SERIES') return [...action.payload];
  if (action.type === 'GET_POPULAR_TMDB_PEOPLE') return [...action.payload];
  return results;
};

const Now_Playing = (results = [], action) => {
  if (action.type === 'GET_NOW_PLAYING_TMDB_MOVIES') return [...action.payload];
  if (action.type === 'GET_NOW_PLAYING_TMDB_TV') return [...action.payload];
  return results;
};

const Top_Rated = (results = [], action) => {
  if (action.type === 'GET_TOP_TMDB_MOVIES') return [...action.payload];
  if (action.type === 'GET_TOP_TMDB_TV') return [...action.payload];
  return results;
};

const Movies = (movies = [], action) => {
  if (action.type === 'GET_POPULAR_TMDB_MOVIES') return [...action.payload];
  if (action.type === 'GET_TOP_TMDB_MOVIES') return [...action.payload];
  if (action.type === 'GET_NOW_PLAYING_TMDB_MOVIES') return [...action.payload];
  if (action.type === 'GET_UPCOMING_TMDB_MOVIES') return [...action.payload];
  return movies;
};

const Series = (series = [], action) => {
  if (action.type === 'GET_POPULAR_TMDB_SERIES') return [...action.payload];
  if (action.type === 'GET_NOW_PLAYING_TMDB_TV') return [...action.payload];
  if (action.type === 'GET_TOP_TMDB_TV') return [...action.payload];
  if (action.type === 'GET_ON_AIR_TMDB_TV') return [...action.payload];
  return series;
};

const Movie = (movie = {}, action) => {
  if (action.type === 'GET_MOVIE') return { ...movie, ...action.payload };
  return {};
};

const Serie = (serie = {}, action) => {
  if (action.type === 'GET_SERIE') return { ...serie, ...action.payload };
  if (action.type === 'GET_TV_EPISODES') return { ...serie };
  return {};
};

const Episodes = (episodes = [], action) => {
  if (action.type === 'GET_TV_EPISODES') return [...episodes, action.payload];
  return [];
};

const FilteredList = (List = [], action) => {
  if (action.type === 'INIT_LIST') return [...action.payload];
  if (action.type === 'SORT_RATE_DES') return [...action.payload];
  if (action.type === 'SORT_RATE_AS') return [...action.payload];
  if (action.type === 'SORT_DATE_DES') return [...action.payload];
  if (action.type === 'SORT_DATE_AS') return [...action.payload];
  if (action.type === 'SORT_TITLE_A_Z') return [...action.payload];
  if (action.type === 'SORT_TITLE_Z_A') return [...action.payload];
  if (action.type === 'FILTER_BY_LANGUAGE') return [...action.payload];
  if (action.type === 'FILTER_BY_GENRE') return [...action.payload];
  if (action.type === 'FILTER_BY_MEDIA_TYPE') return [...action.payload];
  return [];
};

const People = (people = [], action) => {
  if (action.type === 'GET_PEOPLE') return [...action.payload];
  return people;
};

const Person = (person = {}, action) => {
  if (action.type === 'GET_PERSON') return { ...person, ...action.payload };
  return {};
};

const SearchList = (List = [], action) => {
  if (action.type === 'SEARCH_TMDB') return [...action.payload];
  return [];
};

export default combineReducers({
  isUserLoggedIn: User_Login,
  trendings: TMDB_Trendings,
  populars: Populars,
  now_playing: Now_Playing,
  top_rated: Top_Rated,
  movies: Movies,
  series: Series,
  movie: Movie,
  serie: Serie,
  filteredList: FilteredList,
  episodes: Episodes,
  people: People,
  person: Person,
  search_list: SearchList,
});
