//home button
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled,{keyframes} from 'styled-components'
//import { PowerBtn } from '../AllSvg'
import {FaReact} from 'react-icons/fa'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `
const Power = styled.button`
    animation: ${rotate} 10s linear infinite;
    position:fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%,0);
    background-color: #FCF6F4;
    padding: 0.3rem;
    border-radius: 50%;
    border:none;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
z-index: 3;
cursor: pointer;
&:hover{
  
    box-shadow: 0 0 10px 4px  #02161b33;

}

`


const PowerButton = () => {
  return (
    <Power>
        <NavLink to='/'  style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        {/* <PowerBtn width={30} heigth = {30} fill='currentColor' /> */}
        <FaReact style={{fontSize:'50px', color:'#0693E3'}}   />
        </NavLink>
       
    </Power>
  )
}

export default PowerButton