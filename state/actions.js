import * as actionTypes from './actionTypes';


export const CAMBIARASISTENCIA = (indexe,indexp) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.CAMBIARASISTENCIA,
    numeroevento:indexe,
    numeroinvitado: indexp,
  });
};


export const AGREGAREVENTO = (nombre, lugar)  => (dispatch, getState) => {
  dispatch({
    type: actionTypes.AGREGAREVENTO,
    nombre: nombre,
    lugar: lugar,
    
    
  });
};

export const BORRAREVENTO = index => (dispatch, getState) => {
  dispatch({
    type: actionTypes.BORRAREVENTO,
    selected: index,
  });
};

export const AGREGARPERSONA = nombrep => (dispatch, getState) => {
  dispatch({
    type: actionTypes.AGREGARPERSONA,
    nombrepersona: nombrep,
  });
};

export const BORRARPERSONA = nombrep => (dispatch, getState) => {
  dispatch({
    type: actionTypes.BORRARPERSONA,
    nombrepersona: nombrep,
  });
};
