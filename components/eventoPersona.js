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
  Image,
  Vibration,
  Switch
  
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import {eventos, CAMBIARASISTENCIA } from '../state/actions.js';



class EventoPersona  extends Component {

 
    modificarAsistencia(indexe,indexp) {
        const { CAMBIARASISTENCIA } = this.props;
        Vibration.vibrate(1000)

        CAMBIARASISTENCIA(indexe,indexp);
    }

    render(){
        
        const persona = this.props.persona;
        const indexEvento = this.props.nroevento;
        const indexPersona = this.props.nropersona; 
            
        return (
            <View>
                <View style={{background: 'black', padding: 10, margin: 5}}>
                    <Text style={styles.pers}>{persona.nombre}</Text>
                    <Text style={{
                        
                    }}>Asistencia: {persona.asistencia ? 'SI' : 'NO'}</Text>                    
                    <Switch style={styles.sw}
                    onValueChange={() => this.modificarAsistencia(indexEvento,indexPersona)}
                    value={persona.asistencia}
                    />
                </View>
            </View>
            )
        }
    
}

const styles = StyleSheet.create({

    pers: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    sw: {
        marginTop: -40,
        marginLeft: 200,
    },

} 
)


const mapStateToProps = state => ({
    evento : state.evento,
});

const mapDispatchToProps = {
    CAMBIARASISTENCIA : CAMBIARASISTENCIA
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EventoPersona);