import styled from "styled-components";

interface Props {
  icon: JSX.Element;
  color?: string;
}

const FlowIcon = (props: Props) => {
  return (
    <IconContainer>
      <IconBackground style={{ background: props.color }}>
        {props.icon}
      </IconBackground>
    </IconContainer>
  );
};

const IconContainer = styled.div`
  font-size: 1.6rem;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const IconBackground = styled.div`
  color: #ffffff;
  display: grid;
  justify-items: center;
  align-items: center;
  opacity: 0.7;
  padding: 0.65rem;
  border-radius: 1rem;
`;

export default FlowIcon;
