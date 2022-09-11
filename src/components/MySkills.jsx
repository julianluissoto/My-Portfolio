import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import PowerButton from '../SmallComponents/PowerButton'
import Logo from '../SmallComponents/Logo'
import SocialIcons from '../SmallComponents/SocialIcons'
import {BiServer} from 'react-icons/bi'
import {ImDisplay} from 'react-icons/im'

import ParticlesComponent from '../SmallComponents/ParticlesComponent'


const Box = styled.div`

  background-color: ${props=>props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  
  `

const Main = styled.div`
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

 
`
/* const SkillsTitle = styled.h1`
  color:${props=>props.theme.text};
 margin:60px auto;
 text-align: center;
 display: block;
 font-family:'ubuntu', monospace;

` */
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
                     description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatibus perspiciatis dolorem cupiditate 
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
                       description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatibus perspiciatis dolorem cupiditate 
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
      
        </Box>
    </ThemeProvider>
  )
}

export default MySkills