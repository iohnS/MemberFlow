import styled from "styled-components";
import { BorderRadius, ComponentGap } from "../../styles/global.style";
import { NavBarHeight } from "../../styles/global.style";

export const Content = styled.section`
  min-height: calc(100vh - ${NavBarHeight});
  display: grid;
  padding-left: ${ComponentGap}; 
  padding-right: ${ComponentGap}; 
  padding-top: ${ComponentGap}; 


  .card {
    border: none;
    border-radius: ${BorderRadius};
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0);
  }

  .card-body {
    padding: 1.5rem;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;
