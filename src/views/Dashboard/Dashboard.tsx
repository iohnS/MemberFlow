import { Wrapper } from "../../styles/global.style";
import Footer from "../../components/layout/footer/Footer";
import Navigation from "../../components/layout/navigation/Navigation";
//import { Content } from "./Dashboard.style";
import styled from "styled-components";

type Props = {};

export default function Dashboard(props: Props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Navigation />
        <Content>
            <h2> East Asia Student Association </h2>

        </Content>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}

export const ContentWrapper = styled.section`
  padding: 0 1rem 0 1rem;
`;

export const Content = styled.section`
    display:grid;
    padding: 2rem;
`;
