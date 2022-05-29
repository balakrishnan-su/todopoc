import { combineReducers } from "redux";

import { TodoReducer } from "./Todo/reducer";
import { TodoState } from "./Todo/types";

import { TodoListReducer } from "./TodoList/reducer";
import { TodoListState } from "./TodoList/types";


export interface ApplicationState {
  todoList: TodoListState;
  todo: TodoState;
}

export const createRootReducer = () =>
  combineReducers({
    todoList: TodoListReducer,
    todo: TodoReducer,
  });