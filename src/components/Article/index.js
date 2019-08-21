import React from "react";
import styled from "styled-components";
import { layout, space } from "styled-system";
import Heading from "./Heading";
import Hero from "./Hero";
import { getImageListSrcset } from "utils/getImgSrc";
import player from "assets/images/player.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 20px;
    color: #3e3e3e;
  }


  div ~ div, div ~ img {
    margin-top: 36px;
  }

  img {
    width: 100%;
  }
`;

const Summary = styled.p`
  font-size: 22px;
  font-weight: bold;
  line-height: 1.3;
  color: #626262;
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
      <AudioPlayer src={player} alt="audio-player" width={[1]} height={[72, 123]} maxWidth={[738]} mt={[0,16 ]} />
      <Body px={[15]} maxWidth={[738]} width={[1]} mt={[48, 52]} >
        <Summary mb={[30]}>{summary}</Summary>
        <Content>{blocks.map(block => _renderBlock(block))}</Content>
      </Body>
</Container>
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
