import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { darkTheme} from './Themes'
import PowerButton from '../SmallComponents/PowerButton'
import Logo from '../SmallComponents/Logo'
import SocialIcons from '../SmallComponents/SocialIcons'

import ParticlesComponent from '../SmallComponents/ParticlesComponent'
import JulianOrbital from './JulianOrbital'



const Container = styled.div`
  background-color:${props=>props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow:hidden;
 
`

const floatingEffect = keyframes`
  0% {transform: translateY(-10px)}
 
 50% {transform: translateY(20px) translateX(30px)}
  
  100% {transform: translateY(-10px)}
  `

const MeFloating = styled.div`
  position: absolute;
  bottom:50%;
  right:25%;
  animation: ${floatingEffect} 7s ease infinite;
  
`
const AboutInfo = styled.div`
   border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const About = () => {
 
    

  return (
    <ThemeProvider theme={darkTheme} >
       <Container>
       <Logo theme={'dark'}/>
        <SocialIcons theme={'dark'}/>
        <PowerButton/>
        <ParticlesComponent theme ='dark'  />
       
       <MeFloating>

       <JulianOrbital/>
       </MeFloating>
       
       <AboutInfo>
       I'm a Fullstack developer located at Argentina. I love to create simple yet beautiful websites with great user experience.
<br /> <br/>
I'm interested in both front end and backend stack and im always trying new things and building usefull projects. 
<br/> <br/>
I believe that the good experience of the user is primordial, it's what make the diference, so i focus all my effort on making iterfaces that makes the user feel confortable on the webiste.


       </AboutInfo>
            </Container>

    </ThemeProvider>
  )
  
}

export default About