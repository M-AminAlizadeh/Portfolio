import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'


const HomePage = () => {
  return(
    <>
      <Navbar />
      <Intro />
      <Projects />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  )
}

export default HomePage;
