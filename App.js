import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import CallScreen from './screens/CallScreen';
import CallButtons from './screens/components/CallButtons';
//import CallDisplay from './screens/components/CallDisplay';


export default class App extends React.Component{

  constructor (props){
    super(props);

    this.state = {
     // display: "0",
    };
  }


  render(){
    return (
      <View style = { styles.container}>
        <View style = {styles.displayContainer}>
       
       <View style = {styles.buttonRow}>
        <CallButtons title = "1" color = "white" backgroundColor = "#5D5756" />
        <CallButtons title = "2" color = "white" backgroundColor = "#5D5756" />
        <CallButtons title = "3" color = "white" backgroundColor = "#5D5756" />
        </View>

        <View style = {styles.buttonRow}>
        <CallButtons title = "4" color = "white" backgroundColor = "#5D5756" />
        <CallButtons title = "5" color = "white" backgroundColor = "#5D5756" />
        <CallButtons title = "6" color = "white" backgroundColor = "#5D5756" />
        </View>

        <View style = {styles.buttonRow}>
        <CallButtons title = "7" color = "white" backgroundColor = "#5D5756" />
        <CallButtons title = "8" color = "white" backgroundColor = "#5D5756" />
        <CallButtons title = "9" color = "white" backgroundColor = "#5D5756" />
        </View>

        <View style = {styles.buttonRow}>
        <CallButtons title = "*" color = "white" backgroundColor = "#5D5756" />
        <CallButtons title = "0" color = "white" backgroundColor = "#5D5756" />
        <CallButtons title = "#" color = "white" backgroundColor = "#5D5756" />
        </View>

        <View style = {styles.buttonRow}>
        <CallButtons title = "0" color = "white" backgroundColor = "#5D5756" />
        <CallButtons title = "#" color = "white" backgroundColor = "#5D5756" />
        </View>
        
      </View>
      <View style = {styles.callBar}></View>
      </View>

      
    );


  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#211D1C" },
  displayContainer: {flex: 0.85, justifyContent: "flex-end"},
  buttonRow: { flexDirection:"row", justifyContent: "center" },
  callBar: {flex: 0.15, backgroundColor: "#040404"}
})

 