import React from "react";
import logo from "../../imgs/logo.png";
import { ThemeProvider } from "styled-components";

const Banner = () => {
  return (
    <ThemeProvider>
      <div className="banner text-white">
        <div className="container p-4 text-center">
          <img src={logo}/>
          <div>
            <span>A place to </span>
            <span id="get-part">get</span>
            <span> the cool stuff.</span>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Banner;
