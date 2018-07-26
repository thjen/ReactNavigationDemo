/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainComponent from "./components/MainComponents";
import DetailComponent from "./components/DetailComponent";
import ThirdComponent from "./components/ThirdComponent";
import {MainScreen, ThirdScreen, DetailScreen} from "./screenName";
import {createStackNavigator} from "react-navigation";

const App = createStackNavigator({
    MainScreen: {
        screen: MainComponent,
        navigationOptions: {
            headerTitle: "Main",
        },
    },
    DetailScreen: {
        screen: DetailComponent,
        navigationOptions: {
            headerTitle: "Detail",
        },
    },
    ThirdScreen: {
        screen: ThirdComponent,
        navigationOptions: {
            headerTitle: "Third",
        },
    },
});

AppRegistry.registerComponent(appName, () => App);

