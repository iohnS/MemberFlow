import styled from "styled-components";

export const TableStyle = styled.div`
  display: grid;

  td {
    font-size: 14px;
  }

  th {
    font-size: 14px;

    .number-filter {
      display: grid;
      grid-template-columns: 0.25fr 1fr;
    }

    .date-filter {
      display: flex;
      flex-wrap: wrap;
    }

    .filter-label {
      width: 100%;
    }

    .date-filter-comparator {
      width: 35px;
    }
  }

  .sortable span {
    display: block;
    float: right;
  }

  .cellWeight600 {
    font-weight: 700;
  }

  .form-control {
    font-size: 14px;
  }

  .filter-label .sr-only {
    display: none;
  }

  .filter .sr-only {
    display: none;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 0.5rem;

    h4 {
      margin: 0;
    }

    .searchbar {
      display: flex;
      align-items: center;
      column-gap: 2rem;
    }

    .buttons {
      display: flex;
      column-gap: 0.5rem;

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
