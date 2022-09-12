import React from 'react'
import styled, {  ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme} from './Themes'
import PowerButton from '../SmallComponents/PowerButton'
import Logo from '../SmallComponents/Logo'
import SocialIcons from '../SmallComponents/SocialIcons'

const Container = styled.div`
  background-color:${props=>props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow:hidden;
 
`

const MyWorks = () => {
 
     
 
    return (
      <ThemeProvider theme={darkTheme} >
         <Container>
         <Logo theme={'dark'}/>
          <SocialIcons theme={'dark'}/>
          <PowerButton/>

          

         </Container>
        
         
      </ThemeProvider>
    )
    
  }
  
  


export default MyWorks