import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Registerr from "./components/Dummy/Registerr";
import Success from "./components/Success";
import SLanding from "./components/Sports/Landing";
import SLandingg from "./components/Sports/dummy/Landing";
import MLanding from "./components/Movies/Landing";
import MLandingg from "./components/Movies/dummy/Landing";
import ELanding from "./components/Entertainment/Landing";
import ELandingg from "./components/Entertainment/dummy/Landing";
import CLanding from "./components/Concerts/Landing";
import CLandingg from "./components/Concerts/dummy/Landing";
import Sell from "./components/Sell/Landing";
import Selll from "./components/Sell/dummy/Landing";
import LoginPage from "./components/Dummy/Loginn";
import Dummmy from "./components/Dummy/Dummmy";
import Profile from "./components/Dummy/Profile";
import Bregister from './components/Dummy/BusinessRegister'
import BloginPage from './components/Dummy/BusinessLogin'
import Bdummmy from './components/Dummy/Bdummy'
import Bprofile from './components/Dummy/Bprofile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Registerr />} />
        <Route path="/bsignin" element={<Bregister />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blogin" element={<BloginPage />} />
        <Route path="/dummy" element={<Dummmy />} />
        <Route path="/bdummy" element={<Bdummmy />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/bprofile" element={<Bprofile/>} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/success" element={<Success />} />
        <Route path="/sports" element={<SLanding />} />
        <Route path="/sportss" element={<SLandingg />} />
        <Route path="/concert" element={<CLanding />} />
        <Route path="/concertt" element={<CLandingg />} />
        <Route path="/entertainment" element={<ELanding />} />
        <Route path="/entertainmentt" element={<ELandingg />} />
        <Route path="/movies" element={<MLanding />} />
        <Route path="/moviess" element={<MLandingg />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/selll" element={<Selll />} />
      </Routes>
    </Router>
  );
}

export default App;
