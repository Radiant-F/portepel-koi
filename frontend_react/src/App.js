import React from "react";
import { Navbar } from "./component/export";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from "./container/export";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
