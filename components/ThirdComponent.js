import React, {Component} from "react";
import {Text, View} from "react-native";
import Button from "react-native-button";

export default class ThirdComponent extends Component {
    render() {
        return (
            <View
                style = {{
                    flex: 1,
                    backgroundColor: "tomato",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Text
                    style = {{
                        fontWeight: "bold",
                        fontSize: 22,
                        color: "white",
                    }}>This is third screen
                </Text>
            </View>
        );
    }
}