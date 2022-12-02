import styled from "styled-components";
import { BackgroundColor } from "../../../../styles/global.style";

export const NavigationStyle = styled.section`
  .bg-light {
    --bs-bg-opacity: 0 !important;
    border-bottom: none;
    background-color: ${BackgroundColor} !important;
  }

  .navbar-brand {
    font-size: 1.25rem !important;
    font-weight: 700 !important;
    background: #3de2e8 !important;
    color: transparent !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    padding-left: 1rem;
  }

  .nav-link {
    font-size: 14px;
  }

  .nav-link:hover {
    text-decoration-line: underline;
  }
`;

/*   color: white;
  border: 1px solid #fff;
  ::placeholder { 
      color: white;
      opacity: 1;
    } 
    */
