import { Fragment } from "react";
import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";

function App() {
  return (
    <Fragment className="App">
      <Header> </Header>
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
