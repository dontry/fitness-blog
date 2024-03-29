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

const article = response.result.article

storiesOf("Navigation", module).add("with title", () => (
  <Nav title="article" />
));

storiesOf("Hero", module)
  .add("with bgImage", () => <Hero bgImageList={article.imageList} />)
  .add("with heading & background image", () => (
    <Hero bgImageList={article.imageList}>
      <Heading
        title="the breakfast collection that you get into this spring"
        subtitle="health & well being"
      />
    </Hero>
  ))
  .add("with  heading, author, & background image", () => (
    <Hero bgImageList={article.imageList}>
      <Heading
        title="the breakfast collection that you get into this spring"
        subtitle="health & well being"
        author={article.authors[0]}
        date="24 January 2018"
      />
    </Hero>
  ));

storiesOf("Article", module).add("with all", () => (
  <Article article={article} />
));
