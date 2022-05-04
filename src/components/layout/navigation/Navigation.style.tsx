import styled from "styled-components";

/* .navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.9);
}
 */
export const NavigationStyle = styled.section`
  .bg-light {
    background-color: #fafafa !important;
    --bs-bg-opacity: 0 !important;
    border-bottom: none;
  }

  .navbar-brand {
    font-size: 1.5em !important;
    font-weight: 700 !important;
    background: linear-gradient(to right, #27b9bd, #3de2e8) !important;
    color: transparent !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;

    padding-left: 2rem;
  }

  .nav-link:hover {
    text-decoration-line: underline;
  }
`;
