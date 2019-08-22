import React from "react";
import styled from "styled-components";
import { layout, space, typography } from "styled-system";
import Heading from "./Heading";
import Hero from "./Hero";
import { getImageListSrcset } from "utils/getImgSrc";
import player from "assets/images/player.png";
import { TEXT_BLOCK_TYPE, IMAGE_BLOCK_TYPE } from "../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${layout}
  ${space}
`;

const AudioPlayer = styled.img`
  margin: 0 auto;
  ${layout}
  ${space}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${typography}
  p {
    color: #3e3e3e;
  }

  div ~ div,
  div ~ img {
    margin-top: 36px;
  }

  img {
    width: 100%;
  }
`;

const Summary = styled.p`
  font-weight: bold;
  line-height: 1.3;
  color: #626262;
  ${typography}
  ${space}
`;

const Article = ({ article }) => {
  const { authors, title, introText, blocks, summary, imageList } = article;
  return (
    <>
      <Hero bgImageList={imageList}>
        <Heading title={title} subtitle={introText} author={authors[0]} />
      </Hero>
      <Container>
        <AudioPlayer
          src={player}
          alt="audio-player"
          width={[1]}
          height={[72, 123]}
          maxWidth={[738]}
          mt={[0, "16px"]}
        />
        <Body px={[15]} maxWidth={[738]} width={[1]} mt={[48, 52]}>
          <Summary mb={[30]} fontSize={["18px", "22px"]}>
            {summary}
          </Summary>
          <Content fontSize={["17px", "20px"]}>
            {blocks.map(block => _renderBlock(block))}
          </Content>
        </Body>
      </Container>
    </>
  );

  function _renderBlock(block) {
    if (block.blockTypeId === IMAGE_BLOCK_TYPE) {
      return (
        <div
          key={block.content}
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      );
    } else if (block.blockTypeId === TEXT_BLOCK_TYPE) {
      return (
        <>
          {block.content.map((image, index) => (
            <img
              key={index}
              srcSet={getImageListSrcset(image.imageList)}
              alt={image.title}
            />
          ))}
        </>
      );
    } else {
      return <div />;
    }
  }
};

export default Article;
