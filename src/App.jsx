import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";


function App(){
  return(
    <>
    <Navbar/>
    <Profile/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;