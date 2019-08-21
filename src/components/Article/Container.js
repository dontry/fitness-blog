import React from "react";
import styled from "styled-components";
import { layout, space } from "styled-system";

const Container = styled.div`
  ${layout}
  ${space}
`;

export default ({ children }) => (
  <Container maxWidth={[738]} width={[1]}>
    {children}
  </Container>
);
