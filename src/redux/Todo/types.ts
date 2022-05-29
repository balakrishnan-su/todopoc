import { TodoList } from "../TodoList/types";

export interface Todo {
  id: number;
  items: TodoList[];
}

export enum TodoActionTypes {
  ADD_TO_CART = "@@cart/ADD_TO_CART",
  ADD_TO_CART_FAILURE = "@@cart/ADD_TO_CART_FAILURE",
  REMOVE_FROM_CART = "@@cart/REMOVE_FROM_CART",
  FETCH_CART_REQUEST = "@@cart/FETCH_CART_REQUEST",
  FETCH_CART_SUCCESS = "@@cart/FETCH_CART_SUCCESS",
  FETCH_CART_ERROR = "@@cart/FETCH_CART_ERROR"
}

export interface TodoState {
  readonly loading: boolean;
  readonly data: Todo;
  readonly errors?: string;
}