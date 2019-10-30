import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import CallScreen from './screens/CallScreen';
import CallButtons from './screens/components/CallButtons';
import CallDisplay from './screens/components/CallDisplay';
import Call from 'react-native-vector-icons/Ionicons';
import Del from 'react-native-vector-icons/Feather';
import CallIn from 'react-native-vector-icons/SimpleLineIcons'; 


export default class App extends React.Component{

  constructor (props){
    super(props);

    this.state = {
      display: "",
    };
  }

  onDigitPress(digit){
  
    this.setState({ display: this.state.display+digit});
  }

 


  render(){
    return (
     
      <View style = { styles.container}>
         <View style = {styles.callBar}>
        <View style = {styles.displayContainer}>

        <CallDisplay display = {this.state.display}/>
       
       <View style = {styles.buttonRow}>
        <CallButtons onPress = {() => {this.onDigitPress("1")}} title = "1" color = "white" backgroundColor = "#3A3A3A" />
        <CallButtons onPress = {() => {this.onDigitPress("2")}} title = "2" color = "white" backgroundColor = "#3A3A3A" />
        <CallButtons onPress = {() => {this.onDigitPress("3")}} title = "3" color = "white" backgroundColor = "#3A3A3A" />
        </View>

        <View style = {styles.buttonRow}>
        <CallButtons onPress = {() => {this.onDigitPress("4")}} title = "4" color = "white" backgroundColor = "#3A3A3A" />
        <CallButtons onPress = {() => {this.onDigitPress("5")}} title = "5" color = "white" backgroundColor = "#3A3A3A" />
        <CallButtons onPress = {() => {this.onDigitPress("6")}} title = "6" color = "white" backgroundColor = "#3A3A3A" />
        </View>

        <View style = {styles.buttonRow}>
        <CallButtons onPress = {() => {this.onDigitPress("7")}} title = "7" color = "white" backgroundColor = "#3A3A3A" />
        <CallButtons onPress = {() => {this.onDigitPress("8")}} title = "8" color = "white" backgroundColor = "#3A3A3A" />
        <CallButtons onPress = {() => {this.onDigitPress("9")}} title = "9" color = "white" backgroundColor = "#3A3A3A" />
        </View>

        <View style = {styles.buttonRow}>
        <CallButtons onPress = {() => {this.onDigitPress("*")}} title = "*" color = "white" backgroundColor = "#3A3A3A" />
        <CallButtons onPress = {() => {this.onDigitPress("0")}} title = "0" color = "white" backgroundColor = "#3A3A3A" />
        <CallButtons onPress = {() => {this.onDigitPress("#")}} title = "#" color = "white" backgroundColor = "#3A3A3A" />
        </View>

        <View style = {styles.iconRow2}>
       
         
          <Call name = "ios-call" size = {30} color = "white"   />
        
          <Del name = "delete" size = {40} color ="white" />
  
        </View>
        
      </View>
         
      </View>
      <View style = {styles.iconRow1}>
      <Call name = "ios-keypad" title = "Keyboard" size = {30} color = "white"/>
      <CallIn name = "call-in" size = {30} color = "white"/>
      </View>

      </View>

      
    );


  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#222222", borderColor: "white" },
  displayContainer: {flex: 0.9, justifyContent: "flex-end"},
  buttonRow: { flexDirection:"row", justifyContent: "center" },
  callBar: {flex: 0.95, backgroundColor: "#292929"},
  iconRow1: {flexDirection: "row", justifyContent: "space-around"},
  iconRow2: {flexDirection: "row", justifyContent: "space-evenly"},
})

 