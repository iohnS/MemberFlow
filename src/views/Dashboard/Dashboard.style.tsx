import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  column-gap: 2rem;
  flex-wrap: wrap;

  .h5 {
    font-size: 28px !important;
  }

  .card {
    width: 14rem;
    height: 14rem;
    border-radius: 2rem;
  }

  .card-body {
    padding: 2.5rem 1rem 1rem 1rem;
  }

  .card-subtitle {
    opacity: 0.5 !important;
  }
`;

export const Content = styled.section`
  display: grid;
  padding: 2rem;
  row-gap: 1rem;
`;

export const Title = styled.section`
  display: grid;
  h6 {
    opacity: 0.6 !important;
  }
`;
