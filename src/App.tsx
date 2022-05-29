import React from "react";
import { ThemeProvider } from "styled-components";
import customTheme from "./theme";
import { Provider } from "react-redux";
import { ApplicationState } from "./redux/store";
import { Store } from "redux";
import { useRoutes, BrowserRouter as Router,} from "react-router-dom";

import TodoList from "./components/TodoList/TodoList";
import TodoListForm from "./components/TodoListForm/TodoListForm";

interface MainProps {
  store: Store<ApplicationState>;
}

const App = () => {
    let routes = useRoutes([
      { path: "/", element: <TodoList /> },
      { path: "createTodo", element: <TodoListForm /> }
    ]);
    return routes;
};

const AppWrapper: React.FC<MainProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Router>
            <App />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default AppWrapper;