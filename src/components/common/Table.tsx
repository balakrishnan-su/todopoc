import React, { useEffect } from "react";
import styled from "styled-components";
import { TodoList } from "../../redux/TodoList/types";

interface ColumnProps {
    type?: boolean;
    data?: string;
  }
const ColumnType: React.FC<ColumnProps> = ({ type, data})  => {
    return (
        <div>sss</div>
    )
}
interface Columns{
    label: string;
    accessor: string;
}

interface PropsFromState {
  loading?: boolean;
  data: TodoList[];
  errors?: string;
  columns: Columns[];
}

type AllProps = PropsFromState

const Table: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  columns,
}) => {
  useEffect(() => {
      console.log("table");
  }, []);

  return (
    <Container>
        <TableWrapper>
            <Thead>
                <Tr>
                    {columns.map((Cell: any) => <Th>{Cell.accessor}</Th>) }
                </Tr>
            </Thead>
            <Tbody>
                {data.map((row: TodoList) => {
                    return <Tr>{columns.map(column => <Td>{row[column.label as keyof TodoList]}</Td>)}</Tr>
                })}
            </Tbody>
        </TableWrapper>
    </Container>
  );
};

const Container = styled.div`
    width: 100%;
    max-width: 1170px;
    margin: auto;
`;
const TableWrapper = styled.table`
    display: table;
    width: 100%;
    max-width: 1170px;
    margin: auto;
    border-collapse: collapse;
`;
const Thead = styled.thead`
    text-align:left;
`;
const Tbody = styled.tbody`
  
`;
const Th = styled.th`
    font-size: 14px;
    color: #333;
    line-height: 1.4;
    text-transform: uppercase;
    padding: 8px 0;
`;
const Tr = styled.tr`
    text-align:left;
    border-bottom: 1px solid #f2f2f2;
`;
const Td = styled.td`
    font-size: 16px;
    line-height: 1.5;
    color: #666;
    padding: 8px 0;
`;

export default Table;