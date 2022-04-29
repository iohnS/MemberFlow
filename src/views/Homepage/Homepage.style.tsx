import styled from "styled-components";
import myImage from "../../assets/homepage_img.jpg";

export const Background = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const MiddleSection = styled.div`
  display: grid;
  row-gap: 36px;
  max-width: 800px;
`;

export const Title = styled.div`
  font-size: 70px;
  font-weight: 700;
  line-height: 1.25;
  background: linear-gradient(to right, #27b9bd, #a7d4db);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 1.55;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Login = styled.div`
  max-width: 75%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Submit = styled.div`
  margin-top: 2rem;
  display: flex;
  column-gap: 1rem;
`;

export const Image = styled.section`
  background-image: url(${myImage});
  max-width: 100%;
  max-height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    display: none;
  }
`;
