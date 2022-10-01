import React ,{useEffect,useRef, lazy, Suspense }from 'react'
import styled, {  ThemeProvider } from 'styled-components'
import { darkTheme} from './Themes'
import {motion} from 'framer-motion';
import { mediaQueries } from './Themes';
/* import PowerButton from '../SmallComponents/PowerButton' */
/* import Logo from '../SmallComponents/Logo' */
/* import SocialIcons from '../SmallComponents/SocialIcons' */
import { Work } from '../data/WorkData'
import Card from '../SmallComponents/Card';
import {BsGearWideConnected} from 'react-icons/bs'
/* import PageTitle from '../SmallComponents/PageTitle'; */
import Loading from "../SmallComponents/Loading";
/* import { Riel } from '../AllSvg'; */
import Riel from '../SmallComponents/Riel';

const SocialIcons = lazy(() => import("../SmallComponents/SocialIcons"));
const PowerButton = lazy(() => import("../SmallComponents/PowerButton"));
const Logo = lazy(() => import("../SmallComponents/Logo"));
const PageTitle = lazy(() => import("../SmallComponents/PageTitle"));

const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
height:400vh;
position: relative;
display: flex;

`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(40rem + 15vw);
height: 40vh;
display: flex;
color:white;

${mediaQueries(50)`
        
        
        left:calc(8rem + 15vw);

  `};

  ${mediaQueries(40)`
  top: 30%;
        
        left:calc(6rem + 15vw);

  `};

  ${mediaQueries(40)`
        
        left:calc(2rem + 15vw);

  `};
  ${mediaQueries(25)`
        
        left:calc(1rem + 15vw);

  `};

`
const Rotate = styled.span`
display:block;
position: fixed;
right:2rem;
bottom: 2rem;
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
   const gear = useRef(null)
   const rack = useRef(null)



    useEffect(() => {
        let element = ref.current;
        let rackSlide = rack.current
        
        const rotate = () => {
         
          element.style.transform = `translateX(${-window.pageYOffset}px)`;
          rackSlide.style.transform = `translateX(${-window.pageYOffset}px)`;

          return(gear.current.style.transform = 'rotate(' + -window.pageYOffset + 'deg)')
           
        };
        
        
        window.addEventListener('scroll', rotate)
        return () =>  {window.removeEventListener('scroll', rotate);
      };
          
        
      }, [])


  return (
        <ThemeProvider theme={darkTheme}>
          <Suspense fallback={<Loading />}>
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
<Rotate ref= {gear}>
  <div ><BsGearWideConnected   style={{fill:`${darkTheme.text}`, width:'100px', height:'100px', bottom:'30px'}}/></div>

</Rotate >
<Rotate ref= {rack}>
  <div >
    <Riel  />
    </div>
  
  
  

</Rotate >
     <PageTitle text='My Work' top='10%' right = '10%' />
        </Box>
      
        </Suspense>
        </ThemeProvider>

        
    )
}

export default WorkPage