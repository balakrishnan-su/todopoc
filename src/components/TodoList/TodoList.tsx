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
  isModalOpen: boolean;
}

interface propsFromDispatch {
  fetchRequest: () => any;
  openModal: (isModalOpen: boolean) => any;
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


const HomePage: React.FC<AllProps> = ({
  data,
  isModalOpen,
  fetchRequest,
  openModal
}) => {
  function setIsOpen() {
    openModal(true);
  }

  useEffect(() => {
   fetchRequest();
  }, []);

  return (
    <Container>
        <div>
          <a href="#" onClick={setIsOpen}>Add Todo</a>
        </div>
        <br/>
        <Modal isModalOpen={isModalOpen}/>
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
    },
    openModal: (isModalOpen: boolean) => {
      dispatch(openModal(isModalOpen));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);