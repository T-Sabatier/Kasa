import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Logement from './pages/Logement'
import About from './pages/About'
import Error from './pages/Error'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path ="/" element= {<Home />} />
        <Route  path ="/Logement/:id" element= {<Logement />} />
        <Route  path ="/About" element= {<About />} />
        <Route  path ="*" element= {<Error />} />
      </Routes>
    </BrowserRouter>
  )

}
export default Router
