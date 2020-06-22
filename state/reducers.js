import {
    AGREGAREVENTO,
    BORRAREVENTO,
    AGREGARPERSONA,
    BORRARPERSONA,
    CAMBIARASISTENCIA,
 
  } from './actionTypes';
  
  const eventoInitialState = {
    eventos: [],
    selected: null,
    personas: [],
  };

  
  
  export const eventoReducer = (state = eventoInitialState, action) => {
    const { eventos } = state;
    const { personas } = state;
    const { selected } = action;
    let newEventos;
    let newPersonas;
    let newEvento;
  
    switch (action.type) {
    



        case AGREGARPERSONA:
          let persona= {
            nombre: action.nombrepersona,
            asistencia: false,
          }
          newPersonas=[
            ...personas,
            persona
          ];
          return {
            ...state,
            personas: newPersonas,
          };

        case CAMBIARASISTENCIA:
          const indexe = action.numeroevento;
          const indexp = action.numeroinvitado;

          const newPersona = {
            nombre: eventos[indexe].personas[indexp].nombre ,
            asistencia: !eventos[indexe].personas[indexp].asistencia,
          }

          let newPersonas = [
            ...eventos[indexe].personas.slice(0,indexp),
            newPersona,
            ...eventos[indexe].personas.slice(indexp+1),
          ]
          
          newEvento = {

            nombre: eventos[indexe].nombre,
            lugar: eventos[indexe].lugar,
            personas:newPersonas

          }
          
          newEventos = [
            ...eventos.slice(0,indexe),
            newEvento,
            ...eventos.slice(indexe+1)
          ]
          console.log(newEventos);

          return {
            ...state,
            eventos:newEventos
          };

        case AGREGAREVENTO:
         
          let evento={
            nombre:action.nombre,
            lugar: action.lugar,
            personas: personas 
          };

          newPersonas=[];
          newEventos = [
            ...eventos, 
            evento,
        
          ];
  
        return {
          ...state,
            eventos: newEventos,
            personas: newPersonas,
        };

        case BORRARPERSONA:
          index= personas.indexOf(action.nombrepersona),
          newPersonas= [
            ...personas.slice(0, index -1),
            ...personas.slice(index+1)
          ];
          return {
            ...state,
            personas: newPersonas,
          };
         
      case BORRAREVENTO:
        // remove the last item
        newEventos = [
          ...eventos.slice(0, selected - 1), 
          ...eventos.slice(selected + 1)
        ];
  
        return {
          ...state,
          eventos: newEventos,
        };
      default:
        return state;
    }
  };