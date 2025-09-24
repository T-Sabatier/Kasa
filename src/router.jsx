import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Logement from "./pages/Logement/Logement";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Logement/:id" element={<Logement />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default Router;
