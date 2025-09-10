import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
