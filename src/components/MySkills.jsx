import React from 'react'
import { motion } from "framer-motion";
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme,mediaQueries } from './Themes'
import PowerButton from '../SmallComponents/PowerButton'
import Logo from '../SmallComponents/Logo'
import SocialIcons from '../SmallComponents/SocialIcons'
import {BiServer} from 'react-icons/bi'
import {ImDisplay} from 'react-icons/im'

import ParticlesComponent from '../SmallComponents/ParticlesComponent'
import PageTitle from '../SmallComponents/PageTitle'


const Box = styled(motion.div)`

  background-color: ${props=>props.theme.body};
  width: 100vw;
  height: 90vh;
  position: relative;
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  
  ${mediaQueries(50)`
            flex-direction:column;  
            padding:8rem 0;
height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }
           
  `};
  ${mediaQueries(30)`
           
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
           
  `};

  `

const Main = styled(motion.div)`
  border: 2px solid ${props=>props.theme.text};
  color:${props=>props.theme.text};
  background-color:${props=>props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  &:hover{
    background-color:${props=>props.theme.text};
    color:${props=>props.theme.body};
  }
  &:hover * {
    background-color:${props=>props.theme.text};
    color:${props=>props.theme.body};
    transition:all 0.2s ease-in-out
  }
  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};

 
`
 
const Description = styled.h3`
  color: ${props=>props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
li{
  list-style:none;
  line-height:2rem;
}
h2{
  display: block;
  text-align:center;
}
&:hover * {
    background-color:${props=>props.theme.text};
    color:${props=>props.theme.body};
  }

  ${mediaQueries(50)`
            font-size: calc(0.8em + 1vw);

  `};

  ${mediaQueries(30)`
                      font-size:calc(0.7em + 1vw);

              

  `};

  ${mediaQueries(25)`
                      font-size:calc(0.5em + 1vw);

              

  `};

`

const MySkills = () => {

 
  return (
    <ThemeProvider theme={lightTheme} >
      
       {/* <SkillsTitle>
         My Skills
      </SkillsTitle> */}
        <Box>
        <PowerButton/>
        <SocialIcons theme={'light'}/>
        <Logo theme={'light'}/>
        <ParticlesComponent  theme={'light'}/>

            <Main>
               <ImDisplay style={{fontSize:'2rem', marginRight:'2rem'}}/>
        
                <h2>FRONT END</h2>
                <Description>
                     This is where im strong, i always create simple but functional interfaces so the cliente can access easily where he wants to go.
                     <div>
                <h2>Technologies</h2>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Tailwind</li>
                  <li>Styled-Components</li>
                  <li>Sass</li>
                </ul>
                <h2 style={{display:'block'}} >Tools</h2>
                <h3>Trello</h3>
                </div>
                </Description>
              
                
            
            </Main>

            <Main>
                  <BiServer  style={{fontSize:'2rem'  ,marginRight:'2rem'}}/>
                   <h2>BACKEND</h2>
                  <Description>
                       Working every day on server side son i can provide to my cliente side the information that i need and on the way i needed.
                       <div>
                  <h2>Technologies</h2>
                <ul>
                  <li>Node JS</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>Sequelize</li>
                 
                </ul>
                <h2 style={{display:'block'}}>
                  Tools
                </h2>
                <h3>
                  Postman
                </h3>
                  </div>
                  </Description>
                 
                  
     
     
             </Main>
      <PageTitle text='My Skills' top='80%' right = '10%'  />
        </Box>
        
    </ThemeProvider>
  )
}

export default MySkills