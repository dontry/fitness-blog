import React from "react";
import { storiesOf } from "@storybook/react";
import { createGlobalStyle } from "styled-components";
import Nav from "components/Nav";
import Hero from "components/Article/Hero";
import Heading from "components/Article/Heading";
import bgImage from "assets/images/photo-copy-2_2019-08-20/photo-copy-2.jpg";
import { GlobalStyle } from "../theme";
import Article from "components/Article/index";
import response from "assets/article.json";

createGlobalStyle(GlobalStyle);

const author = {
  name: "Centr Team",
  imageList: {
    square1x: {
      url:
        "https://cdn.centr.com/content/5000/4738/images/square1x-cen-author-pic-the-expertsv2.jpg"
    },
    square2x: {
      url:
        "https://cdn.centr.com/content/5000/4738/images/square2x-cen-author-pic-the-expertsv2.jpg"
    },
    square3x: {
      url:
        "https://cdn.centr.com/content/5000/4738/images/square3x-cen-author-pic-the-expertsv2.jpg"
    }
  }
};

storiesOf("Navigation", module).add("with title", () => (
  <Nav title="article" />
));

storiesOf("Hero", module)
  .add("with bgImage", () => <Hero bgImageList={bgImage} />)
  .add("with heading & background image", () => (
    <Hero bgImageList={bgImage}>
      <Heading
        title="the breakfast collection that you get into this spring"
        subtitle="health & well being"
      />
    </Hero>
  ))
  .add("with  heading, author, & background image", () => (
    <Hero bgImageList={bgImage}>
      <Heading
        title="the breakfast collection that you get into this spring"
        subtitle="health & well being"
        author={author}
        date="24 January 2018"
      />
    </Hero>
  ));

storiesOf("Article", module).add("with all", () => (
  <Article article={response.result.article} />
));
