import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/theme";

function loadStories() {
  require("../src/stories");
}

const withGlobal = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

addDecorator(withGlobal);

configure(loadStories, module);
