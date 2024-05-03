import MovieDetailScreen from "@functions/home/MovieDetailScreen";
import HomeScreen from "../features/home/HomeScreen";
import MoreScreen from "../features/more/MoreScreen";
import SearchMovieScreen from "@functions/home/SearchMovieScreen";

export const SCREENS = {
  HOME_SCREEN: {
    name: 'HomeScreen',
    component: HomeScreen,
  },
  MORE_SCREEN: {
    name: 'MoreScreen',
    component: MoreScreen,
  },
  MOVIE_DETAIL_SCREEN: {
    name: 'MovieDetailScreen',
    component: MovieDetailScreen,
  },
  SEARCH_MOVIE_SCREEN: {
    name: 'SearchMovieScreen',
    component: SearchMovieScreen,
  }
};
