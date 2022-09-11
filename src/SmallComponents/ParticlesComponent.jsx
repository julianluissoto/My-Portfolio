import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
// config on Particles background
import configDark from '../config/particlesjs-config.json'
import configLight from '../config/particlesjs-config-light.json'


const Container = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
`


const ParticlesComponent = (props) => {
  return (
    <Container>
        <Particles params={props.theme==='light'?configLight:configDark} />
        
        </Container>
  )
}

export default ParticlesComponent