import { MobileApp } from "./MobileApp";
import { LogBox } from "react-native";
import { RootNavigation } from "./app/navigations";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {

    LogBox.ignoreAllLogs();

    return (
        <MobileApp>
            <Provider store={store}>
                <RootNavigation />
            </Provider>
        </MobileApp>
    )
}
export default App;