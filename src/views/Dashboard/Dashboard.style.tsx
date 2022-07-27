import styled from "styled-components";
import {
  LargeScreen,
  MediumScreen,
  MobileScreen,
  ComponentGap,
  AppThemeColor,
  NavBarHeight,
  BorderRadius,
  LightGray,
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
    flex-direction: column;
    row-gap: ${ComponentGap};
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
    border-radius: ${BorderRadius};
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
    background: ${LightGray};
    transition: all ease 200ms;
    height: 100%;

    .card-body {
      padding: 2rem 2rem 2rem 2rem;
      display: grid;
      grid-template-columns: 1fr 0.4fr;

      .h5 {
        font-size: 2.4rem;
        line-height: 1.16667;
        font-weight: 600;
        letter-spacing: 0.009em;
      }

      p {
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
    }
    .img-container {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      bottom: 0;
      right: 25px;

      .img {
        height: auto;
        width: 50%;
        position: relatve;
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
      grid-template-columns: none;
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
    background-color: ${LightGray};
    height: auto;
    width: 100%;

    .card-body {
      padding: 1.5rem;
      height: auto;
      width: 100%;
    }

    .card-title {
      font-size: 24px;
      line-height: 1.16667;
      font-weight: 600;
      letter-spacing: 0.009em;
    }
  }

  .graphStyle {
    height: auto !important;
    width: 100% !important;
    max-height: 100% !important;
    max-width: 100% !important;
    font-size: 16px !important;
  }
`;

export const AdCard = styled.div`
  height: 100%;
  .card {
    height: 6rem;
    transition: all ease 200ms;
  }

  .card:hover {
    transform: scale(1.01);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12);
  }

  .h5 {
    padding-left: 1rem;
    font-size: 22px;
  }

  .card-body {
    padding: 0;
    height: 100%;
    border-radius: ${BorderRadius};
    background: ${AppThemeColor};
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
