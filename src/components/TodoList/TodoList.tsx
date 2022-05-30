import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import { ApplicationState } from "../../redux/store";
import { TodoList } from "../../redux/TodoList/types";
import { fetchRequest } from "../../redux/TodoList/action";
import Table from "../common/Table";
import Modal from "../common/Modal";


const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
`; 

interface PropsFromState {
  data: TodoList[];
}

interface propsFromDispatch {
  fetchRequest: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const columns = [
{
    label : "id",
    accessor: "ID"
},
{
    label : "user_id",
    accessor: "User Id"
},
{
    label : "title",
    accessor: "Title"
},
{
    label : "due_on",
    accessor: "Due Date"
},
{
    label : "status",
    accessor: "status"
},
{
  label : "Action",
  accessor: "Action"
}];


const TodoListComponent: React.FC<AllProps> = ({
  data,
  fetchRequest
}) => {
  
  useEffect(() => {
   fetchRequest();
  }, []);

  return (
    <Container>
        <Modal isModalOpen={false}/>
        <Table data={data} columns={columns}/>
    </Container>
  );
};

const mapStateToProps = ({ todoList }: ApplicationState) => ({
  loading: todoList.loading,
  errors: todoList.errors,
  data: todoList.data,
  isModalOpen: todoList.isModalOpen
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);