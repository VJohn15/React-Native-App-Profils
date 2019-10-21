import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import CallScreen from './screens/CallScreen';
import CallButtons from './screens/components/CallButtons';
import CallDisplay from './screens/components/CallDisplay';


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
        <CallButtons onPress = {() => {this.onDigitPress("1")}} title = "1" color = "white" backgroundColor = "#5D5756" />
        <CallButtons onPress = {() => {this.onDigitPress("2")}} title = "2" color = "white" backgroundColor = "#5D5756" />
        <CallButtons onPress = {() => {this.onDigitPress("3")}} title = "3" color = "white" backgroundColor = "#5D5756" />
        </View>

        <View style = {styles.buttonRow}>
        <CallButtons onPress = {() => {this.onDigitPress("4")}} title = "4" color = "white" backgroundColor = "#5D5756" />
        <CallButtons onPress = {() => {this.onDigitPress("5")}} title = "5" color = "white" backgroundColor = "#5D5756" />
        <CallButtons onPress = {() => {this.onDigitPress("6")}} title = "6" color = "white" backgroundColor = "#5D5756" />
        </View>

        <View style = {styles.buttonRow}>
        <CallButtons onPress = {() => {this.onDigitPress("7")}} title = "7" color = "white" backgroundColor = "#5D5756" />
        <CallButtons onPress = {() => {this.onDigitPress("8")}} title = "8" color = "white" backgroundColor = "#5D5756" />
        <CallButtons onPress = {() => {this.onDigitPress("9")}} title = "9" color = "white" backgroundColor = "#5D5756" />
        </View>

        <View style = {styles.buttonRow}>
        <CallButtons onPress = {() => {this.onDigitPress("*")}} title = "*" color = "white" backgroundColor = "#5D5756" />
        <CallButtons onPress = {() => {this.onDigitPress("0")}} title = "0" color = "white" backgroundColor = "#5D5756" />
        <CallButtons onPress = {() => {this.onDigitPress("#")}} title = "#" color = "white" backgroundColor = "#5D5756" />
        </View>

        <View style = {styles.buttonRow}>
        <CallButtons title = "0" color = "white" backgroundColor = "#5D5756" />
        <CallButtons title = "#" color = "white" backgroundColor = "#5D5756" />
        </View>
        
      </View>
      
      </View>
      </View>

      
    );


  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#151414", borderColor: "white" },
  displayContainer: {flex: 0.9, justifyContent: "flex-end"},
  buttonRow: { flexDirection:"row", justifyContent: "center" },
  callBar: {flex: 0.88, backgroundColor: "#302C2C"}
})

 