import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import theme from "../../config/theme";
import colorsLighten from "../../helpers/colors";

const LinkCustom = styled(Link)`
  cursor: pointer;
  background-color: ${props => props.backgroundColor};
  a {
    text-decoration: none;
    font-family: ${props => props.font};
    font-weight: ${props => props.weight};
    font-size: ${props => props.fontSize};
    color: ${props => props.textColor};
  }
  color: ${props => props.textColor};
  font-weight: ${props => props.weight};
  font-size: ${props => props.fontSize};
  padding: 0.75rem 1.5rem;
  border: solid;
  border-width: ${props => props.borderWidth};
  border-color: ${props => props.borderColor};
  border-radius: ${props => props.borderRadius};
  transition: ${props =>
    props.withAnimation && "background-color 200ms, color 150ms 50ms"};

  &:hover {
    background-color: ${props => props.backgroundHoverColor};
    a {
      color: ${props => props.textHoverColor};
    }
    color: ${props => props.textHoverColor};
  }
`;

const LinkButton = ({
  backgroundColor = theme.colors.white,
  backgroundHoverColor = colorsLighten.primary(-0.45),
  borderColor = backgroundHoverColor,
  borderRadius = "0.5rem",
  borderWidth = "0.2rem",
  textColor = colorsLighten.link(-0.25),
  textHoverColor = colorsLighten.link(0.15),
  font = theme.fonts.defaultFont,
  fontSize = "1rem",
  weight = "normal",
  withAnimation = true,
  isTargetBlank = false,
  link,
  value,
  icon
}) => {
  return (
    <LinkCustom
      to={link}
      target={isTargetBlank ? "_blank" : ""}
      backgroundColor={backgroundColor}
      backgroundHoverColor={backgroundHoverColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      textColor={textColor}
      textHoverColor={textHoverColor}
      font={font}
      fontSize={fontSize}
      weight={weight}
      withAnimation={withAnimation}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      <span>{value}</span>
    </LinkCustom>
  );
};

LinkButton.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundHoverColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  borderWidth: PropTypes.string,
  font: PropTypes.string,
  fontSize: PropTypes.string,
  icon: PropTypes.object,
  isTargetBlank: PropTypes.bool,
  link: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  textHoverColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  weight: PropTypes.string,
  withAnimation: PropTypes.bool
};

export default LinkButton;
