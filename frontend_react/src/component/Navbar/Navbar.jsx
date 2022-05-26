import React from "react";

import { images } from "../../constants";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
    </nav>
  );
}
