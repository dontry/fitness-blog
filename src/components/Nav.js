import React from 'react'
import styled from 'styled-components'
import {space, layout, color, typography} from 'styled-system'
import logo from '../assets/icons/hemsworthlogo.svg'
import burger from '../assets/icons/burger.svg'
 
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  ${space}
  ${color}
`

const Title = styled.h4`
text-transform: uppercase;
${typography}
${color}
`

const Logo =styled.img`
${layout}
`

const Menu = styled.img`

${layout}
`

const Nav = ({title}) => {
  return (
  <Wrapper bg="black" p={[4]}>
      <Title color="white" fontSize={[2]} >{title}</Title>
      <Logo src={logo} />
      <Menu src={burger} w={20} h={12}/>
  </Wrapper>
  )
}

export default Nav