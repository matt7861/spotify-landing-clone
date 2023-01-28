import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Cta from "../components/Cta/Cta";
import Footer from "../components/Footer/Footer";
import "./style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Cta />
    <Footer />
  </React.StrictMode>
);
