import React, { useState } from 'react'
import styled from 'styled-components'
import {SiReact, SiRedux,SiSequelize,SiPostgresql, SiNodedotjs, SiHtml5, SiTailwindcss} from 'react-icons/si'
import {TbBrandJavascript} from "react-icons/tb"
import LogoPage from '../SmallComponents/Logo'
import PowerButton from '../SmallComponents/PowerButton'
import SocialIcons from '../SmallComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import "./main.css"
import Intro from './Intro'
import {motion} from 'framer-motion'
import { lightTheme} from './Themes'
import {BsGearWideConnected} from 'react-icons/bs'

const MainContainer = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    h2,h3,h4,h5,h6{
        font-family: 'karla', sans-serif;
        font-weight: 500;
 }
 `
 const Resume = styled(NavLink)`
 color: ${props=> props.theme.text};
 position: absolute;
 top: 50%;
 right: calc(1rem + 2vw);
text-decoration: none;
transform: rotate(90deg) translate(-50%, -50%);
 z-index: 1;
`
 const Work = styled(NavLink)`
  color: ${props=>props.click?'white':props.theme.text} ;
 position: absolute;
 top: 42%;
 left: calc(1rem + .5vw);
text-decoration: none;
transform: rotate(-90deg) translate(-50%, -50%);
 z-index: 1;
 @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`
 const CenterLogo = styled.div`
 position: absolute;
 top: ${props=>props.click?'75%':'40%'};
 right: ${props=>props.click?'8%':'45%'};
 
@media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }
transition: all 1s ease-out;

` 
 const Container = styled.div `
    padding: 2rem;
`
 const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-weight:bold;
`
const About = styled(NavLink)`
  color: ${props=>props.click?props.theme.body:props.theme.text} ;
  z-index: 1;

`
const MySkills = styled(NavLink)`
  color: ${props=> props.click?props.theme.body:props.theme.text};
  z-index: 1;
`
const DarkDivContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${props=>props.click?'50%':'0' };
  height: ${props=>props.click?'100%':'0' };
  z-index: 1;
background-color: #420202;
transition: height 0.5s ease, width 1s ease 0.5s;

`


const Main = () => {
  const [click, setclick]= useState(false)
const handleClick = ()=>{
setclick(!click)
}
return (
		<MainContainer>
      <DarkDivContainer  click={click}>
      </DarkDivContainer>
			<Container>
			<PowerButton/>
			<SocialIcons theme = {click?'dark': 'light'} />
      <BsGearWideConnected  
      click={click}  onClick={handleClick}
      
      className={"showRotate"} style={{
        width:`${click ? '50px' : '100px'}`, 
        cursor:'pointer' , 
        height:`${click ? '50px' : '100px'}`,
        top: `${click?'82%':'50%'}`,
        right: `${click?'6%':'50%'}`,
        transition: 'all 1s ease-out',
        transitionDuration: '1s',

        }}/>
    
      <CenterLogo click={click}  onClick={handleClick}>

    <div className="ferrisWheelInner">
      <BsGearWideConnected  className={click?"ferrisWheelImageSmall":"ferrisWheelImage"} /* style={{fill:`${lightTheme.text}`, width:'100px', height:'100px'}} *//>
      {click?'':<h2 style={{display:'flex', justifyContent:"center", fontWeight:'bold'}}>Lets Go</h2>}
      <ol className="ferrisWheelList" >
        <li className="ferrisWheelItem"  >
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner" >
              <a className={click?"ferrisWheelLinkSmall":"ferrisWheelLink"} target={'_blank'} href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiReact className= {click?"ferrisWheelIconSmall":"ferrisWheelIcon"} />
                <span className="ferrisWheelLabel">React</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className={click?"ferrisWheelLinkSmall":"ferrisWheelLink"} target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
               <TbBrandJavascript className={click?"ferrisWheelIconSmall":"ferrisWheelIcon"}/>
                <span className="ferrisWheelLabel">Javascript</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className={click?"ferrisWheelLinkSmall":"ferrisWheelLink"} target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiRedux className={click?"ferrisWheelIconSmall":"ferrisWheelIcon"}/>
                <span className="ferrisWheelLabel">Redux</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className={click?"ferrisWheelLinkSmall":"ferrisWheelLink"} target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiSequelize  className={click?"ferrisWheelIconSmall":"ferrisWheelIcon"}/>
                <span className="ferrisWheelLabel">Sequelize</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className={click?"ferrisWheelLinkSmall":"ferrisWheelLink"} target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiPostgresql  className={click?"ferrisWheelIconSmall":"ferrisWheelIcon"}/>
                <span className="ferrisWheelLabel">PostgreSQL</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className={click?"ferrisWheelLinkSmall":"ferrisWheelLink"} target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiNodedotjs  className={click?"ferrisWheelIconSmall":"ferrisWheelIcon"}/>
                <span className="ferrisWheelLabel">NodeJS</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className={click?"ferrisWheelLinkSmall":"ferrisWheelLink"} target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiHtml5 className={click?"ferrisWheelIconSmall":"ferrisWheelIcon"}/>
                <span className="ferrisWheelLabel">HTML5</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className={click?"ferrisWheelLinkSmall":"ferrisWheelLink"} target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiTailwindcss className={click?"ferrisWheelIconSmall":"ferrisWheelIcon"}/>
                <span className="ferrisWheelLabel">Tailwind</span>
              </a>
            </div>
          </div>
        </li>
      </ol> 
    </div>
    
    </CenterLogo>
      <Resume 
      target={'_blank'} to= {{pathname:'https://drive.google.com/file/d/1urfMFgqjn2R6K8bX0-uG-dOc2tvczSjs/view?usp=sharing'}}>
  <motion.h3
  initial={{
    y:-200,
    transition:{type:'spring', duration:1.5, delay:1}

  }}
  animate={{
    y:0,
    transition: {type:'spring', duration:1.5, delay:1}
  }}
   whileHover={{scale:1.2}}
    whileTap={{scale:0.9}}>  
   Resume
  </motion.h3>
 </Resume>
      <Work  to= {'/work'} click={click}>
  <motion.h3
 initial={{
  y:-200,
  transition:{type:'spring', duration:1.5, delay:1}

}}
animate={{
  y:0,
  transition: {type:'spring', duration:1.5, delay:1}
}}



  whileHover={{scale:1.2}}
  whileTap={{scale:0.9}}
  >
   My Work
  </motion.h3>
 </Work>
			<LogoPage theme={click?'dark':'light'}/>

      <BottomBar>

<     About  to= {'/about'} click={click} >
        <motion.h3

initial={{
  y:200,
  transition:{type:'spring', duration:1.5, delay:1}

}}
animate={{
  y:0,
  transition: {type:'spring', duration:1.5, delay:1}
}}
         whileHover={{scale:1.2}}
         whileTap={{scale:0.9}}>
            About
        </motion.h3>

      </About>
      <MySkills  to= {'/skills'} >
        <motion.h3

initial={{
  y:200,
  transition:{type:'spring', duration:1.5, delay:1}

}}
animate={{
  y:0,
  transition: {type:'spring', duration:1.5, delay:1}
}}
         whileHover={{scale:1.2}}
         whileTap={{scale:0.9}}>
           My Skills
        </motion.h3>

      </MySkills>
     </BottomBar>
  </Container>
{click?<Intro  click={click} />:null}
</MainContainer>
  )
}

export default Main