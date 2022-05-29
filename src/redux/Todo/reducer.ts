import { Reducer } from "redux";

import { TodoActionTypes, TodoState } from "./types";
export const initialState: TodoState = {
  data: {
    id: 0,
    items: []
  },
  errors: undefined,
  loading: false
};

const reducer: Reducer<TodoState> = (state = initialState, action) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_CART_REQUEST: {
      return { ...state, loading: true };
    }
    case TodoActionTypes.FETCH_CART_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case TodoActionTypes.FETCH_CART_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case TodoActionTypes.ADD_TO_CART: {
      return {
        errors: state.errors,
        loading: state.loading,
        data: {
          ...state.data,
          id: state.data.id,
          items: [...state.data.items, action.payload]
        }
      };
    }
    case TodoActionTypes.REMOVE_FROM_CART: {
      return {
        errors: state.errors,
        loading: state.loading,
        data: {
          ...state.data,
          id: state.data.id,
          items: state.data.items.filter(item => item !== action.payload.id)
        }
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as TodoReducer };