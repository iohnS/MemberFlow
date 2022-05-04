import { Link } from "react-router-dom";
import styled from "styled-components";
import { MobileScreen } from "../../../styles/global.style";

export default function Footer() {
  return (
    <FooterStyle>
      If you have any questions please contact:
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = "mailto:patriktao@gmail.com";
          e.preventDefault();
        }}
      >
        patriktao@gmail.com
      </Link>
    </FooterStyle>
  );
}

/* #fafafa */
const FooterStyle = styled.section`
  background: white;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: ${MobileScreen}) {
    display: none;
    visibility: hidden;
  }
`;
