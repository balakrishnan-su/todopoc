import { InventoryActionTypes } from "./types";
import {  Dispatch, Action } from "redux";

export const fetchRequest = (dispatch: Dispatch): Promise<{ type: InventoryActionTypes; payload: any; }> => {
      return fetch(`https://gorest.co.in/public/v1/todos`)
      .then((res) => res.json())
      .then((response) => dispatch({
        type: InventoryActionTypes.FETCH_SUCCESS,
        payload: response.data
    })
)}

export const updateTodo = (dispatch: Dispatch): Promise<{ type: InventoryActionTypes; payload: any; }> => {
    return fetch(`https://gorest.co.in/public/v1/todos`)
      .then((res) => res.json())
      .then((response) => dispatch({
        type: InventoryActionTypes.FETCH_SUCCESS,
        payload: response.data
    })
)}

export const openModal = (dispatch: Dispatch): Action<{type: InventoryActionTypes; payload: any; }> => {
    return dispatch({
        type: InventoryActionTypes.TOGGLE_MODAL,
        payload: payload
  });
};

/*export const fetchTodoRequest = (dispatch: Dispatch): Action<type: InventoryActionTypes; payload: any;> => {
      dispatch({
          type: InventoryActionTypes.DELETE_TOTO,
          payload: payload
    });
};*/

/*try {
      return dispatch({
        type: InventoryActionTypes.FETCH_SUCCESS,
        payload: {}
      });
    } catch (e) {
      return dispatch({
        type: InventoryActionTypes.FETCH_ERROR
      });
    }*/