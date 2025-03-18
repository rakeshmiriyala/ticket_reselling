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
import OtpPage from "./components/Dummy/Otp";
import BookingPage from "./components/Concerts/Booking";
import EventSelection from "./components/Concerts/Eventselection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Registerr />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dummy" element={<Dummmy />} />
        <Route path="/profile" element={<Profile/>} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/success" element={<Success />} />
        <Route path="/sports" element={<SLanding />} />
        <Route path="/sportss" element={<SLandingg />} />
        <Route path="/concert" element={<CLanding />} />
        <Route path="/booking/:categoryId/:cardIndex" element={<BookingPage />} />
        <Route path="/select-event/:categoryId/:cardIndex" element={<EventSelection />} />
        <Route path="/concertt" element={<CLandingg />} />
        <Route path="/entertainment" element={<ELanding />} />
        <Route path="/entertainmentt" element={<ELandingg />} />
        <Route path="/movies" element={<MLanding />} />
        <Route path="/moviess" element={<MLandingg />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/selll" element={<Selll />} />
        <Route path="/otp" element={<OtpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
