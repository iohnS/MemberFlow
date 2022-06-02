import styled from "styled-components";
import { ComponentGap, NavBarHeight } from "../../styles/global.style";

export const Content = styled.div`
  min-height: calc(100vh - ${NavBarHeight});
  padding: ${ComponentGap};
  background:white;
`;

export const CardMenu = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;


  .card {
    width: 40rem;
    border: none;
  }

  .row {
    padding: 1rem;

    .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap:0.75rem;

      .icon {
        font-size: 2rem;
      }
    }
  }
`;
