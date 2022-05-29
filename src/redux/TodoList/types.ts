export interface TodoList {
    id: number;
    user_id: string;
    title: string;
    due_on: string;
    status: string;
  }
  
  export enum InventoryActionTypes {
    FETCH_REQUEST = "@@inventory/FETCH_REQUEST",
    FETCH_SUCCESS = "@@inventory/FETCH_SUCCESS",
    FETCH_ERROR = "@@inventory/FETCH_ERROR",
    DELETE_TOTO = "@@inventory/DELETE_TOTO",
    DELETE_TOTO_ERROR = "@@inventory/DELETE_TOTO_ERROR",
    TOGGLE_MODAL = "@@inventory/TOGGLE_MODAL"
  }
  
  export interface TodoListState {
    readonly loading: boolean;
    readonly data: TodoList[];
    readonly errors?: string;
    readonly isModalOpen?: boolean;
  }