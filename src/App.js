import './App.css'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Textslider from './components/Textslider.js'
import Showcase from './components/Showcase.js'
import Cards from './components/Cards.js'
import Threeitems from './components/Threeitems.js'
import YouLike from './components/YouLike.js'
import DealOfTheDay from './components/DealOfTheDay.js'
import NewLetter from './components/NewLetter.js'
import Services from './components/Services.js'
import Follow from './components/Follow.js'
import Closing from './components/Closing.js'
import Footer from './components/Footer.js'

function App () {
  return (
    <>
      <Navbar />
      <Home />
      <Textslider />
      <Showcase />
      <Cards />
      <Threeitems />
      <YouLike />
      <DealOfTheDay />
      <Services />
      <NewLetter />
      <Follow />
      <Closing />
      <Footer />
    </>
  )
}

export default App
