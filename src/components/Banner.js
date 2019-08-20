import React from 'react'
import styled from 'styled-components'  
import {layout, space} from 'styled-system'

const StyledBanner = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
background-color: #000;
width: 100vw;
${layout}
${space}
background-image: ${props => `url(${props.bgImage})` || "none"};
background-size: cover;
background-repeat: no-repeat;
`

const Banner = ({bgImage, children}) => (<StyledBanner bgImage={bgImage} height={[375, 580]} pd={[2, 5]} >{children}</StyledBanner>)

export default Banner;
