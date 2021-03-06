import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default class CallDisplay extends React.Component {

    static defaultProps = {
        display: "",
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.display}>{this.props.display}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {padding: 20},
    display: { fontSize: 20, color: "white", textAlign: "center"},
});