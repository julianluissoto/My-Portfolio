import React from 'react'
import { motion } from 'framer-motion'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { darkTheme , mediaQueries} from './Themes'
import PowerButton from '../SmallComponents/PowerButton'
import Logo from '../SmallComponents/Logo'
import SocialIcons from '../SmallComponents/SocialIcons'

import ParticlesComponent from '../SmallComponents/ParticlesComponent'
import JulianOrbital from './JulianOrbital'
import PageTitle from '../SmallComponents/PageTitle'



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

const MeFloating = styled(motion.div)`
  position: absolute;
  bottom:50%;
  right:25%;
  animation: ${floatingEffect} 7s ease infinite;
  
`
const AboutInfo = styled(motion.div)`
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
  
  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};








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
       I'm a Front-End Developer. Love to create simple yet beautiful websites with great user experience and cool animations.
<br /> <br/>
I'm interested in both front end and backend stack and im always trying new things and building usefull projects. 
<br/> <br/>
I believe that the good experience of the user is primordial, it's what make the difference, so i focus all my effort on making interfaces that makes the user feels confortable on the webiste.


       </AboutInfo>
       <PageTitle text= 'About' top='10%' right = '10%'  />
            </Container>

    </ThemeProvider>
  )
  
}

export default About