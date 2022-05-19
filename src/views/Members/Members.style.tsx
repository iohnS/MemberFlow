import styled from "styled-components";
import { ComponentGap } from "../../styles/global.style";
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
    border-radius: 0.75rem;
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
  }

  .ads {
    height: 150px !important;
  }
`;

export const OptionStyle = styled.div`
  .row {
    row-gap: ${ComponentGap};
  }

  .col {
    width: 100%;
  }

  .button {
    width: 100%;
    display:flex;
    justify-content: center;
    align-items:center;
  }

  .container {
    padding: 0 !important;
  }
`;

export const TableStyle = styled.div`
  display: grid;


  .menu {
    h4{
      margin: 0;
    }

    display: flex;
    align-items:center;
  }
`;