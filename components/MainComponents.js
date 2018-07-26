import React, {
    Component
} from "react";
import {
    Text,
    View
} from "react-native";
import Button from "react-native-button";
import {
    DetailScreen,
    ThirdScreen
} from "../screenName";
//import {StackNavigator} from "react-navigation";

export default class MainComponents extends Component {
    render() {
        let dataSendToDetail = {
            name: "qthjen",
            year: 20,
        };
        return ( 
            <View style = {
                {
                    flex: 1,
                    bakcgroundColor: "dodgerblue",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }>
            <Text style = {
                {
                    fontWeight: "bold",
                    fontSize: 22,
                    color: "white"
                }
            }>This is main screen 
            </Text> 
            <Button 
                containerStyle = {{
                    padding: 10,
                    margin: 20,
                    width: 200,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor: "darkviolet",
                }}
                style = {{
                    fontSize: 18,
                    color: "white",
                }}
                onPress = {() => {
                    this.props.navigation.navigate(DetailScreen, dataSendToDetail);
                }}>
            Navigate To Deital 
            </Button> 
            <Button 
                containerStyle = {{
                    padding: 10,
                    margin: 20,
                    width: 200,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor: "darkviolet",
                }}
                style = {{
                    fontSize: 18,
                    color: "white",
                }}
                onPress = {() => {
                    this.props.navigation.navigate(ThirdScreen)
                }}>
            Navigate To Third 
            </Button> 
            </View>
        );
    }
}