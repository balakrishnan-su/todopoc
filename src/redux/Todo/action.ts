import { TodoActionTypes, Todo, TodoState } from "./types";
import { TodoList } from "../TodoList/types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../store";

export type AppThunk = ThunkAction<
  void,
  ApplicationState,
  null,
  Action<string>
>;

export const fetchTodoRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: TodoActionTypes.FETCH_CART_SUCCESS,
        payload: {}
      });
    } catch (e) {
      return dispatch({
        type: TodoActionTypes.FETCH_CART_ERROR
      });
    }
  };
};

export const addToCart: ActionCreator<ThunkAction<
  void,
  ApplicationState,
  TodoList,
  Action<string>
>> = item => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: TodoActionTypes.ADD_TO_CART,
        payload: item
      });
    } catch (e) {
      return dispatch({
        type: TodoActionTypes.ADD_TO_CART_FAILURE,
        payload: null
      });
    }
  };
};