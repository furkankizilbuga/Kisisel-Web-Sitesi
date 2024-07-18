import "./index.css"
import '@fontsource-variable/inter';

import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useContext } from "react";
import { TextContext } from "./contexts/TextContext";


function App() {

  const { isPending, error } = useContext(TextContext);

  if(isPending) return <div className="dark:bg-[#252128] dark:text-[#AEBCCF] text-title font-bold text-7xl w-screen h-screen flex justify-center items-center">Loading...</div>
  if(error) return <div className="dark:bg-[#252128] dark:text-[#AEBCCF] text-title font-bold text-4xl w-screen h-screen flex justify-center items-center">{`Bir hata oluştu: ${error.message}. Lütfen tekrar deneyiniz.`}</div>

  return (
        <div className="dark:bg-[#252128]">
          <div className="font-main-font w-3/4 m-auto ">
            <Header />
            <Hero />
            <Skills />
            <Profile />
            <Projects />
          </div>
          <Footer />
        </div>
  )
}

export default App
