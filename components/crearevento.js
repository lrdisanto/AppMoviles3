import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , TextInput, ScrollView, Alert} from 'react-native';
import { AGREGAREVENTO, BORRAREVENTO } from '../state/actions';
import { State } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import PersonaContainer from './personas'



 class Controls extends React.Component {

  constructor(props){
    super(props);
   
  
    this.state= {
      
      nombreevento:'',
      lugarevento: '',

    }
  }
  


button2 = () => {
  

  if (this.state.nombreevento && this.state.lugarevento) {
  
    const {eventos, AGREGAREVENTO, BORRAREVENTO} = this.props;
    AGREGAREVENTO(this.state.nombreevento, this.state.lugarevento);
    Alert.alert('Evento creado');
    this.evento.clear()
    this.lugar.clear()

  } else {
    Alert.alert('Debe rellenar los campos')
  }

  


}

changenombreevento(nombreevento) {
  this.setState({nombreevento})
}

changelugarevento(lugarevento) {
  this.setState({lugarevento})
}




render() {
    const { eventos , AGREGAREVENTO, BORRAREVENTO } = this.props;
  
    return (

   
      
        <View style={styles.contenedorgeneral}>
        <Text style={styles.titulo}>Crea tu evento!</Text>
        <View style={styles.container}>


        <TextInput id='evento'
        ref={input => { this.evento = input }}
        style={styles.inputs}

        placeholder=" Nombre  del evento"
        onChangeText={(nombreevento) => this.changenombreevento(nombreevento)}



        ></TextInput>

        <TextInput id='lugar' ref={input => { this.lugar = input }}
          style={styles.inputs}

        placeholder="Lugar del evento"
        onChangeText={(lugarevento) => this.changelugarevento(lugarevento)}




        ></TextInput>
        </View>

       <PersonaContainer/> 

        <View style={styles.bloque2}>
        <TouchableOpacity style={styles.button} onPress={() => this.button2()} >
          <Text style={styles.text}> Crear Evento </Text>
        </TouchableOpacity>

        </View>


        </View>

        );
        }
}

const styles = StyleSheet.create({

 

bloque2 :{
marginTop: 120,
borderColor: 'red',
alignItems: 'center',
},


  container: {
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
   
  },

titulo: {
  marginTop: 60,
textAlign: 'center',
alignItems: 'center',
fontSize: 40,
},

inputs: {


marginBottom: 20,
 borderColor: 'black',
 borderWidth: 2,
 textAlign: 'center',
 fontSize: 20,
 width: 300,



},

  button: {
    backgroundColor: '#2c3e50',
    padding: 15,
    marginTop:-60,
    textAlign: 'center',
    alignItems: 'center',
    width: 400,
    alignItems: 'center', 
    
  },

  text: {
    color: '#fff',
    fontWeight: '700',
  },
});

const mapStateToProps = state => ({
  eventos : state.eventos,
});

const mapDispatchToProps = {
  AGREGAREVENTO: AGREGAREVENTO,
  BORRAREVENTO: BORRAREVENTO,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);