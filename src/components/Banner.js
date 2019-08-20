import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'  
import {layout, space} from 'styled-system'

const StyledBanner = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 100vw;
${layout}
${space}
background-image: ${props => `linear-gradient(to bottom, rgba(0,0,0,0), #000), url(${props.bgImage})` || "none"};
background-size: cover;
background-repeat: no-repeat;
`

const Banner = ({bgImage, children}) => <StyledBanner bgImage={bgImage} height={[375, 580]} pb={[2, 5]} pl={["14px"]} pr={["33px"]} >{children}</StyledBanner>

Banner.propTypes = {
  bgImage: PropTypes.string
}

export default Banner;
