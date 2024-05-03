import { navigate, replace } from "@utils/NavigateHelper";
import { SCREENS } from "./ScreensRouter";

export function navigateToRootAdmin() {
    replace('BottomTabAdmin');
}

export function navigateToMovieDetailScreen(param: any) {
    navigate(SCREENS.MOVIE_DETAIL_SCREEN.name, param);
}

export function navigateToSearchMovieScreen() {
    navigate(SCREENS.SEARCH_MOVIE_SCREEN.name);
}