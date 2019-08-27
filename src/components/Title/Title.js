import React from "react";
import PropTypes from "proptypes";
import styled from "styled-components";

const Title1 = styled.h1`
  font-size: 3rem;
  color: ${props => props.color};
  font-family: ${props => props.font};
  font-weight: ${props => props.weight};
`;

const Title2 = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.color};
  font-family: ${props => props.font};
  font-weight: ${props => props.weight};
`;

const Title3 = styled.h3`
  font-size: 2.25rem;
  color: ${props => props.color};
  font-family: ${props => props.font};
  font-weight: ${props => props.weight};
`;

const Title4 = styled.h4`
  font-size: 2rem;
  color: ${props => props.color};
  font-family: ${props => props.font};
  font-weight: ${props => props.weight};
`;

const Title5 = styled.h5`
  font-size: 1.75rem;
  color: ${props => props.color};
  font-family: ${props => props.font};
  font-weight: ${props => props.weight};
`;

const Title6 = styled.h6`
  font-size: 1.5rem;
  color: ${props => props.color};
  font-family: ${props => props.font};
  font-weight: ${props => props.weight};
`;

const Title = ({ size, value, font, color, weight }) => {
  return (
    <>
      {size === 1 && (
        <Title1 font={font} color={color} weight={weight}>
          {value}
        </Title1>
      )}
      {size === 2 && (
        <Title2 font={font} color={color} weight={weight}>
          {value}
        </Title2>
      )}
      {size === 3 && (
        <Title3 font={font} color={color} weight={weight}>
          {value}
        </Title3>
      )}
      {size === 4 && (
        <Title4 font={font} color={color} weight={weight}>
          {value}
        </Title4>
      )}
      {size === 5 && (
        <Title5 font={font} color={color} weight={weight}>
          {value}
        </Title5>
      )}
      {size === 6 && (
        <Title6 font={font} color={color} weight={weight}>
          {value}
        </Title6>
      )}
    </>
  );
};

Title.defaultProps = {
  font: "sans-serif",
  color: "#111",
  size: 2,
  weight: 700
};

Title.propTypes = {
  size: PropTypes.number,
  weight: PropTypes.number,
  font: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string.isRequired
};

export default Title;
