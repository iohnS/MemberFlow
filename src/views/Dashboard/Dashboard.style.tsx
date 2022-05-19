import styled from "styled-components";
import {
  LargeScreen,
  MediumScreen,
  MobileScreen,
  ComponentGap,
  AppThemeColor,
  NavBarHeight,
} from "../../styles/global.style";

export const Content = styled.section`
  min-height: calc(100vh - ${NavBarHeight});
  padding: ${ComponentGap};
  display: flex;

  .side-to-side {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: ${ComponentGap};
    row-gap: ${ComponentGap};
  }

  .up-down-1 {
    display: flex;
    row-gap: ${ComponentGap};
    flex-direction: column;
  }

  .up-down-2 {
    display: flex;
    row-gap: ${ComponentGap};
    flex-direction: column;
  }

  .container {
    margin: 0;
    padding: 0;
    min-width: 100%;

    .row {
      width: 100%;
      height: 100%;
      margin: 0;
      column-gap: ${ComponentGap};
    }

    .col {
      display: flex;
      padding: 0;
      height: 100%;
    }
  }

  .card {
    border: none;
    border-radius: 0.75rem;
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
  }

  @media (max-width: ${MediumScreen}) {
    .side-to-side {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const IntroductionCard = styled.div`
  .card {
    background: ${AppThemeColor};
    transition: all ease 200ms;
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);

    .card-body {
      padding: 2rem 2rem 2rem 2rem;
      display: flex;
      flex-direction: rows;

      .h5 {
        color: white;
        font-size: 2.4rem;
      }

      p {
        color: white;
        font-size: 1.1rem;
      }

      .text-container {
        display: flex;
        flex-direction: column;

        .button {
          display: grid;
          justify-content: left;
          align-content: center;
        }
      } 

      .img-container{
        display:flex;
        justify-content:flex-end;
        .img {
          height: 100%;
          width: 100%;
        }
      }
      }
    }
  }

  @media (max-width: ${LargeScreen}) {
    img {
      display: none;
      visibility: hidden;
    }

    .card-body {
      padding: 2rem 4rem 2rem 2rem;
      display: flex;
    }
  }
`;

export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: ${ComponentGap};

  .h5 {
    font-size: 1.5rem;
    transition: all ease-in 100ms;
  }

  @media (min-width: ${LargeScreen}) {
    display: grid;
    grid-template-columns: repeat(4, 175px);
    column-gap: ${ComponentGap};
  }

  @media (max-width: ${MobileScreen}) {
    justify-content: space-evenly;
  }
`;

export const Title = styled.div`
  display: grid;
  h6 {
    opacity: 0.6 !important;
  }
`;

export const GraphCard = styled.div`
  .card {
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
    height: auto;
    width: 100%;
  }

  .card-body {
    padding: 1.5rem;
    height: auto;
    width: 100%;
  }

  .graphStyle {
    height: auto !important;
    width: 100% !important;
    max-height: 100% !important;
    max-width: 100% !important;
  }
`;

export const AdCard = styled.div`
  height: 100%;
  .card {
    transition: all ease 200ms;
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
  }

  .card:hover {
    transform: scale(1.01);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  .h5 {
    padding-left: 1rem;
    font-size: 22px;
  }

  .card-body {
    padding: 0;
    height: 100%;
    border-radius: 30px;
    border-radius: 0.75rem;
    background: linear-gradient(130.44deg, ${AppThemeColor} 0%, #a89de8 100%);
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
