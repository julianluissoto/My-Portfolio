import React from 'react'
import styled from 'styled-components'
import avatar from '../assets/Images/avatar.png'
import {motion} from 'framer-motion'

const IntroBox =   styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 55vw;
height:45vh;
display: flex;

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    #420202 50%) bottom,
    linear-gradient(
    to right,   
    ${props => props.theme.body} 50%,
    #420202 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid;
    z-index:1;
  

`
const SubBox = styled.div`
position: relative;
width: 50%;
display: flex;
.pic{
    
    position: absolute;
    bottom: 0;
    left:50%;
    transform:translate(-50%,0%);
    width: 80%;
    height: auto;
    
}
`
const BoxText = styled.div`
font-size:calc(1em + 1.5vw);
color: ${props=>props.theme.body};
padding: 2rem;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;
&>*:last-child{
    color: ${props=>`rgba(${props.theme.body},0.6)`};
    font-size:calc(0.7rem + 1.5vw);
    font-weight:300
}
`




const Intro = (props) => {
  return (
    <IntroBox initial={{height:0}}
    animate={{height:'55vh'}}
    transition={{type:'spring', duration:2, delay:1, bounce: 0}}
     >
        <SubBox>
            <BoxText>
                <h1>  Hi </h1>
                <h2>I'm Julian</h2>
                <h3>Full Stack Developer</h3>
            </BoxText>
         </SubBox>
         <SubBox click={props.click} >
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, delay:2}}
            >
                 <div >
                    <img className='pic' src={avatar} alt="avatar" />
                </div>
                </motion.div>
         </SubBox>
      
       

    </IntroBox>
  )
}

export default Intro