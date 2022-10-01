import React from 'react'
import "./main.css"
import {SiReact, SiRedux,SiSequelize,SiPostgresql, SiNodedotjs, SiHtml5, SiTailwindcss} from 'react-icons/si'
import {TbBrandJavascript} from "react-icons/tb"
import {BsGearWideConnected} from 'react-icons/bs'
import styled,{ keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;
const RotateGear = styled.div`
  display: inline-block;
  animation: ${rotate} 20s linear infinite;
  padding: 5px;
  font-size: 1.2rem;
`;


const JulianOrbital = () => {
  return (
    <div style={{position:'absolute'}} >
<div className="ferrisWheel">
    <div className="ferrisWheelInner">
      <RotateGear>
      <BsGearWideConnected style={{fill:'rgb(105,105,105)', height:'100px', width:'100px'}}/>
      </RotateGear>

      
     
      <ol className="ferrisWheelList" >
        <li className="ferrisWheelItem  "  >
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner" >
              <a className="ferrisWheelLink" target={'_blank'} href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiReact className= "ferrisWheelIcon"    />
                <span className="ferrisWheelLabel">React</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className="ferrisWheelLink" target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
               <TbBrandJavascript className="ferrisWheelIcon"/>
                <span className="ferrisWheelLabel">Javascript</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className="ferrisWheelLink" target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiRedux className="ferrisWheelIcon"/>
                <span className="ferrisWheelLabel">Redux</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className="ferrisWheelLink" target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiSequelize  className="ferrisWheelIcon"/>
                <span className="ferrisWheelLabel">Sequelize</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className="ferrisWheelLink" target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiPostgresql  className="ferrisWheelIcon"/>
                <span className="ferrisWheelLabel">PostgreSQL</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className="ferrisWheelLink" target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiNodedotjs  className="ferrisWheelIcon"/>
                <span className="ferrisWheelLabel">NodeJS</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className="ferrisWheelLink" target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiHtml5 className="ferrisWheelIcon"/>
                <span className="ferrisWheelLabel">HTML5</span>
              </a>
            </div>
          </div>
        </li>
        <li className="ferrisWheelItem">
          <div className="ferrisWheelItemPivot">
            <div className="ferrisWheelItemInner">
              <a className="ferrisWheelLink" target={'_blank'}  href="https://www.linkedin.com/in/julian-soto-dev/" rel="noreferrer">
                <SiTailwindcss className="ferrisWheelIcon"/>
                <span className="ferrisWheelLabel">Tailwind</span>
              </a>
            </div>
          </div>
        </li>
      </ol>
    </div>
    </div>

    </div>
    
  )
}

export default JulianOrbital