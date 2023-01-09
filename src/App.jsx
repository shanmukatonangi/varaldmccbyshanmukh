

import Box from './components/Box'
import Card1 from './components/Card1'
import Cardcomp from './components/Cardcomp'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'

function App() {
  

  return (
    <div className="App">
     <Navbar />
     <br></br>
     <br></br>
     <Searchbar />
     <Hero />
     <Hero2 />
     <Box />
     <Cardcomp />
     <Footer />
    </div>
  )
}

export default App
