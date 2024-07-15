import "./index.css"
import '@fontsource-variable/inter';

import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import TextContextProvider from "./contexts/TextContext";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query"

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <TextContextProvider>
        <div className="dark:bg-[#252128]">
          <div className="font-main-font mx-32">
            <Header />
            <Hero />
            <Skills />
            <Profile />
            <Projects />
          </div>
          <Footer />
        </div>
      </TextContextProvider>
    </QueryClientProvider>
  )
}

export default App
