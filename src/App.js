import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/master/Header";
import Menu from "./components/master/Menu";
import Footer from "./components/master/Footer";
import Content from "./components/master/Content";

export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}
