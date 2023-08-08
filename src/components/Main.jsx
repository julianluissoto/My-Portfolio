import React, { useState } from "react";
import styled from "styled-components";
import {
  SiReact,
  SiRedux,
  SiSequelize,
  SiPostgresql,
  SiNodedotjs,
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import LogoPage from "../SmallComponents/Logo";
import resume from "../assets/resume/Full%20Stack%20React%20Node%20Julian.pdf";
import SocialIcons from "../SmallComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import "./main.css";
import Intro from "./Intro";
import { motion } from "framer-motion";
import { GrContact } from "react-icons/gr";
import { BsGearWideConnected } from "react-icons/bs";
import { mediaQueries } from "./Themes";
import MusicBar from "../SmallComponents/MusicBar";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "karla", sans-serif;
    font-weight: 500;
    text-shadow: 1px 1px 2px #420202;
  }
  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;
      text-shadow:1px 1px 2px #420202

  `};

    ${mediaQueries(30)`
      font-size:1em;

  `};
  }
`;
const Container = styled.div`
  padding: 2rem;
`;

const Resume = styled(NavLink)`
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  text-decoration: none;
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
`;
const Work = styled(NavLink)`
  color: ${(props) => (props.click ? "white" : props.theme.text)};
  position: absolute;
  top: 42%;
  left: calc(1rem + 0.5vw);
  text-decoration: none;
  transform: rotate(-90deg) translate(-50%, -50%);
  z-index: 1;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;
const CenterLogo = styled.div`
  position: absolute;
  top: ${(props) => (props.click ? "75%" : "40%")};
  right: ${(props) => (props.click ? "8%" : "45%")};

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
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-weight: bold;
`;
const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  z-index: 1;
`;
const MySkills = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  z-index: 1;
`;
const ContactMe = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  z-index: 1;
`;
const DarkDivContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0")};
  height: ${(props) => (props.click ? "100%" : "0")};
  z-index: 1;
  background-color: #420202;
  transition: height 0.5s ease, width 1s ease 0.5s;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
       height: 50%;
  right:0;
  
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;

  `
      : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`;

