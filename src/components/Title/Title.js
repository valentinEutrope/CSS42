import React from "react";
import PropTypes from "proptypes";
import styled from "styled-components";

function titleSharedStyle(titleProps) {
  const { color, font, weight } = titleProps;
  return `
  color: ${color};
  font-family: ${font};
  font-weight: ${weight};
  `;
}

const Title1 = styled.h1`
  font-size: ${props => props.titleProps.size || "3rem"};
  ${props => titleSharedStyle(props.titleProps)}
`;

const Title2 = styled.h2`
  font-size: ${props => props.titleProps.size || "2.5rem"}
    ${props => titleSharedStyle(props.titleProps)};
`;

const Title3 = styled.h3`
  font-size: ${props => props.titleProps.size || "2.25rem"}
    ${props => titleSharedStyle(props.titleProps)};
`;

const Title4 = styled.h4`
  font-size: ${props => props.titleProps.size || "2rem"}
    ${props => titleSharedStyle(props.titleProps)};
`;

const Title5 = styled.h5`
  font-size: ${props => props.titleProps.size || "1.75rem"}
    ${props => titleSharedStyle(props.titleProps)};
`;

const Title6 = styled.h6`
  font-size: ${props => props.titleProps.size || "1.5rem"}
    ${props => titleSharedStyle(props.titleProps)};
`;

const Title = ({
  component = "h1",
  size,
  value,
  font = "sans-serif",
  color = "#111",
  weight = 700
}) => {
  const titleProps = { size, font, color, weight };
  return (
    <>
      {component === "h1" && <Title1 titleProps={titleProps}>{value}</Title1>}
      {component === "h2" && <Title2 titleProps={titleProps}>{value}</Title2>}
      {component === "h3" && <Title3 titleProps={titleProps}>{value}</Title3>}
      {component === "h4" && <Title4 titleProps={titleProps}>{value}</Title4>}
      {component === "h5" && <Title5 titleProps={titleProps}>{value}</Title5>}
      {component === "h6" && <Title6 titleProps={titleProps}>{value}</Title6>}
    </>
  );
};

Title.propTypes = {
  size: PropTypes.number,
  component: PropTypes.string,
  weight: PropTypes.number,
  font: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string.isRequired
};

export default Title;
