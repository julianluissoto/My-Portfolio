import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import {lightTheme} from './components/Themes'
import { Switch, Route, useLocation} from "react-router-dom"

//components
import Main from './components/Main'
//import About from "./components/About"
import BlogPage from "./components/BlogPage"
import MyWorks from "./components/MyWorks"
import MySkills from "./components/MySkills"
import Contact from "./components/Contact"
import About from "./components/About"
import { AnimatePresence } from "framer-motion"
import MusicBar from "./SmallComponents/MusicBar"

//const LazyAbout = React.lazy(()=>import('./components/About'))

function App() {
  const location = useLocation()
  return <>
  <GlobalStyle/>
  <ThemeProvider theme={lightTheme} >
    
    <MusicBar/>
<AnimatePresence exitBeforeEnter >

<Switch location={location}  key={location.pathname}  >
  <Route exact path='/' component={Main}/>
  <Route exact path='/about' component={ About }/>
  <Route exact path='/blog' component={BlogPage}/>
  <Route exact path='/work' component={MyWorks}/>
  <Route exact path='/skills' component={MySkills}/>
  <Route exact path='/contact' component={Contact}/>
</Switch>
</AnimatePresence>

  

</ThemeProvider>
  
  
  </>
  
    
}

export default App

