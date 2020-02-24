import styled from "styled-components";
import { color } from "../../../config/theme/themeHelpers";

const Button = styled.button`
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
  color: ${color("grey", "900")};
  background-color: ${color("grey", "300")};
  border-radius: 3px;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${color("grey", "400")};
  }
`;

export default Button;
