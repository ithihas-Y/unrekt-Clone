import React from 'react';
// import { HeaderSection } from './components/HeaderSection';
// import { News } from '../News/News'
import DemoFooter from "components/Footers/DemoFooter.js";

import Intro from "./Sections/Intro.js";
import Tokenomics from "./Sections/Tokenomics.js";
import First from "./Sections/First.js";
import Ecosystem from "./Sections/Ecosystem";
import { Headers } from "./Sections/Headers";
export const Landing = () => {
 

  return (
    <>
      <div className="landing-page">
        <div className="wrapper" style={{ overflow: 'hidden' }}>
          <Headers />
          <div className="main main_as">
        {/* Sections START */}
        <First />
        <Intro />
        <Tokenomics />
        {/* <div className="space-100" /> */}
        {/* Sections END */}
        <DemoFooter />
        {/* <div className="space-100" /> */}
  
        </div>
        </div>
      </div>
    </>
  );
};
