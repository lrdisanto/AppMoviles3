import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , TextInput, ScrollView, Alert} from 'react-native';
import { AGREGARPERSONA, BORRARPERSONA } from '../state/actions.js';
import { connect } from 'react-redux';





 class PersonaContainer extends React.Component {

  
  constructor(props){
    super(props);
   
  
    this.state= {
      
      nombrep:'',
    

    }
  }
 
  

  
changepersona(nombrep) {
  this.setState({nombrep})
}

  renderPersonas() {
    const {evento, AGREGARPERSONA, BORRARPERSONA} = this.props;

 
    
   
    return evento.personas.map((persona, indexp) => (
      <View>
     
      <View key = {indexp}>
        
          
         
          <View>
        <Text style={{
          marginTop: 15,
          textAlign: 'center',
          fontSize: 15,

        }}> La persona {persona.nombre} está invitada a su evento </Text>

</View>


       
        
       
       
       
      </View>
  
      </View>
      ));
  


}


buttonPressed =  () => {
  
  

  if (this.state.nombrep){ 
 const {evento, AGREGARPERSONA, BORRARPERSONA} = this.props;
 Alert.alert('Se ha agregado un invitado');
 AGREGARPERSONA(this.state.nombrep);
 this.textInput.clear()

}
else {
  Alert.alert('Debe rellenar el campo Invitado')
}
}







  render() {
    return (
      <View style={{
        height: 220,
      }}>
        
        <Text style={styles.tit}>Invita personas al evento!</Text>
        <View>
          <TextInput  ref={input => { this.textInput = input }}
      
            placeholder='Nombre y apellido'
            style={styles.inp}
            onChangeText={(nombrep) => this.changepersona(nombrep)}
            ></TextInput>
          <TouchableOpacity
               onPress={() => this.buttonPressed()}
   style={{
      marginTop: -55,
      marginLeft: 280,
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:28,
       height:28,
       backgroundColor:'midnightblue',
       borderRadius:50,
     }}
 >
  <Text style= {{ color: 'white'}}>+</Text>
 </TouchableOpacity>
 </View>

<ScrollView>
 {this.renderPersonas()}
 </ScrollView>
         
        
     

      </View>
    );
  }
}

const styles = StyleSheet.create({




  bloque: {

marginTop: -400,
backgroundColor: 'pink',
width: 510,



  },

  

  tit: {
    
    marginTop: 20,
  textAlign: 'center',
  alignItems: 'center',
  fontSize: 25,
  },

  container: {

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
 
    marginVertical: 10,

    marginTop: 10,
  },

  index: {
    color: '#999',
    paddingLeft: 7,
    paddingBottom: 50,
  },

  counter: {
    flex: 1,
    color: '#2c3e50',
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'center',
    marginTop:80,
  },

  inp :{
  marginTop: 30,
    
  marginBottom: 20,
  borderColor: 'pink',
  borderWidth: 2,
marginLeft: 20,
marginRight: 20,
  textAlign: 'center',
  fontSize: 20,
  width: 300,
  height: 40,
  },

  boton: {
    marginTop: 10,
    backgroundColor: '#2c3e50',
    padding: 8,
  },

  buttonsContainer: {
    flexDirection: 'row',
  },

  buttonAdd: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },

  buttonRemove: {
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },

  icon: {
    color: '#2c3e50',
    fontSize: 45,
  },
});

const mapStateToProps = state => ({
  evento: state.evento,
});

const mapDispatchToProps = {
  AGREGARPERSONA: AGREGARPERSONA,
  BORRARPERSONA: BORRARPERSONA,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonaContainer);
