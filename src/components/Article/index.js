import React from "react";
import styled from "styled-components";
import { layout, space } from "styled-system";
import Heading from "./Heading";
import Hero from "./Hero";
import { getImageListSrcset } from "utils/getImgSrc";

const StyledContainer = styled.div`
  ${layout}
  ${space}
`;

const Body = ({ children }) => (
  <StyledContainer maxWidth={[738]} width={[1]}>
    {children}
  </StyledContainer>
);

const Content = styled.div`
  p {
    color: #626262;
  }

  p + p {
    margin-top: 16px;
  }

  img {
  }
`;

const StyledSummary = styled.p`
  font-weight: bold;
`;

const Article = ({ article }) => {
  const { authors, title, introText, blocks, summary, imageList } = article;
  return (
    <>
      <Hero bgImage={imageList}>
        <Heading title={title} subtitle={introText} author={authors[0]} />
      </Hero>
      <Body>
        <StyledSummary>{summary}</StyledSummary>
        <Content>{blocks.map(block => _renderBlock(block))}</Content>
      </Body>
    </>
  );

  function _renderBlock(block) {
    if (block.blockTypeId === 1) {
      return (
        <>
          {block.content.map((image, index) => (
            <img
              key={index}
              srcset={getImageListSrcset(image.imageList)}
              alt={image.title}
            />
          ))}{" "}
          />
        </>
      );
    } else if (block.blockTypeId === 0) {
      return <div dangerouslySetInnerHTML={{ __html: block.content }} />;
    }
  }
};

export default Article;
