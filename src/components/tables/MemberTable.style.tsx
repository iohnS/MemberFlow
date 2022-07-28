import styled from "styled-components";

export const TableStyle = styled.div`
  display: grid;

  td { 
    font-size: 14px;
  }
  
  th{
    font-size: 14px;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      margin: 0;
    }

    .searchbar {
      display: flex;
    }

    .buttons {
      display: flex;
      column-gap: 1rem;

      .button {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }
    }
  }
`;

export const Cell = styled.div`
  display: grid;
  justify-content: start;
`;

export const Yes = styled.div`
  color: white;
  border-radius: 4px;
  background: #5cb85c;
  font-weight: 600;
  font-size: 14px;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;

export const No = styled.div`
  display: flex;
  color: white;
  border-radius: 4px;
  background: #d9534f;
  font-weight: 600;
  font-size: 14px;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;
