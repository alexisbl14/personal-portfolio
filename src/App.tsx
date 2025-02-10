import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Footer } from './components/Footer';
import { Education } from './components/Education';
import { Hobbies } from './components/Hobbies';
import { Experience } from './components/Experience';


function App() {

  return (
    <div>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Hobbies/>
      <Footer/>
    </div>
  )
}

export default App;
