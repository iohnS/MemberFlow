import { Card } from "react-bootstrap";
import styled from "styled-components";
import { BorderRadius, LightGray } from "../../../../styles/global.style";
import FlowIcon from "../../flowicon/FlowIcon";

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
          <FlowIcon color={props.color} icon={props.icon} />
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
    height: 13rem;
    border-radius: ${BorderRadius};
    border: none;
    transition: all ease 200ms;
  }

  .card:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.1);
  }

  .card-body {
    background-color: ${LightGray};
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 0.45fr 0.5fr;
    grid-auto-rows: minmax(100px, auto);
  }

  .card-subtitle {
    font-size: 15px !important;
    font-weight: 400;
    line-height: 1.47059;
    letter-spacing: -0.022em;
    text-align: center;
  }
`;

export default InfoCard;
