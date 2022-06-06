import React from "react";
import { NavDots, SocialMedia } from "../component/export";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@ 2022 Radiant</p>
          </div>
        </div>
        <NavDots active={idName} />
      </div>
    );
  };

export default AppWrap;
