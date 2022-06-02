import styled from "styled-components";
import { BorderRadius, ComponentGap } from "../../styles/global.style";
import { NavBarHeight } from "../../styles/global.style";

export const Content = styled.section`
  padding: ${ComponentGap};
  min-height: calc(100vh - ${NavBarHeight});
  display: flex;
  flex-direction: column;
  row-gap: ${ComponentGap};

  .row {
    row-gap: ${ComponentGap};
  }

  .card {
    border: none;
    border-radius: ${BorderRadius};
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0);
  }

  .card-body {
    padding: 1.5rem;
  }

  .ads {
    height: 150px !important;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;

export const TableStyle = styled.div`
  display: grid;

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
