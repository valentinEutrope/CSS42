import React from "react";
import Title from "../../components/Title";
import BlockText from "../../components/BlockText";
import LabelBlock from "../../components/LabelBlock";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import theme from "../../config/theme";
import colorsLighten from "../../helpers/colors";

const codeTitleProps = (
  <>
    <div>component: string</div>
    <div>value: string</div>
    <div>font: string</div>
    <div>size: string</div>
    <div>color: string</div>
    <div>weight: number (100 - 1000)</div>
  </>
);

const Typography = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <Title
            component="h3"
            value="Titles"
            font={theme.fonts.defaultFont}
            color={theme.colors.primary}
          />
        </div>
        <div className="row align-items-center">
          <div className="col">
            <Title
              component="h1"
              value="Title h1"
              font={theme.fonts.defaultFont}
              color={theme.colors.tertiary}
            />
            <Title
              component="h2"
              value="Title h2"
              font={theme.fonts.defaultFont}
              color={theme.colors.tertiary}
            />
            <Title
              component="h3"
              value="Title h3"
              font={theme.fonts.defaultFont}
              color={theme.colors.tertiary}
            />
            <Title
              component="h4"
              value="Title h4"
              font={theme.fonts.defaultFont}
              color={theme.colors.tertiary}
            />
            <Title
              component="h5"
              value="Title h5 thin"
              font={theme.fonts.defaultFont}
              color={theme.colors.tertiary}
              weight={300}
            />
            <Title
              component="h6"
              value="Title h6 bolder"
              font={theme.fonts.defaultFont}
              color={theme.colors.tertiary}
              weight={1000}
            />
          </div>
          <div className="col">
            <BlockText
              blockTitle="Use Title component"
              blockTitleColor={theme.colors.primary}
              subtitleColor={colorsLighten.info(0)}
              blocks={[
                {
                  subtitle: "How to use it",
                  isCode: true,
                  text:
                    '<Title component="h2" size="2rem" value="H2G2" color="#444" weight={500} font="Roboto" />'
                },
                {
                  subtitle: "Props",
                  isCode: true,
                  text: codeTitleProps
                }
              ]}
              color={theme.colors.tertiary}
              size="1.15rem"
              font={theme.fonts.defaultFont}
              weight={500}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <Title
            size={3}
            value="BlockText"
            font={theme.fonts.defaultFont}
            color={theme.colors.primary}
          />
        </div>
        <div className="row">
          <BlockText
            blockTitle="Samuel Jackson Said"
            size="1.15rem"
            font={theme.fonts.defaultFont}
            color={theme.colors.tertiary}
            weight={500}
            blocks={[
              {
                text:
                  "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb."
              },
              {
                text:
                  "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. "
              }
            ]}
          />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <Title
            size={3}
            value="LabelBlock"
            font={theme.fonts.defaultFont}
            color={theme.colors.primary}
          />
        </div>
        <div className="row">
          <LabelBlock
            color={theme.colors.primary}
            title="one block"
            icon={faCoffee}
          >
            <p>
              Do you see any Teletubbies in here? Do you see a slender plastic
              tag clipped to my shirt with my name printed on it? Do you see a
              little Asian child with a blank expression on his face sitting
              outside on a mechanical helicopter that shakes when you put
              quarters in it? No? Well, that's what you see at a toy store. And
              you must think you're in a toy store, because you're here shopping
              for an infant named Jeb.
            </p>
          </LabelBlock>
        </div>
      </div>
    </>
  );
};

export default Typography;
