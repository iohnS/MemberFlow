import styled from "styled-components";
import Navbar from "../components/layout/navigation/navbar/Navbar";
import { BackgroundColor } from "../styles/global.style";

type Props = {
  body: JSX.Element | string;
};

const DashboardTemplate = ({ body = "N/A" }: Props) => {
  return (
    <Wrapper>
      <Navbar />
      {body}
      {/* <Footer /> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${BackgroundColor} !important;
  overflow: hidden;
`;

export default DashboardTemplate;
