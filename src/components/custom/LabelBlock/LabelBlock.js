import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlockSection = styled.div`
  margin: 0.5rem;
  background-color: ${props => props.backgroundColorBlock};
  border-radius: 0.325rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BlockHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.325rem 0.325rem 0 0;
  background-color: ${props => props.backgroundColorTitle};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  position: relative;
  padding: 0 2rem;

  &:before {
    content: "";
    background-color: ${props => props.backgroundColorTitle};
    position: absolute;
    bottom: -0.5em;
    height: 0.5em;
    width: 110%;
    left: 0;
  }
`;

const BlockTitle = styled.span`
  font-family: ${props => props.titleProps.font};
  font-weight: ${props => props.titleProps.weight};
  font-size: ${props => props.titleProps.size};
  color: ${props => props.titleProps.color};
  background-color: ${props => props.titleProps.backgroundColorTitle};
  padding-top: 1rem;
  text-transform: capitalize;
`;

const BlockIcon = styled.span`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColorIcon};
  width: 1.15rem;
  height: 1.25rem;
  margin-right: 1rem;
  padding: 0.9rem;
  border-radius: 100%;
`;

const BlockContent = styled.div`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  background-color: ${props => props.backgroundColorContent};
  padding: 0.5rem 1rem;
`;

const LabelBlock = ({
  title,
  icon,
  backgroundColorBlock = "#fff",
  backgroundColorIcon = "#fff",
  backgroundColorTitle = "#fff",
  backgroundColorContent = "#fff",
  font,
  weight = 700,
  size = "1.25rem",
  color,
  ...props
}) => {
  const titleProps = { font, weight, size, color, backgroundColorTitle };

  return (
    <BlockSection backgroundColorBlock={backgroundColorBlock}>
      <BlockHeader backgroundColorTitle={backgroundColorTitle}>
        {icon && (
          <BlockIcon backgroundColorIcon={backgroundColorIcon}>
            <FontAwesomeIcon icon={icon} color={color} />
          </BlockIcon>
        )}
        <BlockTitle titleProps={titleProps}>{title}</BlockTitle>
      </BlockHeader>
      <BlockContent backgroundColorContent={backgroundColorContent}>
        {props.children}
      </BlockContent>
    </BlockSection>
  );
};

LabelBlock.propTypes = {
  backgroundColorBlock: PropTypes.string,
  backgroundColorIcon: PropTypes.string,
  backgroundColorTitle: PropTypes.string,
  backgroundColorContent: PropTypes.string,
  color: PropTypes.string.isRequired,
  font: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  weight: PropTypes.number
};

export default LabelBlock;
