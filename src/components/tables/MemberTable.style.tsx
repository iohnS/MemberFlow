import styled from "styled-components";

export const TableStyle = styled.section``;

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
