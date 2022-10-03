import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";
import { GrNode } from "react-icons/gr";
import { NavLink } from "react-router-dom";
const Logo = styled(NavLink)`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  height: 20rem;
  position: fixed;
  left: 1rem;
  top: 2rem;
  z-index: 3;
`;

const LogoPage = (props) => {
  return (
    <>
      {" "}
      <Logo to={"/contact"}>
        <GrNode style={{ fill: "black", width: "3rem", height: "3rem" }} />
      </Logo>
    </>
  );
};

export default LogoPage;
