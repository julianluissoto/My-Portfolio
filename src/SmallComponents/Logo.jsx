import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'

const Logo = styled.h1`
    display: inline-block;
    color: ${props=>props.color==='dark'?darkTheme.text : darkTheme.body};
font-family: 'Pacifico', cursive;
font-size: 500;
position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
`

const LogoPage = (props) => {
  return (
  <>
  <Logo color = {props.theme}>

JS
  </Logo>
  </>
  )
}

export default LogoPage