import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <nav className="flex gap-4 text-lg font-bold text-black bg-red-400">
        <Link className="hover:underline" to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link className="hover:underline" to="/agence">
          Agence
        </Link>{" "}
        |{" "}
        <Link className="hover:underline" to="/contact">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
