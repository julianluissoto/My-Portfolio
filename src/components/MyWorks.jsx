import React from 'react'
import styled, {  ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme} from './Themes'
import {motion} from 'framer-motion';
import PowerButton from '../SmallComponents/PowerButton'
import Logo from '../SmallComponents/Logo'
import SocialIcons from '../SmallComponents/SocialIcons'
import { Work } from '../data/WorkData'
import Card from '../SmallComponents/Card';

const Container = styled.div`
  background-color:${props=>props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow:hidden;
 
`
const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;
color:white;
`

const MyWorks = () => {
 
     
 
    return (
      <ThemeProvider theme={darkTheme} >
         <Container>
         <Logo theme={'dark'}/>
          <SocialIcons theme={'dark'}/>
          <PowerButton/>

          <Main  initial='hidden' animate='show'  >
         {
            Work.map( d => 
            <Card key={d.id} data={d} />
            )
         }
     </Main>
   
  






         </Container>
        
         
      </ThemeProvider>
    )
    
  }
  
  


export default MyWorks