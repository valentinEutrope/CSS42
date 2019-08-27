import React from "react";
import Title from "../../components/Title";
import BlockText from "../../components/BlockText";

import theme from "../../theme";

const Typography = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Title
            size={3}
            value="Titles"
            font={theme.defaultFont}
            color={theme.primary}
          />
        </div>
        <div className="row align-items-center">
          <div className="col">
            <Title
              size={1}
              value="Title size 1"
              font={theme.defaultFont}
              color={theme.tertiary}
            />
            <Title
              size={2}
              value="Title size 2"
              font={theme.defaultFont}
              color={theme.tertiary}
            />
            <Title
              size={3}
              value="Title size 3"
              font={theme.defaultFont}
              color={theme.tertiary}
            />
            <Title
              size={4}
              value="Title size 4"
              font={theme.defaultFont}
              color={theme.tertiary}
            />
            <Title
              size={5}
              value="Title size 5 thin"
              font={theme.defaultFont}
              color={theme.tertiary}
              weight={300}
            />
            <Title
              size={6}
              value="Title size 6 bolder"
              font={theme.defaultFont}
              color={theme.tertiary}
              weight={1000}
            />
          </div>
          <div className="col">
            <BlockText
              blockTitle="Use Title component"
              blockTitleColor={theme.primary}
              subtitleColor={theme.info}
              blocks={[
                {
                  subtitle: "How to call it",
                  text: '<Title size={2} value="H2G2" color="#444" />'
                },
                {
                  subtitle: "Props",
                  text: "size: number (1 - 6)"
                },
                {
                  text: "weight: number (100 - 1000)"
                },
                {
                  text: "font: string"
                },
                {
                  text: "color: string"
                },
                {
                  text: "value: string"
                }
              ]}
              color={theme.tertiary}
              size="1.15rem"
              font={theme.defaultFont}
              weight={500}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <Title
          size={3}
          value="BlockText"
          font={theme.defaultFont}
          color={theme.primary}
        />
        <BlockText
          blockTitle="Samuel Jackson Said"
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
          size="1.15rem"
          font={theme.defaultFont}
          color={theme.tertiary}
          weight={500}
        />
      </div>
    </>
  );
};

export default Typography;
