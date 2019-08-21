import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { layout, space } from "styled-system";

//https://stackoverflow.com/questions/26801745/is-there-a-srcset-equivalent-for-css-background-image
const StyledBanner = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 100vw;
${layout}
${space}
background-image: ${props =>
  `linear-gradient(to bottom, rgba(0,0,0,0), #000), url(${props.bgImage[0].url})` ||
  "none"};
background-size: cover;
background-repeat: no-repeat;
`;

const Hero = ({ bgImage, children }) => (
  <StyledBanner
    bgImage={bgImage}
    height={[375, 580]}
    pb={[2, 5]}
    pl={["14px"]}
    pr={["33px"]}
  >
    {children}
  </StyledBanner>
);

Hero.propTypes = {
  bgImage: PropTypes.string
};

export default Hero;
