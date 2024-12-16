import "./App.css";
import Nav from "./components/Nav.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Discover from "./components/Discover";
import SignIn from "./components/SignIn";
import SignUpModal from "./components/SignUpModal";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUpModal />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          {" "}
          {/* Updated route path to /signup */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
