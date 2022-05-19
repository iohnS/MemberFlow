import styled from "styled-components";
import Footer from "../components/layout/footer/Footer";
import Navigation from "../components/layout/navigation/Navigation";

type Props = {
  body: JSX.Element | string;
};

const DashboardTemplate = ({ body = "N/A" }: Props) => {
  return (
    <Wrapper>
      <Navigation />
      {body}
      {/* <Footer /> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  min-height: 100vh;
  max-width: 100vw;
  background: white;
  overflow: hidden;
`;

export default DashboardTemplate;
