import styled from "styled-components";
import Footer from "../components/layout/Footer/Footer";
import Navigation from "../components/layout/navigation/Navigation";

type Props = {
  body: JSX.Element | string;
};

const DashboardTemplate = ({ body = "N/A" }: Props) => {
  return (
    <Wrapper>
      <Navigation />
      {body}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 0.2fr 1fr 0.2fr
  height: 100vh;
`;

export default DashboardTemplate;
