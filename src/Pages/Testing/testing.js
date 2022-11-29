import {React, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Header from "../../Share/Header";
import backgroundLight from "../../Share/particlesbackgroundLight";

const Testing = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
<Header />

return (
<div>
  <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={backgroundLight}
  />
    
  </div> 
  
  
);
};

export default Testing;