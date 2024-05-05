import MovieDetailScreen from "@functions/home/MovieDetailScreen";
import HomeScreen from "../features/home/HomeScreen";
import MoreScreen from "../features/more/MoreScreen";
import SearchMovieScreen from "@functions/home/SearchMovieScreen";
import DownloadScreen from "@functions/download/DownloadScreen";

export const SCREENS = {
  HOME_SCREEN: {
    name: 'HomeScreen',
    component: HomeScreen,
  },
  MORE_SCREEN: {
    name: 'MoreScreen',
    component: MoreScreen,
  },
  DOWNLOAD_SCREEN: {
    name: 'DownloadScreen',
    component: DownloadScreen,
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
