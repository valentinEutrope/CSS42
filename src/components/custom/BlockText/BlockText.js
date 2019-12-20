import React from "react";
import PropTypes from "proptypes";
import styled from "styled-components";
import Highlight from "react-highlight.js";

const Block = styled.div`
  padding: 1rem 2rem;
  margin: 0.5rem;
  border: ${props => (props.bordered ? "solid 3px" : "0")};
  border-color: ${props => props.borderColor};
  border-radius: ${props => props.borderRadius};
`;

const BlockTitle = styled.span`
  font-size: calc(${props => props.size} + 0.25rem);
  color: ${props => props.blockTitleColor || props.borderColor};
  font-family: ${props => props.font};
  font-weight: calc(${props => props.weight} + 200);
  text-align: center;
  display: block;
  padding-bottom: 1rem;
`;

const Subtitle = styled.span`
  color: ${props => props.subtitleColor};
  font-family: ${props => props.font};
  font-weight: calc(${props => props.weight} + 100);
  font-size: ${props => props.size};
  padding-top: 0.5rem;
`;

const Paragraph = styled.p`
  color: ${props => props.color};
  font-family: ${props => props.font};
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
`;

const BlockText = ({
  blocks,
  font = "sans-serif",
  color = "#111",
  weight = 500,
  size,
  bordered = true,
  borderColor = "#6ba3d6",
  borderRadius = ".5rem",
  blockTitle,
  blockTitleColor,
  subtitleColor
}) => {
  return (
    <Block
      size={size}
      font={font}
      color={color}
      weight={weight}
      bordered={bordered}
      borderColor={borderColor}
      borderRadius={borderRadius}
    >
      {blockTitle && (
        <BlockTitle
          size={size}
          font={font}
          borderColor={borderColor}
          weight={weight}
          blockTitleColor={blockTitleColor}
        >
          {blockTitle}
        </BlockTitle>
      )}
      {blocks.map((block, index) => (
        <div key={index}>
          <Subtitle
            size={size}
            font={font}
            subtitleColor={subtitleColor}
            weight={weight}
          >
            {block.subtitle}
          </Subtitle>
          {block.isCode ? (
            <Highlight language="javascript">
              <code>{block.text}</code>
            </Highlight>
          ) : (
            <Paragraph size={size} font={font} color={color} weight={weight}>
              {block.text}
            </Paragraph>
          )}
        </div>
      ))}
    </Block>
  );
};

BlockText.propTypes = {
  size: PropTypes.string,
  weight: PropTypes.number,
  font: PropTypes.string,
  color: PropTypes.string,
  bordered: PropTypes.bool,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  blockTitle: PropTypes.string,
  blockTitleColor: PropTypes.string,
  isCode: PropTypes.bool
};

export default BlockText;