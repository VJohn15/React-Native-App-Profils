import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class CallButtons extends React.Component{

    static defaultProps = {
        onPress: function(){},
        title: "",
        backgroundColor: "black"
    }

    render (){
        var bc = this.props.backgroundColor;

        return (
            <TouchableOpacity onPress = {this.props.onPress}
                style = {[styles.container, {backgroundColor: bc }]}>
                <Text style = {[styles.text, { color: this.props.color}]}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create ({
    container: { 
        alignItems: "center", justifyContent: "center", margin: 9.5, 
        width: 65, height: 65, borderRadius: 40},
    text: {fontSize: 30, fontWeight: "bold"},
});