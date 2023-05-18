import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from './pages/Header'
import Home from './pages/Home'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
`

export default class App extends React.Component{
  render(){
    return (
      <>
      <GlobalStyle/>
      <Header/>
      {/* <Home/> */}
      </>
    
  )
  }
  
}
