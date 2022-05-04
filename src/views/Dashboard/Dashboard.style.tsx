import styled from "styled-components";
import {
  LargeScreen,
  MediumScreen,
  MobileScreen,
  ComponentGap,
  AppThemeColor,
} from "../../styles/global.style";

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  padding: 1.5rem;
  column-gap: ${ComponentGap};
  row-gap: ${ComponentGap};

  @media (max-width: ${MobileScreen}) {
    display: flex;
    flex-direction: column;
  }

  .card {
    border: none;
    border-radius: 0.75rem;
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
  }
`;

export const FirstColumn = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: ${ComponentGap};

  .h5 {
    font-size: 40px;
    font-weight: 700;
  }
`;

export const IntroductionCard = styled.div`
  .card {
    background: ${AppThemeColor};
    transition: all ease 200ms;
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
  }

  .h5 {
    color: white;
  }

  p {
    color: white;
  }

  .card-body {
    padding: 3rem 4rem 2rem 2rem;
    display: grid;
    grid-template-columns: 1fr 0.7fr;
  }

  @media (max-width: ${MobileScreen}) {
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
    font-size: 1.5rem !important;
    transition: all ease-in 100ms;
  }

  .card {
    width: 10rem;
    height: 13rem;
    border-radius: 0.75rem;
    border: none;
    transition: all ease 200ms;
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
  }

  .card:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  .card-body {
    padding: 1rem 1rem 1rem 1rem;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 0.45fr 0.5fr;
  }

  .card-subtitle {
    opacity: 0.9 !important;
    text-align: center;
  }

  @media (max-width: ${LargeScreen}) {
    .card {
      width: 8rem;
    }
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

export const IconContainer = styled.div`
  font-size: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const IconBackground = styled.div`
  color: #ffffff;
  display: grid;
  justify-items: center;
  align-items: center;
  opacity: 0.7;
  padding: 0.7rem;
  border-radius: 1rem;
`;

export const SecondColumn = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: ${ComponentGap};

  .card {
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  .h5 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const GraphCard = styled.div`
  .card {
    display: grid;
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
  }

  .card-body {
    padding: 1.5rem;
  }
`;

export const AdCard = styled.div`
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
    border-radius: 30px;
    border-radius: 0.75rem;
    background: linear-gradient(130.44deg, ${AppThemeColor} 0%, #a89de8 100%);
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
