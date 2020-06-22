//This is an example code to understand Switch//

import React, {useState} from 'react';
import { connect } from 'react-redux';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  navigator,
  NavigatorIOS,
  Keyboard,
  ScrollView,
  PermissionsAndroid,
  Image,
  Switch,
  Vibration

} from 'react-native';
import EventoPersona from './components/eventoPersona.js';






class switchhh extends React.Component {
  state = { switchValue: true };

  toggleSwitch = value => {

    this.setState({ switchValue: value });

  };

  render() {
      const {evento} =this.props;
      console.log(this.props.params);
      
      if (this.props.route.params === undefined){
        return (
          <View style={{backgroundColor: 'white',}}>
            <Image style={{
              height: 100,
             width:100,
             marginTop: 200,
            marginLeft: 135,

        }} source={require('./image/alerta.png')} />
            <Text style={{ fontSize: 30,
            textAlign: 'center',
            alignItems: 'center',
            marginTop: 20,
            }}>
              Para ver el detalle, debe seleccionar un evento primero!
            </Text>
            <TouchableOpacity
            style={{
              backgroundColor: '#2c3e50',
              padding: 15,
              marginTop:130,
              textAlign: 'center',
              alignItems: 'center',
              width: 400,
              alignItems: 'center', 
            }}
            onPress={() =>  this.props.navigation.navigate('Crear evento')} >
                <Text style={{color: 'white',}} > Volver </Text>
            </TouchableOpacity>
          </View>
        )
      }
      else{
        var index = this.props.route.params.index;
        return (

          <View style= {{
            marginBottom: 300,
            borderColor: 'black',
          }}>
          

              <View style={{
                marginTop: 80,
              }}>

                <View style={{backgroundColor: "grey",
                borderWidth: 2,
                marginRight: 20,
                marginLeft: 20,}}>
              <Text style={{
              
                fontSize: 20,
                textAlign: 'center',
                
              }}> Nombre del evento: {evento.eventos[index].nombre}</Text>
              <Text style={{
                textAlign:'center',
                fontSize: 20,
                
              }}> Lugar del evento: {evento.eventos[index].lugar}</Text>
             </View>

              
              <Text style={{
                marginTop: 30,
                textAlign:'justify',
                fontSize: 25,
                fontStyle: 'italic',
              }}
              > Invitados al evento </Text>

              </View>

              
              <ScrollView style= {{borderColor:'black', borderWidth: 3, borderTopLeftRadius: 20,
    borderTopRightRadius: 20,  borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,}}>
                {
                  evento.eventos[index].personas.map((persona,indexp) => (
                    
                    <View key={indexp}>
                        <EventoPersona persona={persona} nroevento={index} nropersona={indexp} />
                    </View>
            
                  ))
                }
                

              </ScrollView>   
             
                
              <View>
              <TouchableOpacity 
              style={{ 
                marginTop: 40,
             
                backgroundColor: '#2c3e50',
                padding: 15,
               
                
               
                alignItems: 'center', }}
              onPress={() =>  this.props.navigation.navigate('Crear evento')} >
                <Text style={{
                  color: 'floralwhite',
                  fontSize:20,
                  textAlign: 'center',
               
                  
                 
                  
                }}> Volver </Text>
              </TouchableOpacity>

              </View>
             



          </View>
        );
      }
      

    }






}
















const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  evento : state.evento,
});

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(switchhh);