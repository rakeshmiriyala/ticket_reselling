import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Success from "./components/Success";
import SLanding from "./components/Sports/Landing";
import MLanding from "./components/Movies/Landing";
import ELanding from "./components/Entertainment/Landing";
import CLanding from "./components/Concerts/Landing";
import Sell from "./components/Sell/Landing";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/sports" element={<SLanding />} />
        <Route path="/concert" element={<CLanding />} />
        <Route path="/entertainment" element={<ELanding />} />
        <Route path="/movies" element={<MLanding />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </Router>
  );
}

export default App;
