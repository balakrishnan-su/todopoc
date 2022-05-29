import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ApplicationState } from "../../redux/store";
import { Todo } from "../../redux/Todo/types";
import { updateTodo } from "../../redux/TodoList/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
`;
const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
`;

interface PropsFromState {
  loading: boolean;
  data: Todo[];
  errors?: string;
}

interface propsFromDispatch {
    updateTodo: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const TodoListForm: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  updateTodo
}) => {
  
  return (
    <Container>
        <div>
            <InputGroup>
                <Label>
                    Title
                </Label>
                <Input type="text" />
            </InputGroup>
            <InputGroup>
                <Label>
                    Title
                </Label>
                <Input type="text" />
            </InputGroup>
            <div>
                <button onChange={updateTodo}>Save</button>
            </div>
        </div>
    </Container>
  );
};

const mapStateToProps = ({ todo }: ApplicationState) => ({
  loading: todo.loading,
  errors: todo.errors,
  data: []
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    updateTodo: () => {
        dispatch(updateTodo);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListForm);