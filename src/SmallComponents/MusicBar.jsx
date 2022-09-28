import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import music from '../assets/audio/u-said-it-v13-1167.mp3'
import dancerMoving from '../assets/Images/dancer.gif'
import dancerStatic from '../assets/Images/dancer-static.png'
import {AiFillSound} from 'react-icons/ai'
const Container = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top:3rem;
  z-index: 10;
  &>*:nth-child(1){
    animation-delay: 0.2s;
}
  &>*:nth-child(2){ 
    animation-delay: 0.3s;
}
  &>*:nth-child(3){
    animation-delay: 0.4s;
}
  &>*:nth-child(4){
    animation-delay: 0.5s;
}
  &>*:nth-child(5){
    animation-delay: 0.8s;
}
  &>*:nth-child(6){
    animation-delay: 0.9s;
}
  `
  const play = keyframes`
  0%{
      transform:scaleY(1);
  }
  50%{
      transform:scaleY(2);
  }
  100%{
      transform:scaleY(1);
  }
  `
const Line = styled.span`
  background-color: ${props=>props.theme.text};
border: 1px solid ${props=>props.theme.body };
animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 2px;
margin:0 0.1rem;
`

const MusicBar = () => {
  const ref = useRef(null)
  const [click, setClick] = useState(false)
  const handleMusic = ()=>{

setClick(!click)

if(!click){
  ref.current.play();
}
else{
  ref.current.pause()
}
  }
  return (
    <>
    <Container onClick={handleMusic}>
    <AiFillSound style={{width:'1.5rem', height:'1.5rem'}}/>
      <Line click={click}/>
      <Line click={click}/>
      <Line click={click}/>
      <Line click={click}/>
      <Line click={click} />
      <img style={{height:'90px', top:'-3rem', left:'3rem', position:'absolute'}}  src={click?dancerMoving:dancerStatic} alt="" />
        <audio src={music} ref={ref} loop />
        
        
    </Container>
    
    </>
    
  )
}

export default MusicBar