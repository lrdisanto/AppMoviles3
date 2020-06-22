import React, {Component} from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  navigator,
  NavigatorIOS,
  Keyboard
  
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { AsyncStorage } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import Controls from './components/crearevento.js'
import PersonaContainer from './components/personas.js'





export default class Index extends Component {
  
  render(){

    return (
      
    <View style={styles.container}>
        <Controls/>
    </View>




    );




    }
}


const styles= StyleSheet.create({

container: {
  flex:1,
  backgroundColor: 'white',
  paddingLeft: 15,
  paddingRight: 15,
  marginTop: 0,
},

}


);