const Main = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };

  return (
    <MainContainer>
      <DarkDivContainer click={click}></DarkDivContainer>
      <Container>
        <MusicBar show={true} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <BsGearWideConnected
          click={click}
          onClick={handleClick}
          className={"showRotate"}
          style={{
            width: `${click ? "50px" : "100px"}`,
            cursor: "pointer",
            height: `${click ? "50px" : "100px"}`,
            top: `${click ? "82%" : "40%"}`,
            right: `${click ? "6%" : "37%"}`,
            transition: "all 1s ease-out",
            transitionDuration: "1s",
          }}
        />

        <CenterLogo click={click} onClick={handleClick}>
          <div className="ferrisWheelInner">
            <BsGearWideConnected
              className={click ? "ferrisWheelImageSmall" : "ferrisWheelImage"}
            />

            <ol className="ferrisWheelList">
              <li className="ferrisWheelItem">
                <div className="ferrisWheelItemPivot">
                  <div className="ferrisWheelItemInner">
                    <a
                      className={
                        click ? "ferrisWheelLinkSmall" : "ferrisWheelLink"
                      }
                      target={"_blank"}
                      href="https://www.linkedin.com/in/julian-soto-dev/"
                      rel="noreferrer"
                    >
                      <SiReact
                        className={
                          click ? "ferrisWheelIconSmall" : "ferrisWheelIcon"
                        }
                      />
                      <span className="ferrisWheelLabel">React</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="ferrisWheelItem">
                <div className="ferrisWheelItemPivot">
                  <div className="ferrisWheelItemInner">
                    <a
                      className={
                        click ? "ferrisWheelLinkSmall" : "ferrisWheelLink"
                      }
                      target={"_blank"}
                      href="https://www.linkedin.com/in/julian-soto-dev/"
                      rel="noreferrer"
                    >
                      <TbBrandJavascript
                        className={
                          click ? "ferrisWheelIconSmall" : "ferrisWheelIcon"
                        }
                      />
                      <span className="ferrisWheelLabel">Javascript</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="ferrisWheelItem">
                <div className="ferrisWheelItemPivot">
                  <div className="ferrisWheelItemInner">
                    <a
                      className={
                        click ? "ferrisWheelLinkSmall" : "ferrisWheelLink"
                      }
                      target={"_blank"}
                      href="https://www.linkedin.com/in/julian-soto-dev/"
                      rel="noreferrer"
                    >
                      <SiRedux
                        className={
                          click ? "ferrisWheelIconSmall" : "ferrisWheelIcon"
                        }
                      />
                      <span className="ferrisWheelLabel">Redux</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="ferrisWheelItem">
                <div className="ferrisWheelItemPivot">
                  <div className="ferrisWheelItemInner">
                    <a
                      className={
                        click ? "ferrisWheelLinkSmall" : "ferrisWheelLink"
                      }
                      target={"_blank"}
                      href="https://www.linkedin.com/in/julian-soto-dev/"
                      rel="noreferrer"
                    >
                      <SiSequelize
                        className={
                          click ? "ferrisWheelIconSmall" : "ferrisWheelIcon"
                        }
                      />
                      <span className="ferrisWheelLabel">Sequelize</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="ferrisWheelItem">
                <div className="ferrisWheelItemPivot">
                  <div className="ferrisWheelItemInner">
                    <a
                      className={
                        click ? "ferrisWheelLinkSmall" : "ferrisWheelLink"
                      }
                      target={"_blank"}
                      href="https://www.linkedin.com/in/julian-soto-dev/"
                      rel="noreferrer"
                    >
                      <SiPostgresql
                        className={
                          click ? "ferrisWheelIconSmall" : "ferrisWheelIcon"
                        }
                      />
                      <span className="ferrisWheelLabel">PostgreSQL</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="ferrisWheelItem">
                <div className="ferrisWheelItemPivot">
                  <div className="ferrisWheelItemInner">
                    <a
                      className={
                        click ? "ferrisWheelLinkSmall" : "ferrisWheelLink"
                      }
                      target={"_blank"}
                      href="https://www.linkedin.com/in/julian-soto-dev/"
                      rel="noreferrer"
                    >
                      <SiNodedotjs
                        className={
                          click ? "ferrisWheelIconSmall" : "ferrisWheelIcon"
                        }
                      />
                      <span className="ferrisWheelLabel">NodeJS</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="ferrisWheelItem">
                <div className="ferrisWheelItemPivot">
                  <div className="ferrisWheelItemInner">
                    <a
                      className={
                        click ? "ferrisWheelLinkSmall" : "ferrisWheelLink"
                      }
                      target={"_blank"}
                      href="https://www.linkedin.com/in/julian-soto-dev/"
                      rel="noreferrer"
                    >
                      <SiHtml5
                        className={
                          click ? "ferrisWheelIconSmall" : "ferrisWheelIcon"
                        }
                      />
                      <span className="ferrisWheelLabel">HTML5</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="ferrisWheelItem">
                <div className="ferrisWheelItemPivot">
                  <div className="ferrisWheelItemInner">
                    <a
                      className={
                        click ? "ferrisWheelLinkSmall" : "ferrisWheelLink"
                      }
                      target={"_blank"}
                      href="https://www.linkedin.com/in/julian-soto-dev/"
                      rel="noreferrer"
                    >
                      <SiTailwindcss
                        className={
                          click ? "ferrisWheelIconSmall" : "ferrisWheelIcon"
                        }
                      />
                      <span className="ferrisWheelLabel">Tailwind</span>
                    </a>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <div></div>
        </CenterLogo>

        <Resume
          target={"_blank"}
          style={{ color: "black" }}
          to={resume}
          download
        >
          <motion.h3
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            Resume
          </motion.h3>
        </Resume>
        <Work to={"/work"} click={click}>
          <motion.h3
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            My Work
          </motion.h3>
        </Work>
        <LogoPage theme={click ? "dark" : "light"} />

        <BottomBar>
          <About to={"/about"} click={click}>
            <motion.h3
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            ></motion.h3>

            <motion.h3
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h3>
          </About>
          <ContactMe to={"/contact"} click={click}>
            <motion.h3
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            ></motion.h3>

            <motion.h3
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              CONTACT ME
              <GrContact />
            </motion.h3>
          </ContactMe>

          <MySkills to={"/skills"}>
            <motion.h3
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills
            </motion.h3>
          </MySkills>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : undefined}
    </MainContainer>
  );
};

export default Main;
