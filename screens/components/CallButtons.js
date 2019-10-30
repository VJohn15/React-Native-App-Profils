import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';

export default class CallButtons extends React.Component{

    static defaultProps = {
        onPress: function(){},
        title: "",
        backgroundColor: "black"
    }

    render (){
        var bc = this.props.backgroundColor;

        return (
            <TouchableHighlight onPress = {this.props.onPress} underlayColor = "#B10C40"

                style = {[styles.container, {backgroundColor: bc }]}>
                <Text style = {[styles.text, { color: this.props.color}]}>{this.props.title}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create ({
    container: { 
       // position: "absolute",
        alignItems: "center", justifyContent: "center", margin: 9.5, 
        width: 65, height: 65, borderRadius: 40},
    text: {fontSize: 30, fontWeight: "bold"},
});
