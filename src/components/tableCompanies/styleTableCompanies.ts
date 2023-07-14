import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  color: #302727;
`;

export const TableHead = styled.thead`
  background-color: #5e5b5b;
  color: #ffffff;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: white;
  }
`;

export const TableCell = styled.td<{ status: number }>`
  background-color: ${(props) => (props.status === 1 ? "#148dff" : "#f85353")};
  padding: 10px;
  color: #ffffff;

  @media (max-width: 1000px) {
    display: grid;
    gap: 10px;
    grid-template-columns: 18ch auto;

    &::before {
      content: attr(data-th) ": ";
      font-weight: bold;
      font-size: 17px;
      color: #ffffff;
    }
  }
`;
