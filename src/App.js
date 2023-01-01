import { Fragment } from "react";
import "./App.css";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";

function App() {
  return (
    <Fragment className="App">
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
