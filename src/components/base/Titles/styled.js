import styled, { css } from "styled-components";
import { breakpoint } from "../../../config/mixins/breakpoints";

const titleStyle = css`
  color: red;
`;

const titleStyleTouch = css`
  color: green;
`;

export const test = key => ({ theme }) => {
  console.log(theme, key);
};

export const H1 = styled.h1`
  ${test("xl")};
  ${titleStyle}
  @media(max-width: ${props => breakpoint("md", props.theme)}) {
    ${titleStyleTouch}
  }
`;
