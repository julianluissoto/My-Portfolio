import React ,{useEffect,useRef}from 'react'
import styled, {  ThemeProvider } from 'styled-components'
import { darkTheme} from './Themes'
import {motion} from 'framer-motion';
import PowerButton from '../SmallComponents/PowerButton'
import Logo from '../SmallComponents/Logo'
import SocialIcons from '../SmallComponents/SocialIcons'
import { Work } from '../data/WorkData'
import Card from '../SmallComponents/Card';


const Box = styled.div`
background-color: ${props => props.theme.body};
height:400vh;
position: relative;
display: flex;
align-items: center;
`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;
color:white;
`
const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;
`


// Framer-motion Configuration
const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const WorkPage = () => {

    const ref = useRef(null);
    



    useEffect(() => {
        let element = ref.current;
        
        const rotate = () => {
         
         element.style.transform = `translateX(${-window.pageYOffset}px)`
        }
    
        window.addEventListener('scroll', rotate)
        return () => {
          window.removeEventListener('scroll', rotate);
          
        }
      }, [])


    return (
        <ThemeProvider theme={darkTheme}>
<Box>

<Logo theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />

     <Main ref={ref}   variants={container} initial='hidden' animate='show'  >
         {
            Work.map( d => 
            <Card key={d.id} data={d} />
            )
         }
     </Main>


        </Box>

        </ThemeProvider>
        
    )
}

export default WorkPage