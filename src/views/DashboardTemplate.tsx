import styled from "styled-components";
import Footer from "../components/layout/footer/Footer";
import Navigation from "../components/layout/navigation/Navigation";

type Props = {
  body: JSX.Element | string;
};

const DashboardTemplate = ({ body = "N/A" }: Props) => {
  return (
    <Wrapper>
      <div>
        <Navigation />
        {body}
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  height: 100vh;
  background: white;
`;

export default DashboardTemplate;
