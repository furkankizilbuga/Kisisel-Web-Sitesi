import "./index.css"
import '@fontsource-variable/inter';

import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <div className="font-main-font mx-32 ">
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App
