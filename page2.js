import React, {Component} from 'react';
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
  Image
  
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import {eventos, AGREGAREVENTO, BORRAREVENTO } from './state/actions.js';







 class pagina1 extends Component {


   

 vermas = (index) => {
    
     this.props.navigation.navigate('Paginatercera', {index: index});
     
 }




    renderEventos() {
        const {evento, AGREGAREVENTO, BORRAREVENTO} = this.props;
        var asistencia =0;

      
       

         return evento.eventos.map((evento, index) => (
         
            
    
      

                    <View key = {index}>
                        
                        <ScrollView>

                            <View style={styles.cont}>
                            <Text style={{
                                fontSize: 20,
                                textAlign: 'center',

                            }}> {evento.nombre} ({
                                asistencia = 0,
                                evento.personas.forEach(element => { if (element.asistencia){asistencia++}})
    
                                }
                                {asistencia}/{evento.personas.length} participantes)</Text>

                        
                            <TouchableOpacity
                            style={{marginLeft: 200,
                            marginTop: 20,
                            borderColor: 'black',
                            }}
                            onPress={() => this.vermas(index)}> 
                                <Text style={{
                                    fontWeight: 'bold',
                                }}>VER MAS</Text></TouchableOpacity>
                            </View>

                    </ScrollView>




                    </View>
         ));
  

            }





    render(){

       


        return (

            

            <View style={styles.container}>


                  <View>
                      <Text style={styles.titulo}> Mis eventos </Text>
                      <Image style={styles.imagen} source={require('./image/icono1.png')} />
                      <Image style={styles.imagen2} source={require('./image/icono1.png')} />


                  </View>
                  <View style={styles.scroll}>
                <ScrollView style={styles.scrol} >

                {this.renderEventos()}



                </ScrollView>
                
                </View>
               
            </View>
        )
}}
 

const styles = StyleSheet.create({

    scrol: {
        marginBottom: 75,
    },

    cont: {
        flex:1,
        backgroundColor: 'bisque',
        marginTop: 24,
        padding: 30,
      
    },

    imagen2 : {
        height: 45,
        width:45,
        marginTop: -48,
        marginLeft: 40,
    },

    imagen: {
        height: 45,
        width:45,
        marginTop:-30,
        marginLeft: 250,
    },

    scroll: {
marginTop: 80,
    },

    titulo: {
fontWeight: 'bold',
fontSize: 20,
marginTop:50,
textAlign: 'center',

    },


container: {
    flex:1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
},

item :{
marginTop:24,
padding:30,
backgroundColor: 'rgba(34, 35, 64, 1.0)' ,
fontSize: 24,
textAlign: 'center',
color: 'white',

},



})

const mapStateToProps = state => ({
    evento : state.evento,
  });
  
  const mapDispatchToProps = {

  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(pagina1);