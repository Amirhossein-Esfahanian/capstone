import { useEffect } from "react";
import "./App.css";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";
import Booking from "./layout/Booking";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
      </Router>
      {/* <Main></Main> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
