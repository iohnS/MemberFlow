import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterSection>
      <div>
        If you have any questions please contact:{" "}
        <Link
          to="#"
          onClick={(e) => {
            window.location.href = "mailto:patriktao@gmail.com";
            e.preventDefault();
          }}
        >
          patriktao@gmail.com
        </Link>
      </div>
    </FooterSection>
  );
}

export const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;
