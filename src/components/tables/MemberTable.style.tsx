import styled from "styled-components";

export const TableStyle = styled.section`
  .rs-table-body-row-wrapper {
    font-size: 14px;
  }

  .rs-table-cell-content {
    display: flex;
    align-items: center;
  }

  .rs-table-row-header {
    font-size: 14px;
  }
`;

export const Menu = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  flex-direction: row
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;

  .form-control {
    width: 500px;
  }

  a {
    color: #fff !important;
    text-decoration: none !important;
  }

  div {
    display: flex;
    column-gap: 0.5rem;
    justify-content: flex-end;
  }
`;
