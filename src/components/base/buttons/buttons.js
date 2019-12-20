import styled from "styled-components";

export const Button = styled.button`
  background: white;
  color: ${props => (props.color ? props.color : "black")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-color: ${props => (props.color ? props.color : "black")};
  border: 2px solid;
  border-radius: 3px;
`;

export const ButtonFull = styled(Button)`
  background: ${props => (props.color ? props.color : "white")};
  color: ${props => (props.color ? "white" : "black")};
  border: none
`;

export default { ButtonFull, Button };
