import Navbar from "./Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Route , Routes } from "react-router-dom"
import Project from "./pages/Project"

function App() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />          
          </Routes>
        </div>
      </>
    )   
  }

  export default App