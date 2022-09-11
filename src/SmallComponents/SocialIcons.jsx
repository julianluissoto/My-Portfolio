import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Email, Github, Linkedin } from '../AllSvg'
import { darkTheme } from '../components/Themes'

const Icons = styled.div `
 color: ${props=>props.theme.text} ;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  &>*:not(:last-child){
    margin: 0.5rem 0;
    
  }
`
const Line = styled.span `
  width: 2px;
  height: 8rem;
  background-color: ${props=>props.color==='dark'? darkTheme.text : darkTheme.body};
`

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink  style={{color:'inherit'}} target='_blank'  to = {{pathname:'https://github.com/julianluissoto'}} >
          <Github width = {25} height = {25} fill={props.theme==='dark'? darkTheme.text  :darkTheme.body}/>
        </NavLink>
      </div>
      <div>
        <NavLink style={{color:'inherit'}} target='_blank'  to ={{pathname:'https://www.linkedin.com/in/julian-soto-dev/'}} >
         < Linkedin width = {25} height = {25} fill={props.theme==='dark'? darkTheme.text  :darkTheme.body}/>
        </NavLink>
      </div>
      <div>
        <NavLink style={{color:'inherit'}} target='_blank'  to = {{pathname:'mailto:julianlasoto@gmail.com'}}>
          < Email width = {25} height = {25} fill={props.theme==='dark'? darkTheme.text  :darkTheme.body}/>
        </NavLink>
      </div>
      <Line color={props.theme}/>
   </Icons>
  )
}

export default SocialIcons