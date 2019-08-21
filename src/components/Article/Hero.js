import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { layout, space } from "styled-system";
import {getBgImageListSet} from 'utils/getImgSrc'

//https://stackoverflow.com/questions/26801745/is-there-a-srcset-equivalent-for-css-background-image
const StyledBanner = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 100vw;
${layout}
${space}
background: ${props =>
  `linear-gradient(to bottom, rgba(0,0,0,0), #000), -webkit-image-set(${getBgImageListSet(props.bgImageList)});` ||
  "none"};
background-size: cover;
background-repeat: no-repeat;
`;

const Hero = ({  bgImageList, children }) => (
  <StyledBanner
    bgImageList={bgImageList}
    height={[375, 580]}
    pb={[2, 5]}
    pl={["14px"]}
    pr={["33px"]}
  >
    {children}
  </StyledBanner>
);

Hero.propTypes = {
  bgImageList: PropTypes.array
};

export default Hero;
