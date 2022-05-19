import { Card } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  title: string;
  subtitle?: string;
  text?: string;
  icon: JSX.Element;
  color?: string;
}

const InfoCard = (props: Props) => {
  return (
    <CardStyle>
      <Card>
        <Card.Body>
          <IconContainer>
            <IconBackground style={{ background: props.color }}>
              {props.icon}
            </IconBackground>
          </IconContainer>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>{props.subtitle}</Card.Subtitle>
        </Card.Body>
      </Card>
    </CardStyle>
  );
};

export const CardStyle = styled.div`
  .card {
    min-width: 10rem;
    height: 12rem;
    border-radius: 0.75rem;
    border: none;
    transition: all ease 200ms;
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
  }
  
  .card:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
    0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
    0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }
  
  .card-body {
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 0.45fr 0.5fr;
    grid-auto-rows: minmax(100px, auto);
  }

  .card-subtitle {
    opacity: 0.9 !important;
    text-align: center;
  }
`;

export const IconContainer = styled.div`
  font-size: 1.6rem;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const IconBackground = styled.div`
  color: #ffffff;
  display: grid;
  justify-items: center;
  align-items: center;
  opacity: 0.7;
  padding: 0.65rem;
  border-radius: 1rem;
`;

export default InfoCard;
