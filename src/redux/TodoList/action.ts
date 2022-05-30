import { InventoryActionTypes } from "./types";
import {  Dispatch } from "redux";

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