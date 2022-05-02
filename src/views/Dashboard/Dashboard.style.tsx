import styled from "styled-components";

export const Content = styled.section`
  display: grid;
  padding: 2rem;
  row-gap: 2rem;
  .card {
    border: none;
    border-radius: 0.75rem;
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
  }
`;

export const CardSection = styled.div`
  display: flex;
  justify-content: space-between;

  .h5 {
    font-size: 28px !important;
  }

  .card {
    width: 13rem;
    height: 14rem;
    border-radius: 0.75rem;
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
    border: none;
  }

  .card-body {
    padding: 1rem 1rem 1rem 1rem;
  }

  .card-subtitle {
    opacity: 0.5 !important;
  }
`;

export const IntroductionCard = styled.div`
  .card {
    background: #3de2e8;
  }

  .card-body {
    padding: 3rem 2rem 1rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .h5 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const FirstColumn = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`;

export const Title = styled.div`
  display: grid;
  h6 {
    opacity: 0.6 !important;
  }
`;

export const SecondColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`;
