import styled from "styled-components";
import { ComponentGap, NavBarHeight } from "../../styles/global.style";

export const Content = styled.div`
  min-height: calc(100vh - ${NavBarHeight});
  padding: ${ComponentGap};
  background: white;
  display: grid;
  justify-content: center;
`;

export const MenuWrapper = styled.div`
  width: 50rem;

  .h4 {
    line-height: 1.16667;
    font-weight: 600;
    letter-spacing: 0.009em;
  }

  .row {
    .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 0.75rem;

      .icon {
        font-size: 2rem;
      }
    }
  }

  .form-label {
    font-size: 14px;
    font-weight: 500;
  }

  .form-control {
    font-size: 14px;
  }
`;
