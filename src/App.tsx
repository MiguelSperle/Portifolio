import Header from "./components/layout/header/index";
import Main from "./components/layout/main/index";
import About from "./components/layout/about/index";
import Habilidade from "./components/layout/Ability/index";
import Project from "./components/layout/repositoryProject/index";
import Footer from "./components/layout/footer/index";

import ScrollReveal from 'scrollreveal'


import './index.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    ScrollReveal().reveal('#container-header', {
      duration: 1000,
      delay: 300,
      easing: "ease-in-out",
      reset: false,
      origin: "top",
      distance: "70px",
  });

  ScrollReveal().reveal('#container-home', {
    duration: 1000,
    delay: 300,
    easing: "ease-in-out",
    reset: false,
    origin: "left",
    distance: "70px",
  })
  },[])

  return (
    <>
     <Header name="Miguel" />
     <Main name="Miguel Sperle" job="Front-End Developer." />
     <About title="Sobre"/>
     <Habilidade title="Habilidades" firstTech="JAVASCRIPT" secondTech="TYPESCRIPT" thirdTech="NEXT JS"
     fourthTech="REACT NATIVE"
     />
     <Project/>
     <Footer/>

    </>
  )
}

export default App
