import React from 'react'
import "./main.css"
import {SiReact, SiRedux,SiSequelize,SiPostgresql, SiNodedotjs, SiHtml5, SiTailwindcss} from 'react-icons/si'
import {TbBrandJavascript} from "react-icons/tb"

const JulianOrbital = () => {
  return (
    <div style={{position:'absolute'}} >
<div className="ferrisWheel">
    <div className="ferrisWheelInner">
      <img className= "ferrisWheelImage"  alt="Julian Soto Dev" src="https://i.postimg.cc/wTNScdTJ/Screenshot-20220815-121809-Gallery.jpg" />
      
     
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